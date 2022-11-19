import './Register.css';
import AuthForm from '../AuthForm/AuthForm';

function Register({errorText, handleSubmit}){


    return(
        <div>
            <header></header>
            <main>
                <AuthForm
                    isRegisterForm={true}
                    titleAuth={'Добро пожаловать!'}
                    nameButton={'Зарегистрироваться'}
                    errorText={errorText}
                    functionSubmit={handleSubmit}
                />
            </main>
            <footer></footer>
        </div>
        
        
    )
}

export default Register;