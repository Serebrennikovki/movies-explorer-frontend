import { useEffect, useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({path, isDisabled, pressedCheckBox}){   
    const [ isActive, setIsActive ] = useState(false);

    useEffect(()=>{
        if(path === 'movies'){
            let initialState = localStorage.getItem('isToggled'); 
            if(initialState==='true'){
                setIsActive(true);
            }
        }
    },[])


    function handleCheckBox(){
        setIsActive(!isActive);
        pressedCheckBox(!isActive);
    }


    return(
        <label className='filterCheckBox'>
            <input type='checkBox' className='filterCheckBox__checkBox' disabled={isDisabled} checked={isActive} onChange={handleCheckBox}/>
            <span className='filterCheckBox__slider'/>
        </label>
    )
}

export default FilterCheckbox;