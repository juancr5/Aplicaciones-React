import React, {useState} from 'react';
import PropTypes from 'prop-types';


/*valor por defecto en el value, en caso de ser asignado desde el index*/
const CounterApp = ({value = 0}) => {

    const [counter, setCounter]= useState(value);

    // Funcion para aumentar el contador
    const handleAdd = () => {
        setCounter(counter + 1)
        /* Otra forma de aumentar la variable
        setCounter( (c) => c+1)
        */
    }

    // Funcion para dismuniuir el contador
    const handleSubtract = () => setCounter(counter -1);

     // Funcion para dismuniuir el contador
     const handleReset = () => setCounter(value);

    return (   
        <div>
            <h1>CounterApp</h1>
         

            <h2>{counter}</h2> 

            <button onClick={handleAdd} >+1</button>
            <button onClick={handleReset} >Reset</button>
            <button onClick={handleSubtract} >-1</button>
        </div>
    );
}

// Esta linea hace obligatorio que el tipo String en la variable 
CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;