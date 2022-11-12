import './SearchForm.css';
import LogoSearch from '../../images/icon_search-min.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState } from 'react';

function SearchForm(){
    const [ isShortFilm, setShortFilm ] = useState('false');
    const [ searchFilm, setSearchFilm ] = useState('');
    const [ errorText, setErrorText ] = useState('');


    function validateForm(e){
        console.log('form valid')
        e.preventDefault();
        if(!searchFilm){
            setErrorText('Необходимо заоплнить поле');
            return;
        }
        handleSubmit();
    }
    function handleSubmit(){
        setErrorText('');
        console.log('form handle');
    }

    function handleCheckbox(){
        if(isShortFilm){
            setShortFilm('false');
        } else {
            setShortFilm('true');
        }
    }

    function handleInput(e){
        setSearchFilm(e.target.value)
    }

    return(
        <section className='searchForm'>
            <div className='searchForm__conteiner'> 
                <form noValidate className='searchForm__form' onSubmit={(e)=>{validateForm(e)}} >
                    <img className='searchForm__imgIconSearch' src={LogoSearch} alt='иконка'/>
                    <input type='text' className='searchForm__inputSearch' name='film' placeholder='Фильм' onChange={(e)=>handleInput(e)}></input>
                    <span className='searchForm__error'>{errorText}</span>
                    <button type='submit' className='searchForm__buttonSubmit'></button>
                </form>
                <label className='searchForm__labelCheckbox'>
                    <FilterCheckbox
                    disabled='true'
                    pressedCheckBox={handleCheckbox} />
                    <span className='searchForm__spanCheckbox' value={isShortFilm}>Короткометражка</span>
                </label> 
            </div>
        </section>  
    )
}

export default SearchForm;