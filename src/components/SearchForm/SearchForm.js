import './SearchForm.css';
import LogoSearch from '../../images/icon_search-min.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(){
    return(
        <section className='searchForm'>
            <div className='searchForm__conteiner'> 
                <form className='searchForm__form' action=''>
                    <img className='searchForm__imgIconSearch' src={LogoSearch} alt='иконка'/>
                    <input type='text' className='searchForm__inputSearch' name='film' placeholder='Фильм' required></input>
                    <button type='submit' className='searchForm__buttonSubmit'></button>
                </form>
                <label className='searchForm__labelCheckbox'>
                    <FilterCheckbox/>
                    <span className='searchForm__spanCheckbox'>Короткометражка</span>
                </label> 
            </div>
        </section>  
    )
}

export default SearchForm;