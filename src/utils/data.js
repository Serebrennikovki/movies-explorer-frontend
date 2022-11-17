export const TEXT_ERRORS = {
    "emptySearchInput" : "Нужно ввести ключевое слово",
    "search" : {
        "empty": "Ничего не найдено",
        "error": "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
    },
    'auth' : {
        'userExist' : 'Пользователь с таким email уже существует.',
        'others' : 'При регистрации пользователя произошла ошибка.'
    },
    'login' : {
        'incorrectData' : 'Вы ввели неправильный логин или пароль. ',
    },
    'profile' : {
        'incorrectData': 'Пользователь с таким email уже существует.',
        'others' : 'При обновлении профиля произошла ошибка.',
    }

}

export const DURATION_SHORT_FILMS = 42;

export const BASE_URL_MOVIES = 'https://api.nomoreparties.co';

export const BASE_URL = 'https://api.serebrennikov.nomoredomains.icu/';

export const REGEX = {
    'email' : '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$',
    'name' : '[a-zA-Zа-яА-Я\-\s]*$',
}
