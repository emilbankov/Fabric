import { get, post, put, del } from '../lib/request.js';

const baseUrl = 'https://tshirt-latest.onrender.com/clothes';

const getDeviceInfo = () => {
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const plugins = JSON.stringify(
        Array.from(navigator.plugins).map(plugin => ({
            name: plugin.name,
            description: plugin.description,
            filename: plugin.filename,
        }))
    );
    const hardwareConcurrency = navigator.hardwareConcurrency;
    const deviceMemory = navigator.deviceMemory;

    return { screenResolution, timezone, plugins, hardwareConcurrency, deviceMemory };
};

export const create = (name, description, price, type, gender, category, model, frontImage, backImage) => {
    const deviceInfo = getDeviceInfo();

    // Create a new FormData object
    const formData = new FormData();

    // Append text fields
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('type', type);
    formData.append('gender', gender);
    formData.append('category', category);
    formData.append('model', model);

    // Append the image files
    formData.append('frontImage', frontImage);
    formData.append('backImage', backImage);

    // Append device info as a JSON string
    formData.append('deviceInfo', JSON.stringify(deviceInfo));

    // Send the POST request with FormData
    return fetch(`${baseUrl}/add`, {
        method: 'POST',
        body: formData, // FormData is automatically set with the correct content type
    });
};


// export const getAll = async () => await get(baseUrl);
// export const getOne = async (gameId) => await get(`${baseUrl}/${gameId}`);

// export const getLatest = async () => {
//     const result = await get(`${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=4`);

//     return result;
// }


// export const edit = async (gameId, gameData) => {
//     const result = await put(`${baseUrl}/${gameId}`, gameData);

//     return result;
// };

// export const deleteGame = async (gameId) => await del(`${baseUrl}/${gameId}`);