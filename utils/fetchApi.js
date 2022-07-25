import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '2479e31f42msh629a39bc6ed89e7p189a4bjsn8f01ae4d74c2',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
};
