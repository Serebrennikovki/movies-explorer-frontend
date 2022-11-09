import './Register.css';
import AuthForm from '../AuthForm/AuthForm';

function Register(){
    return(
        <AuthForm
        isRegisterForm={true}
        titleAuth={'Добро пожаловать!'}
        nameButton={'Зарегистрироваться'}
        errorText={'Что-то пошло не так...'}
        />
    )
}

export default Register;