import './NotFound.css';
import {useHistory} from 'react-router-dom';

function NotFound(){
    const history = useHistory();
    
    return(
        <div className='notFound'>
            <div className='notFound__conteiner'>
                <h1 className='notFound__title'>404</h1>
                <p className='notFound__description'>Страница не найдена</p>
                <button type='button' onClick={()=>history.goBack()} className='notFound__link'>Назад</button>
            </div>
           
        </div>
    )
}
export default NotFound;