import React, { useState } from 'react';
import PropsTypes from 'prop-types';

const AddCategory = ({ setCategories } ) => {

    const [inputValue, setInputValue] = useState(' ');

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue (e.target.value)
    }

    const handleSubmit = (e) => {
        // Prevenir comportamiento por defecto del formulario
        e.preventDefault();
        

        if(inputValue.trim().length > 2){
            setCategories( cats => [  inputValue,...cats]);
            setInputValue('');
        }
        console.log('Submit Hecho');
    }

    return (
        <>
        <form onSubmit = { handleSubmit }>
            <input
                type= "text"
                value= { inputValue }
                onChange = { handleInputChange }
            />
        </form>
          

          
        </>
    )
}

AddCategory.propsTypes = {
    setCategories: PropsTypes.func.isRequired
};

 AddCategory.defaultProps = {

    //setCategories: 
};  

export default AddCategory
