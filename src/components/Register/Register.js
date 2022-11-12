import './Register.css';
import AuthForm from '../AuthForm/AuthForm';

function Register(){
    return(
        <div>
            <header></header>
            <main>
                <AuthForm
            isRegisterForm={true}
            titleAuth={'Добро пожаловать!'}
            nameButton={'Зарегистрироваться'}
            errorText={'Что-то пошло не так...'}
            />
            </main>
            <footer></footer>
        </div>
        
        
    )
}

export default Register;