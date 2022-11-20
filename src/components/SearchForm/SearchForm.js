import './SearchForm.css';
import LogoSearch from '../../images/icon_search-min.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useEffect, useState } from 'react';
import { TEXT_ERRORS } from '../../utils/data';

function SearchForm({path, submitForm, isLoadingFilms}){
    const [ isToggled, setIsToggled ] = useState(false);
    const [ keyWord, setKeyWord ] = useState('');
    const [ errorText, setErrorText ] = useState('');
    const [ stateDisabled, setStateDisabled ] = useState(false);
    
    useEffect(()=>{
        if(path === 'movies'){
            let initialState = localStorage.getItem('keyWord');
            if(initialState !== null){
                setKeyWord(initialState);
            }   
        }
    },[])

    useEffect(()=>{
        setStateDisabled(isLoadingFilms);
    },[isLoadingFilms])


    function validateForm(e){
        e.preventDefault();
        if(!keyWord){
            setErrorText(TEXT_ERRORS.emptySearchInput);
            return;
        }
        handleSubmit();
    }
    function handleSubmit(){
        setErrorText('');
        submitForm(keyWord, isToggled); 
    }

    function handleCheckbox(state){
        console.log('state',state);
        setIsToggled(state);
        submitForm(keyWord, state);
    }

    function handleInput(e){
        setKeyWord(e.target.value)
    }

    return(
        <section className='searchForm'>
            <div className='searchForm__conteiner'> 
                <form noValidate className='searchForm__form' onSubmit={(e)=>{validateForm(e)}} >
                    <img className='searchForm__imgIconSearch' src={LogoSearch} alt='иконка'/>
                    <input type='text' className='searchForm__inputSearch' name='film' readOnly={stateDisabled} placeholder='Фильм' value={keyWord} onChange={(e)=>handleInput(e)}></input>
                    <span className='searchForm__error'>{errorText}</span>
                    <button type='submit' className='searchForm__buttonSubmit' disabled={stateDisabled}></button>
                </form>
                <label className='searchForm__labelCheckbox'>
                    <FilterCheckbox
                    path={path}
                    isDisabled={stateDisabled}
                    pressedCheckBox={handleCheckbox} />
                    <span className='searchForm__spanCheckbox' value={isToggled}>Короткометражка</span>
                </label> 
            </div>
        </section>  
    )
}

export default SearchForm;