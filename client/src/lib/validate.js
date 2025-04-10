import * as Yup from 'yup';

export const registerValidationSchema = Yup.object({
    firstName: Yup.string()
        .matches(/^[А-Я][а-я]+(?:\s[А-Я][а-я]+)*$/, 'Името трябва да започва с главна буква и да съдържа само кирилица')
        .required('Задължително поле'),
    lastName: Yup.string()
        .matches(/^[А-Я][а-я]+(?:\s[А-Я][а-я]+)*$/, 'Фамилията трябва да започва с главна буква и да съдържа само кирилица')
        .required('Задължително поле'),
    email: Yup.string()
        .email('Невалиден имейл адрес')
        .required('Задължително поле'),
    phoneNumber: Yup.string()
        .matches(/^8[7-9][0-9] [0-9]{3} [0-9]{3}$/, 'Въведете валиден български телефонен номер')
        .required('Задължително поле'),
    region: Yup.string()
        .matches(/^[А-Я][а-я]+(?:\s[А-Я][а-я]+)*$/, 'Областта трябва да започва с главна буква и да съдържа само кирилица')
        .required('Задължително поле'),
    city: Yup.string()
        .matches(/^[А-Я][а-я]+(?:\s[А-Я][а-я]+)*$/, 'Градът трябва да започва с главна буква и да съдържа само кирилица')
        .required('Задължително поле'),
    address: Yup.string()
        .required('Задължително поле'),
    password: Yup.string()
        .min(4, 'Паролата трябва да бъде поне 4 символа')
        .required('Задължително поле'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Паролите не съвпадат')
        .required('Задължително поле'),
    agree: Yup.boolean()
        .oneOf([true], 'Трябва да се съгласите с политиката за поверителност')
        .required('Трябва да се съгласите с политиката за поверителност'),
    recaptcha: Yup.string()
        .required('Моля, потвърдете, че не сте робот')
});

export const editAccountValidationSchema = Yup.object({
    firstName: Yup.string()
        .matches(/^[А-Я][а-я]+(?:\s[А-Я][а-я]+)*$/, 'Името трябва да започва с главна буква и да съдържа само кирилица')
        .required('Задължително поле'),
    lastName: Yup.string()
        .matches(/^[А-Я][а-я]+(?:\s[А-Я][а-я]+)*$/, 'Фамилията трябва да започва с главна буква и да съдържа само кирилица')
        .required('Задължително поле'),
    email: Yup.string()
        .email('Невалиден имейл адрес')
        .required('Задължително поле'),
    phoneNumber: Yup.string()
        .matches(/^8[7-9][0-9] [0-9]{3} [0-9]{3}$/, 'Въведете валиден български телефонен номер')
        .required('Задължително поле'),
    address: Yup.string()
        .required('Задължително поле'),
    region: Yup.string()
        .matches(/^[А-Я][а-я]+(?:\s[А-Я][а-я]+)*$/, 'Областта трябва да започва с главна буква и да съдържа само кирилица')
        .required('Задължително поле'),
    city: Yup.string()
        .matches(/^[А-Я][а-я]+(?:\s[А-Я][а-я]+)*$/, 'Градът трябва да започва с главна буква и да съдържа само кирилица')
        .required('Задължително поле'),
});

export const addClothingValidationSchema = Yup.object({
    name: Yup.string()
        .required('Задължително поле'),
    description: Yup.string()
        .min(10, 'Описанието трябва да бъде поне 10 символа')
        .matches(/^[A-ZА-Я]/, 'Описанието трябва да започва с главна буква')
        .required('Задължително поле'),
    type: Yup.string()
        .notOneOf([''], 'Моля изберете тип')
        .required('Задължително поле'),
    category: Yup.string()
        .notOneOf([''], 'Моля изберете категория')
        .required('Задължително поле'),
    model: Yup.string()
        .matches(/^\d{3}$/, 'Моделът трябва да бъде точно 3 цифри')
        .required('Задължително поле'),
    frontImage: Yup.mixed()
        .required('Задължително е да качите снимка отпред'),
    backImage: Yup.mixed()
        .test('isRequired', 'Задължително е да качите снимка отзад', function (value) {
            return (this.parent.type === 'KIT' || this.parent.type === 'TOWELS' || this.parent.type === 'BANDANAS') ? true : !!value;
        }),
});

export const editClothingValidationSchema = Yup.object({
    name: Yup.string()
        .required('Задължително поле'),
    description: Yup.string()
        .min(10, 'Описанието трябва да бъде поне 10 символа')
        .matches(/^[A-ZА-Я]/, 'Описанието трябва да започва с главна буква')
        .required('Задължително поле'),
    type: Yup.string()
        .notOneOf([''], 'Моля изберете тип')
        .required('Задължително поле'),
    category: Yup.string()
        .notOneOf([''], 'Моля изберете категория')
        .required('Задължително поле'),
    model: Yup.string()
        .required('Задължително поле'),
});

export const deliverySchema = Yup.object().shape({
    firstName: Yup.string()
        .matches(/^[А-Я][а-я]+(?:\s[А-Я][а-я]+)*$/, 'Името трябва да започва с главна буква и да съдържа само кирилица')
        .required('Задължително поле'),
    lastName: Yup.string()
        .matches(/^[А-Я][а-я]+(?:\s[А-Я][а-я]+)*$/, 'Фамилията трябва да започва с главна буква и да съдържа само кирилица')
        .required('Задължително поле'),
    email: Yup.string()
        .email('Невалиден имейл адрес')
        .required('Задължително поле'),
    phoneNumber: Yup.string()
        .matches(/^8[7-9][0-9] [0-9]{3} [0-9]{3}$/, 'Въведете валиден български телефонен номер')
        .required('Задължително поле'),
    deliveryType: Yup.string()
        .oneOf(['address', 'office'], 'Невалиден тип доставка')
        .required('Задължително поле'),
    region: Yup.string().when('deliveryType', {
        is: 'address',
        then: () => Yup.string()
            .matches(/^[А-Я][а-я]+$/, 'Областта трябва да започва с главна буква и да съдържа само кирилица')
            .required('Задължително поле'),
        otherwise: () => Yup.string().notRequired(),
    }),
    city: Yup.string().when('deliveryType', {
        is: 'address',
        then: () => Yup.string()
            .matches(/^[А-Я][а-я]+(?:\s[А-Я][а-я]+)*$/, 'Градът трябва да започва с главна буква и да съдържа само кирилица')
            .required('Задължително поле'),
        otherwise: () => Yup.string().notRequired(),
    }),
    address: Yup.string().when('deliveryType', {
        is: 'address',
        then: () => Yup.string()
            .required('Задължително поле'),
        otherwise: () => Yup.string().notRequired(),
    }),
    officeAddress: Yup.string().when(['deliveryType', 'manualAddress'], {
        is: (deliveryType) => deliveryType === 'office',
        then: () => Yup.string()
            .required('Задължително поле'),
        otherwise: () => Yup.string().notRequired(),
    }),
});

export const forgottenPasswordSchema = Yup.object({
    email: Yup.string()
        .email('Невалиден имейл адрес')
        .required('Задължително поле'),
});

export const resetPasswordSchema = Yup.object({
    password: Yup.string()
        .min(4, 'Паролата трябва да бъде поне 4 символа')
        .required('Задължително поле'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Паролите не съвпадат')
        .required('Задължително поле'),
});
