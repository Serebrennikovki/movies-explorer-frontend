import './FilterCheckbox.css';

function FilterCheckbox(){
    return(
        <label className='filterCheckBox'>
            <input type='checkBox' className='filterCheckBox__checkBox'/>
            <span className='filterCheckBox__slider'/>
        </label>
    )
}

export default FilterCheckbox;