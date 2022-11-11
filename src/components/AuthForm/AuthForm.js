import './AuthForm.css';
import logo from '../../images/logo-min.svg';

function AuthForm({isRegisterForm, titleAuth, nameButton, errorText }){

    return(
        <form className="formAuth" > 
            <a className='formAuth__linkLogo' href='/'><img className='formAuth__logo' src={logo} alt='логотип'/></a>
            <h2 className = "formAuth__title">{titleAuth}</h2>
            <div className='formAuth__inputs'>
                <div className={`formAuth__inputConteiner  ${isRegisterForm ? '' : 'formAuth__input_display_none'}`} >
                    <label className='formAuth__label'>Имя</label>
                    <input required type='text' className="formAuth__input" name="name"/>
                </div>
                <div className='formAuth__inputConteiner'>
                    <label className='formAuth__label'>E-mail</label>
                    <input required type='email' className="formAuth__input"  name="email"/>
                </div>
                <div className='formAuth__inputConteiner'>
                    <label className='formAuth__label'>Пароль</label>
                    <input required type='text' className="formAuth__input" name="password" minLength="3"/>
                </div>
                <span className='authForm__error'>{errorText}</span>
            </div>
            <button className="formAuth__button" type="submit">{nameButton}</button>
            {isRegisterForm ? 
            (<div className='formAuth__linkConteiner'>
                <p className="formAuth__text">Уже зарегистрированы?</p>
                <a className="formAuth__link" href="/signin"> Войти</a>
            </div>) : (
            <div className='formAuth__linkConteiner'>
                <p className="formAuth__text">Ещё не зарегистрированы?</p>
                <a className="formAuth__link" href="/signup"> Регистрация</a>
            </div>
            )}
        </form>
    )
}
export default AuthForm;