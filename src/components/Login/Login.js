import './Login.css';
import AuthForm from '../AuthForm/AuthForm';

function Login(){
    return(
        <div>
            <header></header>
            <main>
                <AuthForm
                    isRegisterForm={false}
                    titleAuth={'Рады видеть!'}
                    nameButton={'Войти'}
                    errorText={''}
                />
            </main>
            <footer></footer>
        </div>
        
    )
}

export default Login;