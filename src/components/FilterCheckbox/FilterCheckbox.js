import { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({disabled, pressedCheckBox}){

    return(
        <label className='filterCheckBox'>
            <input type='checkBox' className='filterCheckBox__checkBox' onChange={pressedCheckBox}/>
            <span className='filterCheckBox__slider'/>
        </label>
    )
}

export default FilterCheckbox;