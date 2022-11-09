import './Profile.css';
import Header from '../Header/Header';

function Profile(){
    const name = 'Константин';
    const email = 'serebrennikov_k_i@mail.ru';
    return(
        <div className='profile'>
            <Header/>
            <main className='profile__main'>
                <h2 className='profile__title'>Привет, {name}!</h2>
                <form className='profile__form'>
                    <div className='profile__conteinerInput'>
                        <label className='profile__label'>Имя</label>
                        <input className='profile__input' id='name'/>
                    </div>
                    <div className='profile__conteinerInput'>
                        <label className='profile__label'>E-mail</label>
                        <input className='profile__input' id='E-mail'></input>
                    </div>   
                    <button type='submit' className='profile__submitForm'>Редактировать</button>
                </form>
                <button type='button' className='profile__button' >Выйти из аккаунта</button>
            </main>
            <header></header>
        </div> 
    );
}

export default Profile;