const apiUrl = 'https://localhost:5001/api/Article';

export const getAllArticles = () => {
    return fetch(apiUrl)
    .then((res) => res.json())
};

export const getArticleById = (id) => {
    return fetch(`${apiUrl}/${id}`)
    .then((res) => res.json())
};