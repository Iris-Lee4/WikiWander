const apiUrl = "https://localhost:5001/api/Game"

export const addGame = (game) => {
    return fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(game),
    })
    .then(res => res.json())
};

export const getAllByUserId = (userId) => {
    return fetch(`${apiUrl}/GetAllByUserId/${userId}`)
    .then((res) => res.json())
};

export const getGameById = (id) => {
    return fetch(`${apiUrl}/${id}`)
    .then((res) => res.json())
};

export const updateGame = (game) => {
    return fetch(`${apiUrl}/${game.Id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(game),
    })
};

export const deleteGame = (id) => {
    return fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
    })
};