import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './CounterApp';
//Importar el css
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*en caso de no pasarle un valor al value, este tomara el valor por defecto declarado en la clase CounterApp*/}
    <CounterApp value = {10}/>
  </React.StrictMode>
);
