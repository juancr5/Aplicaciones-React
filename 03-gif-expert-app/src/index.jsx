import React from 'react';
import ReactDOM from 'react-dom/client';
//Importar Componente Principal
import GifExpertApp from './GifExpertApp';
//Importar Css
import './styles.css';
// Importar Animated CSS
import 'animate.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
