import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('Bienvenido');

    //Cambia el valor del input por el escrito
    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    //Manejador del Formulario
    const onSubmit = (event) => {
        //Evitar refresh del navegador al actualizar el formulario
        event.preventDefault();
        if (inputValue.trim().length > 2) {

            // setCategories( categories => [ inputValue, ...categories ]);
            setInputValue('');
            //pasa el parametro ingresado a la funcion recibida desde el padre 
            //trim elimina los espacios en blanco
            onNewCategory(inputValue.trim());
        }
    }


    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Ingrese un Texto"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>
        </>
    );

}
export default AddCategory;