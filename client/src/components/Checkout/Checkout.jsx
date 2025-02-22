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

export default function Checkout() {
    const location = useLocation();
    const navigate = useNavigate();

    const { isAuthenticated, userProfile } = useContext(AuthContext);
    const { loginSubmitHandler } = useContext(AuthContext);

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

    // Add form values state
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        city: '',
        address: '',
        region: '',
    });

    // Pre-fill form with user profile data when authenticated
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

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({
            ...prev,
            [name]: value
        }));
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
            // Clear address-related fields when switching to office delivery
            setFormValues(prev => ({
                ...prev,
                city: '',
                address: '',
                region: '',
            }));
            // Clear office search state
            setSearchTerm('');
            setSelectedOffice(null);
            setOffices([]);
            setManualAddress(false);
        } else {
            // Clear office-related fields when switching to address delivery
            setSearchTerm('');
            setSelectedOffice(null);
            setOffices([]);
            setManualAddress(false);

            // If user is authenticated, restore their address details
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

        // Clear any existing timeout
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        // If the search term is empty, clear results and return
        if (!value.trim()) {
            setOffices([]);
            return;
        }

        // Set a new timeout
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
        }, 500); // Wait 500ms after the user stops typing

        setSearchTimeout(timeoutId);
    };

    // Clean up timeout on component unmount
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

    useEffect(() => {
        // Set the register radio button as checked by default
        const registerRadio = document.querySelector('input[value="register"]');
        if (registerRadio) {
            registerRadio.checked = true;
        }
    }, []); // Run once when component mounts

    // Update step completion when authentication status changes
    useEffect(() => {
        if (isAuthenticated) {
            setStep1Complete(true);
            setDeliveryType('address'); // Set delivery type to address when user logs in

            // Pre-fill form with user profile data
            if (userProfile) {
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
        }
    }, [isAuthenticated, userProfile]);

    const handleStep2Continue = () => {
        let officeData = null;

        if (deliveryType === 'office') {
            if (selectedOffice) {
                officeData = selectedOffice.address.fullAddress;
            } else if (manualAddress && searchTerm) {
                officeData = searchTerm;
            }
        }

        // Calculate total price
        const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const deliveryCost = totalPrice >= 100 ? 0 : (deliveryType === 'address' ? 9.00 : 6.90);
        const finalPrice = totalPrice + deliveryCost;

        // Log all form fields and delivery information
        console.log('Form Values:', {
            ...formValues,
            deliveryType,
            selectedOffice: officeData,
            cart: cart.map(item => ({
                id: item.id,
                quantity: item.quantity,
                price: item.price,
                size: item.size,
                gender: item.gender,
                type: item.type
            })),
            totalPrice: Number(totalPrice.toFixed(2)),
            deliveryCost: Number(deliveryCost.toFixed(2)),
            finalPrice: Number(finalPrice.toFixed(2))
        });

        // Add validation here if needed
        setStep2Complete(true);

        // Close step 2 panel and open step 3
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
        // Create office data structure for both selected office and manual input
        let officeData = null;

        if (deliveryType === 'office') {
            if (selectedOffice) {
                officeData = selectedOffice.address.fullAddress;
            } else if (manualAddress && searchTerm) {
                officeData = searchTerm;
            }
        }

        // Calculate total price
        const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const deliveryCost = totalPrice >= 100 ? 0 : (deliveryType === 'address' ? 9.00 : 6.90);
        const finalPrice = totalPrice + deliveryCost;

        const orderData = {
            ...formValues,
            deliveryType,
            selectedOffice: officeData,
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

        console.log(orderData);
        try {
            await orderService.createOrder({ ...orderData });
            clearCart();
            navigate('/orders-history-users');
        } catch (error) {
            console.error('Failed to create order:', error);
        }
    };

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
                                                    <h2>Заврщащ се клиент</h2>
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
                                                            <a className="forgotten-password" href="/forgotten">Забравена парола?</a>
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
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <fieldset id="account">
                                                        <legend>Лични данни</legend>
                                                        <div className="form-group" style={{ display: "none" }}>
                                                            <label className="control-label">Customer Group</label>
                                                            <div className="radio">
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        name="customer_group_id"
                                                                        defaultValue={1}
                                                                        defaultChecked="checked"
                                                                    />
                                                                    Default
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group required">
                                                            <label
                                                                className="control-label"
                                                                htmlFor="input-payment-firstname"
                                                            >
                                                                Име
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="firstName"
                                                                value={formValues.firstName}
                                                                onChange={handleFormChange}
                                                                placeholder="Име"
                                                                id="input-payment-firstname"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="form-group required">
                                                            <label
                                                                className="control-label"
                                                                htmlFor="input-payment-lastname"
                                                            >
                                                                Фамилия
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="lastName"
                                                                value={formValues.lastName}
                                                                onChange={handleFormChange}
                                                                placeholder="Фамилия"
                                                                id="input-payment-lastname"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="form-group required">
                                                            <label
                                                                className="control-label"
                                                                htmlFor="input-payment-email"
                                                            >
                                                                E-Mail
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="email"
                                                                value={formValues.email}
                                                                onChange={handleFormChange}
                                                                placeholder="E-Mail"
                                                                id="input-payment-email"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="form-group required">
                                                            <label className="control-label" htmlFor="input-payment-phoneNumber">Телефонен номер</label>
                                                            <div className="input-with-prefix">
                                                                <input
                                                                    className="form-control phone-field"
                                                                    type="tel"
                                                                    id="input-payment-phoneNumber"
                                                                    name="phoneNumber"
                                                                    placeholder="Телефонен номер"
                                                                    onChange={handleFormChange}
                                                                    values={formValues.phoneNumber}
                                                                    pattern="[0-9]{9}"
                                                                    title="Please enter 9 digits (without the country code)"
                                                                    maxLength="9"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <div className="col-sm-6">
                                                    <fieldset id="address" className="">
                                                        <legend>Адрес</legend>
                                                        <div className="form-group">
                                                            <div className="radio">
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        name="delivery_type"
                                                                        value="office"
                                                                        checked={deliveryType === 'office'}
                                                                        onChange={handleDeliveryTypeChange}
                                                                    />
                                                                    Офис на Еконт
                                                                </label>
                                                            </div>
                                                            <div className="radio">
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        name="delivery_type"
                                                                        value="address"
                                                                        checked={deliveryType === 'address'}
                                                                        onChange={handleDeliveryTypeChange}
                                                                    />
                                                                    До адрес
                                                                </label>
                                                            </div>
                                                        </div>

                                                        {deliveryType === 'office' ? (
                                                            <div className="form-group">
                                                                <label className="control-label" htmlFor="input-payment-city">
                                                                    Търсене на офис
                                                                </label>
                                                                <div className="position-relative">
                                                                    <input
                                                                        type="text"
                                                                        value={searchTerm}
                                                                        onChange={(e) => handleCitySearch(e.target.value)}
                                                                        placeholder="Въведете населено място"
                                                                        className="form-control"
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
                                                                                        setOffices([]);
                                                                                    }}
                                                                                >
                                                                                    {office.address.fullAddress}
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
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
                                                                                setManualAddress(e.target.checked);
                                                                                if (e.target.checked) {
                                                                                    setSearchTerm('');
                                                                                    setSelectedOffice(null);
                                                                                    setOffices([]);
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
                                                                                className="form-control"
                                                                                placeholder="Въведете пълния адрес на офиса"
                                                                                value={searchTerm}
                                                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <div className="form-group">
                                                                    <label className="control-label" htmlFor="input-payment-region">
                                                                        Област
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="region"
                                                                        value={formValues.region}
                                                                        onChange={handleFormChange}
                                                                        placeholder="Област"
                                                                        id="input-payment-region"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="control-label" htmlFor="input-payment-city">
                                                                        Град или село
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="city"
                                                                        value={formValues.city}
                                                                        onChange={handleFormChange}
                                                                        placeholder="Град"
                                                                        id="input-payment-city"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="control-label" htmlFor="input-payment-address-1">
                                                                        Адрес
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="address"
                                                                        value={formValues.address}
                                                                        onChange={handleFormChange}
                                                                        placeholder="Адрес"
                                                                        id="input-payment-address-1"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </>
                                                        )}
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <div className="buttons">
                                                <div className="pull-right">
                                                    <input
                                                        type="button"
                                                        value="Продължи"
                                                        id="button-guest"
                                                        data-loading-text="Loading..."
                                                        className="btn btn-primary"
                                                        onClick={handleStep2Continue}
                                                    />
                                                </div>
                                            </div>
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