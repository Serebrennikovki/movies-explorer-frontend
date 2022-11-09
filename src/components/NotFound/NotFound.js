import './NotFound.css';
import {Link} from 'react-router-dom';

function NotFound(){
    return(
        <div className='notFound'>
            <div className='notFound__conteiner'>
                <h1 className='notFound__title'>404</h1>
                <p className='notFound__description'>Страница не найдена</p>
                <Link to='/' className='notFound__link'>Назад</Link>
            </div>
           
        </div>
    )
}
export default NotFound;