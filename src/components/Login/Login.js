import './Login.css';
import AuthForm from '../AuthForm/AuthForm';

function Login(){
    return(
        <AuthForm
        isRegisterForm={false}
        titleAuth={'Рады видеть!'}
        nameButton={'Войти'}
        errorText={''}
        />
    )
}

export default Login;