export function getAllFilms(URL){
    return fetch(URL,
        {
            method: 'GET',
            headers: {
                 'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            if(res.ok){
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
            }
        )
}