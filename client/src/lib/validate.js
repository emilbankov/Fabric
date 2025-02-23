import * as Yup from 'yup';

export const registerValidationSchema = Yup.object({
    firstName: Yup.string()
        .matches(/^[А-Я][а-я]+$/, 'Името трябва да започва с главна буква и да съдържа само кирилица')
        .required('Задължително поле'),
    lastName: Yup.string()
        .matches(/^[А-Я][а-я]+$/, 'Фамилията трябва да започва с главна буква и да съдържа само кирилица')
        .required('Задължително поле'),
    email: Yup.string()
        .email('Невалиден имейл адрес')
        .required('Задължително поле'),
    phoneNumber: Yup.string()
        .matches(/^8[7-9][0-9] [0-9]{3} [0-9]{3}$/, 'Въведете валиден български телефонен номер')
        .required('Задължително поле'),
    address: Yup.string()
        .matches(/^ул\. [А-Я].*/, 'Адресът трябва да започва с "ул. " и главна буква на кирилица')
        .required('Задължително поле'),
    region: Yup.string()
        .matches(/^[А-Я][а-я]+$/, 'Областта трябва да започва с главна буква и да съдържа само кирилица')
        .required('Задължително поле'),
    city: Yup.string()
        .matches(/^[А-Я][а-я]+$/, 'Градът трябва да започва с главна буква и да съдържа само кирилица')
        .required('Задължително поле'),
    password: Yup.string()
        .min(8, 'Паролата трябва да бъде поне 8 символа')
        .matches(/[A-Z]/, 'Паролата трябва да съдържа поне една главна буква')
        .matches(/[a-z]/, 'Паролата трябва да съдържа поне една малка буква')
        .matches(/[0-9]/, 'Паролата трябва да съдържа поне една цифра')
        .matches(/[@$!%*?&]/, 'Паролата трябва да съдържа поне един специален символ (@$!%*?&)')
        .required('Задължително поле'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Паролите не съвпадат')
        .required('Задължително поле'),
});