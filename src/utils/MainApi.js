import {BASE_URL} from '../utils/data';

class Api {
    constructor(option){
        this._baseUrl = option.baseURL;
    }
    _checkResponse(res){
        if(res.ok){
            return res.json();
        }
        return Promise.reject(res.status);
    }

    register(valuesForm){
        return fetch(`${this._baseUrl}signup`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'name': valuesForm.name,
                'password': valuesForm.password,
                'email' : valuesForm.email
            })
        })
        .then(res=>this._checkResponse(res))
    }

    login(email, password){
        return fetch (`${this._baseUrl}signin`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                password:password,
                email:email
            })   
        })
        .then(res=>this._checkResponse(res))
    }

    getUserInfo(token){
        return fetch(`${this._baseUrl}users/me`,{
            method: 'GET',
            headers: {
                "Authorization" : `Bearer ${token}`,
                 'Content-Type': 'application/json'
            },
        })
        .then(res=>this._checkResponse(res))
    }

    changeUserInfo(data, token){
        return fetch(`${this._baseUrl}users/me`,{
        method: 'PATCH',
        headers: {
            "Authorization" : `Bearer ${token}`,
             'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data.name,
            email: data.email
        })
    })
            .then(res=>this._checkResponse(res))
    }

    addFilm(data,token){
        return fetch(`${this._baseUrl}movies` ,{
            method: 'POST',
            headers: {
                "Authorization" : `Bearer ${token}`,
                 'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country: data.country,
                description:data.description,
                director: data.director,
                duration: data.duration,
                image: data.image,
                movieId: data.movieId,
                nameEN: data.nameEN,
                nameRU: data.nameRU,
                thumbnail: data.thumbnail,
                trailerLink: data.trailerLink,
                year: data.year
              })
        })
        .then(res=>this._checkResponse(res))
    }

    deleteFilm(idFilm, token){
        return fetch(`${this._baseUrl}movies/${idFilm}`,{
            method:'DELETE',
            headers: {
                "Authorization" : `Bearer ${token}`,
                 'Content-Type': 'application/json'
               },
        })
        .then(res=>this._checkResponse(res))
    }

    getFilms(token){
        return fetch(`${this._baseUrl}movies`,
        {
            method: 'GET',
            headers: {
                "Authorization" : `Bearer ${token}`,
                 'Content-Type': 'application/json'
            },
        })
          .then(res=>this._checkResponse(res))
    }


}

const api = new Api({
    baseURL: BASE_URL,
  });

  export default api;