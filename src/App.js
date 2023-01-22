import './App.css';
import Contador from '../src/componentes/Contador.js';
import Boton from '../src/componentes/Boton.js';
import freeCodeCampLogo from '../src/imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {
    // Valor + Funcion
  const [numClics, setNumClics] = useState(0); //Hook con valor inicial 0
  //de numClics

  const manejarClic = () => {
    setNumClics(numClics + 1); //Con esa llamada cambiará la UI
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }


  return (
    <div className="App">
     <div className='freecodecamp-logo-contenedor'>
      <img 
        className='freecodecamp-logo' 
        src={freeCodeCampLogo} 
        alt='Logo de freeCodeCamp' />
     </div>
     <div className='contenedor-principal'>
      <Contador 
      numClics = {numClics}/> 
      <Boton 
        texto= 'Clic'
        esBotonDeClic= {true}
        manejarClic = {manejarClic} />
      <Boton 
        texto= 'Reiniciar'
        esBotonDeClic= {false}
        manejarClic = {reiniciarContador} />
     </div>
    </div>
  );
}

export default App;
