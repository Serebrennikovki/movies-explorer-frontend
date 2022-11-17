import './Login.css';
import AuthForm from '../AuthForm/AuthForm';

function Login({handleSubmit, errorText}){
    return(
        <div>
            <header></header>
            <main>
                <AuthForm
                    isRegisterForm={false}
                    titleAuth={'Рады видеть!'}
                    nameButton={'Войти'}
                    errorText={errorText}
                    functionSubmit={handleSubmit}
                />
            </main>
            <footer></footer>
        </div>
        
    )
}

export default Login;