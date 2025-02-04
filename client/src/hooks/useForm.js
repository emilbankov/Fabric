import { useState } from "react";

export function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {
        let value;
        if (e.target.type === "file") {
            value = e.target.files[0];
        } else {
            value = e.target.value;
        }

        setValues((state) => ({
            ...state,
            [e.target.name]: value,
        }));
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