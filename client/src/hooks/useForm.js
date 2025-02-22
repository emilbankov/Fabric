import { useState } from "react";

const priceMap = {
    T_SHIRT: "29.00",
    SWEATSHIRT: "54.00",
    KIT: "59.00",
    SHORTS: "30.00",
    LONG_T_SHIRT: "37.00"
};

export const useForm = (submitHandler, initialValues) => {
    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {
        let value;
        if (e.target.type === "file") {
            value = e.target.files[0];
        } else {
            value = e.target.value;
        }

        setValues((state) => {
            let newValues = { ...state, [e.target.name]: value };

            if (e.target.name === "type") {
                newValues.price = priceMap[value] || "";
            }

            return newValues;
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const formValues = { ...values };
        
        if (formValues.phoneNumber) {
            formValues.phoneNumber = '+359 ' + formValues.phoneNumber;
        }

        submitHandler(formValues);
    };

    return {
        values,
        onChange,
        onSubmit,
    };
};
