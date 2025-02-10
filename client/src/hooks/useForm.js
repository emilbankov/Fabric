import { useState } from "react";

const priceMap = {
    T_SHIRT: 29,
    SWEATSHIRT: 54,
    KIT: 59,
    SHORTS: 30,
    LONG_T_SHIRT: 37
};

export function useForm(submitHandler, initialValues) {
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

            // If changing "type", update "price"
            if (e.target.name === "type") {
                newValues.price = priceMap[value] || "";
            }

            return newValues;
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        submitHandler(values);
    };

    return {
        values,
        onChange,
        onSubmit,
    };
}
