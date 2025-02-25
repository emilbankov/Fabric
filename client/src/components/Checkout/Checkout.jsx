import "./Checkout.css";
import { useEffect, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthProvider";
import { CartContext } from "../../contexts/CartProvider";
import { Link } from "react-router-dom";
import { gender } from "../../lib/dictionary";
import * as econtService from "../../services/econtService";
import { useForm } from "../../hooks/useForm";
import * as orderService from '../../services/ordersService';
import { Formik, Form, Field } from 'formik';
import { deliverySchema } from '../../lib/validate';

export default function Checkout() {
    const location = useLocation();
    const navigate = useNavigate();

    const { isAuthenticated, userProfile, loginSubmitHandler, authError, clearAuthError } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        email: '',
        password: ''
    });

    const [isGuestCheckout, setIsGuestCheckout] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(true);
    const { cart, clearCart } = useContext(CartContext);
    const [cities, setCities] = useState([]);
    const [deliveryType, setDeliveryType] = useState(isAuthenticated ? 'address' : 'office');
    const [searchTerm, setSearchTerm] = useState('');
    const [offices, setOffices] = useState([]);
    const [selectedOffice, setSelectedOffice] = useState(null);
    const [isSearching, setIsSearching] = useState(false);
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [manualAddress, setManualAddress] = useState(false);
    const [step1Complete, setStep1Complete] = useState(false);
    const [step2Complete, setStep2Complete] = useState(false);
    console.log(cart);

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        city: '',
        address: '',
        region: '',
    });

    useEffect(() => {
        if (isAuthenticated && userProfile) {
            setFormValues({
                firstName: userProfile.firstName || '',
                lastName: userProfile.lastName || '',
                email: userProfile.email || '',
                phoneNumber: userProfile.phoneNumber || '',
                city: userProfile.city || '',
                address: userProfile.address || '',
                region: userProfile.region || '',
            });
        }
    }, [isAuthenticated, userProfile]);

    const formatPhoneNumber = (value) => {
        const digits = value.replace(/\D/g, '');

        const formatted = digits.match(/.{1,3}/g)?.join(' ') || digits;

        return formatted;
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phoneNumber') {
            const cleanValue = value.replace(/\s/g, '');
            if (cleanValue.length <= 9) {
                const formatted = formatPhoneNumber(cleanValue);
                setFormValues(prev => ({
                    ...prev,
                    [name]: formatted
                }));
            }
        } else {
            setFormValues(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleGuestCheckout = () => {
        const guestRadio = document.querySelector('input[value="guest"]');
        const registerRadio = document.querySelector('input[value="register"]');

        if (guestRadio && guestRadio.checked) {
            setIsGuestCheckout(true);
            setShowLoginForm(false);
            setStep1Complete(true);

            const step1Content = document.getElementById('collapse-checkout-option');
            const step2Content = document.getElementById('collapse-payment-address');

            if (step1Content) {
                step1Content.classList.remove('in');
            }
            if (step2Content) {
                step2Content.classList.add('in');
            }
        } else if (registerRadio && registerRadio.checked) {
            setIsGuestCheckout(false);
            setShowLoginForm(true);
        }
    };

    const handleRadioChange = (e) => {
        if (e.target.value === 'guest') {
            setIsGuestCheckout(false);
            setShowLoginForm(false);
        } else if (e.target.value === 'register') {
            setIsGuestCheckout(false);
            setShowLoginForm(true);
        }
    };

    const handleDeliveryTypeChange = (e) => {
        const newDeliveryType = e.target.value;
        setDeliveryType(newDeliveryType);

        if (newDeliveryType === 'office') {
            setFormValues(prev => ({
                ...prev,
                city: '',
                address: '',
                region: '',
            }));
            setSearchTerm('');
            setSelectedOffice(null);
            setOffices([]);
            setManualAddress(false);
        } else {
            setSearchTerm('');
            setSelectedOffice(null);
            setOffices([]);
            setManualAddress(false);

            if (isAuthenticated && userProfile) {
                setFormValues(prev => ({
                    ...prev,
                    city: userProfile.city || '',
                    address: userProfile.address || '',
                    region: userProfile.region || '',
                }));
            }
        }
    };

    const handleCitySearch = async (value) => {
        setSearchTerm(value);

        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        if (!value.trim()) {
            setOffices([]);
            return;
        }

        const timeoutId = setTimeout(async () => {
            setIsSearching(true);
            try {
                const officeResults = await econtService.getOffices(value);
                setOffices(officeResults);
            } catch (error) {
                console.error('Error fetching offices:', error);
                setOffices([]);
            } finally {
                setIsSearching(false);
            }
        }, 500);

        setSearchTimeout(timeoutId);
    };

    useEffect(() => {
        return () => {
            if (searchTimeout) {
                clearTimeout(searchTimeout);
            }
        };
    }, [searchTimeout]);


    useEffect(() => {
        Promise.all([
            econtService.getCities(),
        ])
            .then(([cities]) => {
                setCities(cities);
            })
            .catch(err => {
                console.error("Error fetching data:", err);
            });
    }, [location.pathname]);

    useEffect(() => {
        const registerRadio = document.querySelector('input[value="register"]');
        if (registerRadio) {
            registerRadio.checked = true;
        }
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            setStep1Complete(true);
            setDeliveryType('address');

            if (userProfile) {
                setFormValues({
                    firstName: userProfile.firstName || '',
                    lastName: userProfile.lastName || '',
                    email: userProfile.email || '',
                    phoneNumber: userProfile.phoneNumber?.replace('+359 ', '') || '',
                    city: userProfile.city || '',
                    address: userProfile.address || '',
                    region: userProfile.region || '',
                });
            }
        }
    }, [isAuthenticated, userProfile]);

    const handleStep2Continue = () => {
        // Calculate total price
        const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const deliveryCost = totalPrice >= 100 ? 0 : (deliveryType === 'address' ? 9.00 : 6.90);
        const finalPrice = totalPrice + deliveryCost;

        // Log step 3 data
        console.log('Step 3 Data:', {
            personalInfo: {
                firstName: formValues.firstName,
                lastName: formValues.lastName,
                email: formValues.email,
                phoneNumber: formValues.phoneNumber,
            },
            deliveryInfo: {
                type: deliveryType,
                ...(deliveryType === 'office'
                    ? { officeAddress: selectedOffice ? selectedOffice.address.fullAddress : searchTerm }
                    : {
                        region: formValues.region,
                        city: formValues.city,
                        address: formValues.address,
                    }
                )
            },
            orderDetails: {
                items: cart,
                totalPrice: Number(totalPrice.toFixed(2)),
                deliveryCost: Number(deliveryCost.toFixed(2)),
                finalPrice: Number(finalPrice.toFixed(2))
            }
        });

        setStep2Complete(true);

        const step2Content = document.getElementById('collapse-payment-address');
        const step3Content = document.getElementById('collapse-checkout-confirm');

        if (step2Content) {
            step2Content.classList.remove('in');
        }
        if (step3Content) {
            step3Content.classList.add('in');
        }
    };

    const handleOrderSubmit = async () => {
        // Calculate total price
        const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const deliveryCost = totalPrice >= 100 ? 0 : (deliveryType === 'address' ? 9.00 : 6.90);
        const finalPrice = totalPrice + deliveryCost;

        // Base order data
        const orderData = {
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            email: formValues.email,
            phoneNumber: '+359 ' + formValues.phoneNumber,
            deliveryType,
            cart: cart.map(item => ({
                id: item.id,
                price: item.price,
                quantity: item.quantity,
                size: item.size,
                type: item.type,
                gender: item.gender
            })),
            totalPrice: Number(totalPrice.toFixed(2)),
            deliveryCost: Number(deliveryCost.toFixed(2)),
            finalPrice: Number(finalPrice.toFixed(2)),
        };

        // Add delivery-specific data
        if (deliveryType === 'office') {
            orderData.selectedOffice = selectedOffice ? selectedOffice.address.fullAddress : searchTerm;
        } else {
            orderData.city = formValues.city;
            orderData.address = formValues.address;
            orderData.region = formValues.region;
        }

        // Log what's being sent to backend
        console.log('Sending to backend:', orderData);

        try {
            await orderService.createOrder(orderData);
            clearCart();
            navigate('/orders-history');
        } catch (error) {
            console.error('Failed to create order:', error);
        }
    };

    useEffect(() => {
        return () => clearAuthError();
    }, [location.pathname]);

    useEffect(() => {
        const existingScript = document.querySelector('script[src="/js/custom.js"]');
        if (existingScript && existingScript.parentNode) {
            existingScript.parentNode.removeChild(existingScript);
        }

        const script = document.createElement('script');
        script.src = '/js/custom.js';
        script.async = true;

        document.body.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, [location.pathname]);

    return (
        <>
            <div className="checkout-checkout   layout-2 left-col">
                <div id="checkout-checkout" className="container">
                    <div className="row">
                        <aside id="column-left" className="col-sm-3 hidden-xs">
                            <div className="box">
                                <div className="box-heading">Account</div>
                                <div className="list-group">
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/login"
                                        className="list-group-item"
                                    >
                                        Login{" "}
                                    </a>{" "}
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/register"
                                        className="list-group-item"
                                    >
                                        Register
                                    </a>{" "}
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/forgotten"
                                        className="list-group-item"
                                    >
                                        Forgotten Password{" "}
                                    </a>
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/account "
                                        className="list-group-item"
                                    >
                                        My Account{" "}
                                    </a>
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/address"
                                        className="list-group-item"
                                    >
                                        Address Book
                                    </a>{" "}
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/wishlist "
                                        className="list-group-item"
                                    >
                                        Wish List{" "}
                                    </a>{" "}
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/order "
                                        className="list-group-item"
                                    >
                                        Order History{" "}
                                    </a>{" "}
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/download"
                                        className="list-group-item"
                                    >
                                        Downloads{" "}
                                    </a>
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/recurring"
                                        className="list-group-item"
                                    >
                                        Recurring payments{" "}
                                    </a>{" "}
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/reward "
                                        className="list-group-item"
                                    >
                                        Reward Points{" "}
                                    </a>{" "}
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/return"
                                        className="list-group-item"
                                    >
                                        Returns{" "}
                                    </a>{" "}
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/transaction"
                                        className="list-group-item"
                                    >
                                        Transactions{" "}
                                    </a>{" "}
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/newsletter"
                                        className="list-group-item"
                                    >
                                        Newsletter{" "}
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-viewport">
                                <div
                                    id="banner0"
                                    className="swiper-container  single-banner  swiper-container-horizontal"
                                >
                                    <div className="swiper-wrapper">
                                        <div
                                            className="swiper-slide swiper-slide-active"
                                            style={{ width: 272 }}
                                        >
                                            <a href="#">
                                                <img
                                                    src="https://opc.webdigify.com/OPC02/OPC037_vesture/image/cache/catalog/left-banner-272x340.jpg"
                                                    alt="Left Banner1"
                                                    className="img-responsive"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    {/* If we need pagination */}
                                    <div className="swiper-pagination swiper-pagination-bullets">
                                        <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                                    </div>
                                </div>
                            </div>
                            <div className="box latest">
                                <div className="box-heading">Latest Product</div>
                                <div className="box-content">
                                    <div className="box-product  productbox-grid" id=" latest-grid">
                                        <div className="product-items">
                                            <div className="product-items">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/product&product_id=49">
                                                                <img
                                                                    src="https://opc.webdigify.com/OPC02/OPC037_vesture/image/cache/catalog/8-70x70.jpg"
                                                                    title="tote bags for women"
                                                                    alt="tote bags for women"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="https://opc.webdigify.com/OPC02/OPC037_vesture/image/cache/catalog/13-70x70.jpg"
                                                                    title="tote bags for women"
                                                                    alt="tote bags for women"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="caption">
                                                                <div className="rating">
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                </div>
                                                                <h4>
                                                                    <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/product&product_id=49 ">
                                                                        tote bags for women{" "}
                                                                    </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $241.99
                                                                    <span className="price-tax">Ex Tax: $199.99</span>
                                                                </p>
                                                            </div>
                                                            <div className="product_hover_block">
                                                                <div className="action">
                                                                    <button
                                                                        type="button"
                                                                        className="cart_button"
                                                                        title="Add to Cart"
                                                                    >
                                                                        <i
                                                                            className="fa fa-shopping-cart"
                                                                            area-hidden="true"
                                                                        />{" "}
                                                                    </button>
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/quick_view&product_id=49"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-items">
                                            <div className="product-items">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/product&product_id=48">
                                                                <img
                                                                    src="https://opc.webdigify.com/OPC02/OPC037_vesture/image/cache/catalog/11-70x70.jpg"
                                                                    title="Men's lace up Shoes"
                                                                    alt="Men's lace up Shoes"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="https://opc.webdigify.com/OPC02/OPC037_vesture/image/cache/catalog/17-70x70.jpg"
                                                                    title="Men's lace up Shoes"
                                                                    alt="Men's lace up Shoes"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="caption">
                                                                <div className="rating">
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                </div>
                                                                <h4>
                                                                    <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/product&product_id=48 ">
                                                                        Men's lace up Shoes{" "}
                                                                    </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $122.00
                                                                    <span className="price-tax">Ex Tax: $100.00</span>
                                                                </p>
                                                            </div>
                                                            <div className="product_hover_block">
                                                                <div className="action">
                                                                    <button
                                                                        type="button"
                                                                        className="cart_button"
                                                                        title="Add to Cart"
                                                                    >
                                                                        <i
                                                                            className="fa fa-shopping-cart"
                                                                            area-hidden="true"
                                                                        />{" "}
                                                                    </button>
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/quick_view&product_id=48"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-items">
                                            <div className="product-items">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/product&product_id=47">
                                                                <img
                                                                    src="https://opc.webdigify.com/OPC02/OPC037_vesture/image/cache/catalog/4-70x70.jpg"
                                                                    title="round toe Shoes"
                                                                    alt="round toe Shoes"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="https://opc.webdigify.com/OPC02/OPC037_vesture/image/cache/catalog/6-70x70.jpg"
                                                                    title="round toe Shoes"
                                                                    alt="round toe Shoes"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="caption">
                                                                <div className="rating">
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                </div>
                                                                <h4>
                                                                    <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/product&product_id=47 ">
                                                                        round toe Shoes{" "}
                                                                    </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $122.00
                                                                    <span className="price-tax">Ex Tax: $100.00</span>
                                                                </p>
                                                            </div>
                                                            <div className="product_hover_block">
                                                                <div className="action">
                                                                    <button
                                                                        type="button"
                                                                        className="cart_button"
                                                                        title="Add to Cart"
                                                                    >
                                                                        <i
                                                                            className="fa fa-shopping-cart"
                                                                            area-hidden="true"
                                                                        />{" "}
                                                                    </button>
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/quick_view&product_id=47"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span
                                className="latest_default_width"
                                style={{ display: "none", visibility: "hidden" }}
                            />
                        </aside>
                        <div id="content" className="col-sm-9">
                            <ul className="breadcrumb">
                                <li><Link to="/"><i className="fa fa-home" /></Link></li>
                                <li><Link to="/view-cart">Количка</Link></li>
                                <li><Link to="/checkout">Поръчка</Link></li>
                            </ul>
                            <h1>Завършване на поръчка</h1>
                            <div className="panel-group" id="accordion">
                                <div className="panel panel-default" style={{ opacity: isAuthenticated ? 0.5 : 1 }}>
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a
                                                href="#collapse-checkout-option"
                                                data-toggle="collapse"
                                                data-parent="#accordion"
                                                className={`accordion-toggle ${isAuthenticated ? 'disabled' : (isGuestCheckout ? 'collapsed' : '')}`}
                                                aria-expanded={!isAuthenticated && !isGuestCheckout}
                                                onClick={(e) => {
                                                    if (isAuthenticated) {
                                                        e.preventDefault();
                                                        return;
                                                    }
                                                }}
                                                style={{ pointerEvents: isAuthenticated ? 'none' : 'auto' }}
                                            >
                                                Стъпка 1: Вход или продължаване като гост <i className="fa fa-caret-down" />
                                            </a>
                                        </h4>
                                    </div>
                                    <div
                                        className={`panel-collapse collapse ${!isAuthenticated && !isGuestCheckout ? 'in' : ''}`}
                                        id="collapse-checkout-option"
                                        aria-expanded={!isAuthenticated && !isGuestCheckout}
                                        style={{ pointerEvents: isAuthenticated ? 'none' : 'auto' }}
                                    >
                                        <div className="panel-body">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <h2>Нов клиент</h2>
                                                    <div className="radio">
                                                        <label>
                                                            {" "}
                                                            <input
                                                                type="radio"
                                                                name="account"
                                                                value="register"
                                                                onChange={handleRadioChange}
                                                            />
                                                            Влез в профил
                                                        </label>
                                                    </div>
                                                    <div className="radio">
                                                        <label>
                                                            {" "}
                                                            <input
                                                                type="radio"
                                                                name="account"
                                                                value="guest"
                                                                onChange={handleRadioChange}
                                                            />
                                                            Продължаване като гост
                                                        </label>
                                                    </div>
                                                    <p>
                                                        Ако имате профил и влезете в него, ще можете да пазарувате
                                                        още по-бързо, данните ще бъдат попълнени автоматично.
                                                    </p>
                                                    <input
                                                        type="button"
                                                        defaultValue="Продължи"
                                                        id="button-account"
                                                        data-loading-text="Loading..."
                                                        className="btn btn-primary"
                                                        onClick={handleGuestCheckout}
                                                    />
                                                </div>
                                                <div className="col-sm-6 login-form" style={{ display: showLoginForm ? 'block' : 'none' }}>
                                                    <h2>Завръщащ се клиент</h2>
                                                    {authError && (
                                                        <div className="alert alert-danger" role="alert">
                                                            {authError}
                                                        </div>
                                                    )}
                                                    <form onSubmit={onSubmit}>
                                                        <div className="form-group">
                                                            <label className="control-label" htmlFor="email">E-mail</label>
                                                            <input
                                                                className="form-control"
                                                                type="email"
                                                                id="email"
                                                                name="email"
                                                                placeholder="E-mail"
                                                                onChange={onChange}
                                                                value={values.email}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="control-label" htmlFor="password">
                                                                Парола
                                                            </label>
                                                            <input
                                                                className="form-control mb-5"
                                                                type="password"
                                                                id="password"
                                                                name="password"
                                                                placeholder="Парола"
                                                                onChange={onChange}
                                                                value={values.password}
                                                            />
                                                            <Link className="forgotten-password" to="/forgotten-password">Забравена парола?</Link>
                                                        </div>
                                                        <input type="submit" value="Вход" className="btn btn-primary login-fr" />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default" style={{ opacity: !step1Complete ? 0.5 : 1 }}>
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a
                                                href="#collapse-payment-address"
                                                data-toggle="collapse"
                                                data-parent="#accordion"
                                                className={`accordion-toggle ${!step1Complete ? 'disabled' : ''}`}
                                                aria-expanded={step1Complete}
                                                onClick={(e) => {
                                                    if (!step1Complete) {
                                                        e.preventDefault();
                                                        return;
                                                    }
                                                }}
                                                style={{ pointerEvents: !step1Complete ? 'none' : 'auto' }}
                                            >
                                                Стъпка 2: Детайли на доставката <i className="fa fa-caret-down" />
                                            </a>
                                        </h4>
                                    </div>
                                    <div
                                        className={`panel-collapse collapse ${step1Complete ? 'in' : ''}`}
                                        id="collapse-payment-address"
                                        aria-expanded={step1Complete}
                                        style={{ pointerEvents: !step1Complete ? 'none' : 'auto' }}
                                    >
                                        <div className="panel-body">
                                            <Formik
                                                initialValues={{
                                                    firstName: isAuthenticated && userProfile ? userProfile.firstName : formValues.firstName,
                                                    lastName: isAuthenticated && userProfile ? userProfile.lastName : formValues.lastName,
                                                    email: isAuthenticated && userProfile ? userProfile.email : formValues.email,
                                                    phoneNumber: isAuthenticated && userProfile ? userProfile.phoneNumber?.replace('+359 ', '') : formValues.phoneNumber,
                                                    deliveryType: deliveryType,
                                                    region: isAuthenticated && userProfile ? userProfile.region : formValues.region,
                                                    city: isAuthenticated && userProfile ? userProfile.city : formValues.city,
                                                    address: isAuthenticated && userProfile ? userProfile.address : formValues.address,
                                                    officeAddress: searchTerm,
                                                    selectedOffice: selectedOffice,
                                                }}
                                                enableReinitialize={true}
                                                validationSchema={deliverySchema}
                                                onSubmit={(values) => {
                                                    // Update form values
                                                    setFormValues({
                                                        firstName: values.firstName,
                                                        lastName: values.lastName,
                                                        email: values.email,
                                                        phoneNumber: values.phoneNumber,
                                                        region: values.region,
                                                        city: values.city,
                                                        address: values.address,
                                                    });

                                                    // Set delivery related state
                                                    if (values.deliveryType === 'office') {
                                                        setSearchTerm(values.officeAddress);
                                                    }

                                                    setStep2Complete(true);

                                                    const step2Content = document.getElementById('collapse-payment-address');
                                                    const step3Content = document.getElementById('collapse-checkout-confirm');

                                                    if (step2Content) {
                                                        step2Content.classList.remove('in');
                                                    }
                                                    if (step3Content) {
                                                        step3Content.classList.add('in');
                                                    }
                                                }}
                                            >
                                                {({ errors, touched, values, setFieldValue }) => (
                                                    <Form>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <fieldset id="account">
                                                                    <legend>Лични данни</legend>

                                                                    <div className="form-group required">
                                                                        <label className="control-label" htmlFor="firstName">Име</label>
                                                                        <Field
                                                                            type="text"
                                                                            name="firstName"
                                                                            className={`form-control ${errors.firstName && touched.firstName ? 'is-invalid' : ''}`}
                                                                            placeholder="Име"
                                                                        />
                                                                        {errors.firstName && touched.firstName && (
                                                                            <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                                {errors.firstName}
                                                                            </div>
                                                                        )}
                                                                    </div>

                                                                    <div className="form-group required">
                                                                        <label className="control-label" htmlFor="lastName">Фамилия</label>
                                                                        <Field
                                                                            type="text"
                                                                            name="lastName"
                                                                            className={`form-control ${errors.lastName && touched.lastName ? 'is-invalid' : ''}`}
                                                                            placeholder="Фамилия"
                                                                        />
                                                                        {errors.lastName && touched.lastName && (
                                                                            <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                                {errors.lastName}
                                                                            </div>
                                                                        )}
                                                                    </div>

                                                                    <div className="form-group required">
                                                                        <label className="control-label" htmlFor="email">E-Mail</label>
                                                                        <Field
                                                                            type="email"
                                                                            name="email"
                                                                            className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
                                                                            placeholder="E-Mail"
                                                                        />
                                                                        {errors.email && touched.email && (
                                                                            <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                                {errors.email}
                                                                            </div>
                                                                        )}
                                                                    </div>

                                                                    <div className="form-group required">
                                                                        <label className="control-label" htmlFor="phoneNumber">Телефонен номер</label>
                                                                        <div className="input-with-prefix">
                                                                            <Field
                                                                                className={`form-control phone-field ${errors.phoneNumber && touched.phoneNumber ? 'is-invalid' : ''}`}
                                                                                type="tel"
                                                                                id="phoneNumber"
                                                                                name="phoneNumber"
                                                                                placeholder="8** *** ***"
                                                                                onChange={(e) => {
                                                                                    const cleanValue = e.target.value.replace(/\s/g, '');
                                                                                    if (cleanValue.length <= 9) {
                                                                                        const formatted = formatPhoneNumber(cleanValue);
                                                                                        setFieldValue('phoneNumber', formatted);
                                                                                    }
                                                                                }}
                                                                                value={values.phoneNumber}
                                                                                maxLength="11"
                                                                            />
                                                                        </div>
                                                                        {errors.phoneNumber && touched.phoneNumber && (
                                                                            <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                                {errors.phoneNumber}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </fieldset>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <fieldset id="address">
                                                                    <legend>Адрес</legend>

                                                                    <div className="form-group">
                                                                        <div className="radio">
                                                                            <label>
                                                                                <Field
                                                                                    type="radio"
                                                                                    name="deliveryType"
                                                                                    value="office"
                                                                                    onChange={(e) => {
                                                                                        setFieldValue('deliveryType', e.target.value);
                                                                                        handleDeliveryTypeChange(e);
                                                                                    }}
                                                                                />
                                                                                Офис на Еконт
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio">
                                                                            <label>
                                                                                <Field
                                                                                    type="radio"
                                                                                    name="deliveryType"
                                                                                    value="address"
                                                                                    onChange={(e) => {
                                                                                        setFieldValue('deliveryType', e.target.value);
                                                                                        handleDeliveryTypeChange(e);
                                                                                    }}
                                                                                />
                                                                                До адрес
                                                                            </label>
                                                                        </div>
                                                                    </div>

                                                                    {values.deliveryType === 'office' ? (
                                                                        <div className="form-group">
                                                                            <label className="control-label" htmlFor="officeAddress">Търсене на офис</label>
                                                                            <div className="position-relative">
                                                                                <Field
                                                                                    type="text"
                                                                                    name="officeAddress"
                                                                                    className={`form-control ${errors.officeAddress && touched.officeAddress ? 'is-invalid' : ''}`}
                                                                                    placeholder="Въведете населено място"
                                                                                    value={searchTerm}
                                                                                    onChange={(e) => {
                                                                                        setFieldValue('officeAddress', e.target.value);
                                                                                        handleCitySearch(e.target.value);
                                                                                    }}
                                                                                    disabled={manualAddress}
                                                                                />
                                                                                {isSearching && !manualAddress && <div className="searching">Търсене...</div>}
                                                                                {offices.length > 0 && searchTerm && !manualAddress && (
                                                                                    <div className="offices-dropdown">
                                                                                        {offices.map((office) => (
                                                                                            <div
                                                                                                key={`${office.id}-${office.address.fullAddress}`}
                                                                                                className="office-item"
                                                                                                onClick={() => {
                                                                                                    setSelectedOffice(office);
                                                                                                    setSearchTerm(office.address.fullAddress);
                                                                                                    setFieldValue('officeAddress', office.address.fullAddress);
                                                                                                    setOffices([]);
                                                                                                }}
                                                                                            >
                                                                                                {office.address.fullAddress}
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                            {!manualAddress && errors.officeAddress && touched.officeAddress && (
                                                                                <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                                    {errors.officeAddress}
                                                                                </div>
                                                                            )}

                                                                            {selectedOffice && !manualAddress && (
                                                                                <div className="selected-office-info">
                                                                                    <p>Град: {selectedOffice.address.fullAddress.trim().split(" ")[0] || 'N/A'}</p>
                                                                                    <p>Име на офис: {selectedOffice.name || 'N/A'}</p>
                                                                                    <p>Адрес: {selectedOffice.address.fullAddress.split(" ").slice(2).join(" ") || 'N/A'}</p>
                                                                                </div>
                                                                            )}

                                                                            <div className="manual-address-option">
                                                                                <label className="checkbox-container">
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        checked={manualAddress}
                                                                                        onChange={(e) => {
                                                                                            const isChecked = e.target.checked;
                                                                                            setManualAddress(isChecked);
                                                                                            if (isChecked) {
                                                                                                setSearchTerm('');
                                                                                                setSelectedOffice(null);
                                                                                                setOffices([]);
                                                                                                setFieldValue('officeAddress', '');
                                                                                            }
                                                                                        }}
                                                                                    />
                                                                                    Не намирам офиса, който търся
                                                                                </label>
                                                                            </div>

                                                                            {manualAddress && (
                                                                                <div className="manual-address-input">
                                                                                    <div className="form-group">
                                                                                        <label className="control-label" htmlFor="input-manual-office">
                                                                                            Въведете адрес на офис ръчно
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            id="input-manual-office"
                                                                                            className={`form-control ${errors.officeAddress && touched.officeAddress ? 'is-invalid' : ''}`}
                                                                                            placeholder="Град (Област) ул. Улица"
                                                                                            value={searchTerm}
                                                                                            onChange={(e) => {
                                                                                                setSearchTerm(e.target.value);
                                                                                                setFieldValue('officeAddress', e.target.value);
                                                                                            }}
                                                                                        />
                                                                                        {manualAddress && errors.officeAddress && touched.officeAddress && (
                                                                                            <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                                                {errors.officeAddress}
                                                                                            </div>
                                                                                        )}
                                                                                    </div>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    ) : (
                                                                        <>
                                                                            <div className="form-group">
                                                                                <label className="control-label" htmlFor="region">Област</label>
                                                                                <Field
                                                                                    type="text"
                                                                                    name="region"
                                                                                    className={`form-control ${errors.region && touched.region ? 'is-invalid' : ''}`}
                                                                                    placeholder="Област"
                                                                                />
                                                                                {errors.region && touched.region && (
                                                                                    <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                                        {errors.region}
                                                                                    </div>
                                                                                )}
                                                                            </div>

                                                                            <div className="form-group">
                                                                                <label className="control-label" htmlFor="city">Град или село</label>
                                                                                <Field
                                                                                    type="text"
                                                                                    name="city"
                                                                                    className={`form-control ${errors.city && touched.city ? 'is-invalid' : ''}`}
                                                                                    placeholder="Град"
                                                                                />
                                                                                {errors.city && touched.city && (
                                                                                    <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                                        {errors.city}
                                                                                    </div>
                                                                                )}
                                                                            </div>

                                                                            <div className="form-group">
                                                                                <label className="control-label" htmlFor="address">Адрес</label>
                                                                                <Field
                                                                                    type="text"
                                                                                    name="address"
                                                                                    className={`form-control ${errors.address && touched.address ? 'is-invalid' : ''}`}
                                                                                    placeholder="Адрес"
                                                                                />
                                                                                {errors.address && touched.address && (
                                                                                    <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                                        {errors.address}
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </>
                                                                    )}
                                                                </fieldset>
                                                            </div>
                                                        </div>

                                                        <div className="buttons">
                                                            <div className="pull-right">
                                                                <button type="submit" className="btn btn-primary">
                                                                    Продължи
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                )}
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default" style={{ opacity: !step2Complete ? 0.5 : 1 }}>
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a
                                                href="#collapse-checkout-confirm"
                                                data-toggle="collapse"
                                                data-parent="#accordion"
                                                className={`accordion-toggle ${!step2Complete ? 'disabled' : ''}`}
                                                aria-expanded={step2Complete}
                                                onClick={(e) => {
                                                    if (!step2Complete) {
                                                        e.preventDefault();
                                                        return;
                                                    }
                                                }}
                                                style={{ pointerEvents: !step2Complete ? 'none' : 'auto' }}
                                            >
                                                Стъпка 3: Подтвърждаване на поръчката <i className="fa fa-caret-down" />
                                            </a>
                                        </h4>
                                    </div>
                                    <div
                                        className={`panel-collapse collapse ${step2Complete ? 'in' : ''}`}
                                        id="collapse-checkout-confirm"
                                        aria-expanded={step2Complete}
                                        style={{ pointerEvents: !step2Complete ? 'none' : 'auto' }}
                                    >
                                        <div className="panel-body">
                                            {cart.map((item) => (
                                                <table key={`${item.id}-${item.size}-${item.type || "default"}`} className="table table-bordered shopping-cart responsive">
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-center">Име</td>
                                                            <td className="text-center">
                                                                <Link to={`/clothing/details/${item.id}`}>
                                                                    {item.name}
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-center">Снимка</td>
                                                            <td className="text-center">
                                                                <Link to={`/clothing/details/${item.id}`}>
                                                                    <img
                                                                        src={`https://res.cloudinary.com/dfttdd1vq/image/upload/w_55,h_68${item.image}`}
                                                                        alt={item.name}
                                                                        title={item.name}
                                                                        className="img-thumbnail"
                                                                    />
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-center">Модел</td>
                                                            <td className="text-center">
                                                                #{item.model}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-center">Размер</td>
                                                            <td className="text-center">
                                                                {item.size.slice(0, 3)}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-center">Пол</td>
                                                            <td className="text-center">
                                                                {gender[item.gender]}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-center">Тип</td>
                                                            <td className="text-center">
                                                                {item?.type?.slice(0, 28) || "—"}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-center">Количество</td>
                                                            <td className="text-center">
                                                                {item.quantity}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-center">Общо</td>
                                                            <td className="text-center">
                                                                {(item.price * item.quantity).toFixed(2)} лв.
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            ))}

                                            <div className="table-responsive">
                                                <table className="table table-bordered table-hover shopping-cart">
                                                    <thead>
                                                        <tr>
                                                            <td className="text-center">Име</td>
                                                            <td className="text-center">Снимка</td>
                                                            <td className="text-center">Модел</td>
                                                            <td className="text-center">Размер</td>
                                                            <td className="text-center">Пол</td>
                                                            <td className="text-center">Тип</td>
                                                            <td className="text-center">Количество</td>
                                                            <td className="text-center">Общо</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {cart.map(item => (
                                                            <tr key={`${item.id}-${item.size}-${item.type || "default"}`}>
                                                                <td className="text-center">
                                                                    <Link to={`/clothing/details/${item.id}`}>
                                                                        {item.name}
                                                                    </Link>
                                                                </td>
                                                                <td className="text-center">
                                                                    <Link to={`/clothing/details/${item.id}`}>
                                                                        <img
                                                                            src={`https://res.cloudinary.com/dfttdd1vq/image/upload/w_55,h_68${item.image}`}
                                                                            alt={item.name}
                                                                            title={item.name}
                                                                            className="img-thumbnail"
                                                                        />
                                                                    </Link>
                                                                </td>
                                                                <td className="text-center">#{item.model}</td>
                                                                <td className="text-center">{item.size.slice(0, 3)}</td>
                                                                <td className="text-center">{gender[item.gender]}</td>
                                                                <td className="text-center">{item?.type?.slice(0, 28) || "—"}</td>
                                                                <td className="text-center">{item.quantity}</td>
                                                                <td className="text-center">{(item.price * item.quantity).toFixed(2)} лв.</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <td colSpan={7} className="text-right">
                                                                <strong>Общо:</strong>
                                                            </td>
                                                            <td className="text-right total">
                                                                {cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)} лв.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={7} className="text-right">
                                                                <strong>Доставка:</strong>
                                                            </td>
                                                            <td className="text-right total">
                                                                {cart.reduce((total, item) => total + (item.price * item.quantity), 0) >= 100
                                                                    ? "Безплатна"
                                                                    : (deliveryType === 'address' ? "9.00 лв." : "6.90 лв.")}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={7} className="text-right">
                                                                <strong>Крайна сума:</strong>
                                                            </td>
                                                            <td className="text-right total">
                                                                {(cart.reduce((total, item) => total + (item.price * item.quantity), 0) +
                                                                    (cart.reduce((total, item) => total + (item.price * item.quantity), 0) >= 100
                                                                        ? 0
                                                                        : (deliveryType === 'address' ? 9.00 : 6.90)
                                                                    )).toFixed(2)} лв.
                                                            </td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                            <div className="buttons">
                                                <div className="pull-right">
                                                    <input
                                                        type="button"
                                                        value="Потвърди поръчка"
                                                        id="button-confirm"
                                                        className="btn btn-primary"
                                                        onClick={handleOrderSubmit}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};