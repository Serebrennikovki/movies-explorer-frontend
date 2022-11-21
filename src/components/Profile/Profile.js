import './Profile.css';
import Header from '../Header/Header';
import { useState, useEffect , useContext } from 'react';
import { CurrentUserContext} from '../../contexts/CurrentUserContext';
import {REGEX,TEXT_ERRORS} from '../../utils/data';

function Profile({openBM, loggedIn, setCurrentUser, onChangeProfile, onSignOut}){
    const [ values, setValues] = useState({}) ;
    const [isValid, setIsValid] = useState(false);
    const [ notificationText, setNotificationText ] = useState('');
    const [ isNotificationUserError, setIsNotificationUserError ] = useState(false);
    const currentUser = useContext(CurrentUserContext);
    useEffect(()=>{
        setValues(currentUser);
    }, [currentUser]);

    function handleChange(e){
        setNotificationText('');
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setValues({...values, [name]: value});
        if(value !== currentUser[name]){
            setIsValid(target.closest("form").checkValidity())
        } else {
            setIsValid(false);
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        onChangeProfile(values)
        .then((newUserInfo) => {
            setCurrentUser(newUserInfo);
            setIsNotificationUserError(false);
            setNotificationText('Профиль успешно изменен!');
            setIsValid(false);
          })
          .catch((err)=>{
            setIsNotificationUserError(true)
            if(err === 409){
                setNotificationText(TEXT_ERRORS.profile.incorrectData);
            } else {
                setNotificationText(TEXT_ERRORS.profile.others);
      
            }
          })
    }

    return(
        <div className='profile'>
            <Header
            openBurgerMenu = {openBM}
            loggedIn={loggedIn}/>
            <main className='profile__main'>
                <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
                <form className='profile__form' onSubmit={(e)=>handleSubmit(e)}>
                    <div className='profile__conteinerInput'>
                        <label className='profile__label'>Имя</label>
                        <input type='text' className='profile__input' name='name' value={values.name || ""} onChange={(e)=>{handleChange(e)}} pattern={REGEX.name}/>
                    </div>
                    <div className='profile__conteinerInput'>
                        <label className='profile__label'>E-mail</label>
                        <input type='email' className='profile__input' name='email' value={values.email || ""} onChange={(e)=>{handleChange(e)}} pattern={REGEX.email}/>
                    </div> 
                    <span className={`profile__inputText ${isNotificationUserError ? 'profile__inputError' : ''}`}>{notificationText}</span>  
                    <button type='submit' className={`profile__submitForm ${isValid ? '' : 'profile__submitForm_type_disable'}`} disabled={!isValid}>Редактировать</button>
                </form> 
                <button type='button' className='profile__button' onClick={onSignOut}>Выйти из аккаунта</button>
            </main>
            <header></header>
        </div> 
    );
}

export default Profile;
//{`profile__inputText ${isNotificationUserError ? 'profile__inputError' : ''}`}