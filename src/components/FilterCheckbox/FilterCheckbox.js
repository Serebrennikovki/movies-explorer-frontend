import { useEffect, useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({path, isDisabled, pressedCheckBox}){   
    const [ isActive, setIsActive ] = useState(false);

    useEffect(()=>{
        if(path === 'movies'){
            const checkBox = document.querySelector('.filterCheckBox__checkBox');
            let initialState = localStorage.getItem('isToggled'); 
            if(initialState==='true'){
                checkBox.setAttribute("checked", "true");
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
            <input type='checkBox' className='filterCheckBox__checkBox' disabled={isDisabled} defaultChecked={isActive}/>
            <span className='filterCheckBox__slider' onClick={handleCheckBox}/>
        </label>
    )
}

export default FilterCheckbox;