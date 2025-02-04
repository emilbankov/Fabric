import { get, post, put, del } from '../lib/request.js';

const baseUrl = 'https://tshirt-latest.onrender.com/clothes';

// export const getAll = async () => await get(baseUrl);
// export const getOne = async (gameId) => await get(`${baseUrl}/${gameId}`);

// export const getLatest = async () => {
//     const result = await get(`${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=4`);

//     return result;
// }

export const create = (name, description, price, type, gender, category, model, frontImage, backImage) => post(`${baseUrl}/add`, {
    name,
    description,
    price,
    type,
    gender,
    category,
    model,
    frontImage,
    backImage
});

// export const edit = async (gameId, gameData) => {
//     const result = await put(`${baseUrl}/${gameId}`, gameData);

//     return result;
// };

// export const deleteGame = async (gameId) => await del(`${baseUrl}/${gameId}`);