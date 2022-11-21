import './AuthForm.css';
import logo from '../../images/logo-min.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { REGEX, TEXT_ERRORS } from '../../utils/data';

function AuthForm({isRegisterForm, titleAuth, nameButton, errorText, functionSubmit }){
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);


    function handleChangeForm(e){
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
        if(name === 'name' && target.validationMessage){
            setErrors({...errors, [name]:TEXT_ERRORS.validation.inputName});
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        functionSubmit(values);
    }

    return(
        <form className="formAuth" onChange={(e)=>handleChangeForm(e)} onSubmit={(e)=>handleSubmit(e)}> 
            <a className='formAuth__linkLogo' href='/'><img className='formAuth__logo' src={logo} alt='логотип'/></a>
            <h2 className = "formAuth__title">{titleAuth}</h2>
            <div className='formAuth__inputs'>
                {
                    (isRegisterForm && 
                        <div className={`formAuth__inputConteiner  ${isRegisterForm ? '' : 'formAuth__input_display_none'}`} >
                            <label className='formAuth__label'>Имя</label>
                            <input required type='text' className="formAuth__input" name="name" pattern={REGEX.name}/>
                            <span className='authForm__error'>{errors.name}</span>
                        </div>
                    )
                }
                <div className='formAuth__inputConteiner'>
                    <label className='formAuth__label'>E-mail</label>
                    <input required type='email' className="formAuth__input" name="email" pattern={REGEX.email}/>
                    <span className='authForm__error'>{errors.email}</span>
                </div>
                <div className='formAuth__inputConteiner'>
                    <label className='formAuth__label'>Пароль</label>
                    <input required type='password' className="formAuth__input" name="password" minLength="3"/>
                    <span className='authForm__error'>{errors.password}</span>
                </div>
                <span className='authForm__errorRequest'>{errorText}</span>
            </div>
            <button className={`formAuth__button ${isValid ? '' : 'formAuth__button_type_disable' }`} disabled={!isValid} type="submit">{nameButton}</button>
            {isRegisterForm ? 
            (<div className='formAuth__linkConteiner'>
                <p className="formAuth__text">Уже зарегистрированы?</p>
                <Link className="formAuth__link" to="/signin"> Войти</Link>
            </div>) : (
            <div className='formAuth__linkConteiner'>
                <p className="formAuth__text">Ещё не зарегистрированы?</p>
                <Link className="formAuth__link" to="/signup"> Регистрация</Link>
            </div>
            )}
        </form>
    )
}
export default AuthForm;