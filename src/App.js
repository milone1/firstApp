import './App.css';
import Testimonio from './componentes/testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Testimonios: </h1>
        <Testimonio
          nombre='Juan'
          pais='LIMA-PERU'
          imagen='juan'
          cargo='Ingeniero de Software'
          empresa='IBM'
          testimonio= 'El mundo esta lleno de oportunidades solo tenemos que aprovecharlas.'/>
        <Testimonio
          nombre='Juanita'
          pais='MOSCU-RUSIA'
          imagen='juanita'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='Nunca dejes que tus miedos sean mas grandes que tus sueños.'/>
        <Testimonio 
          nombre='Pedro'
          pais='Santiago-Chile'
          imagen='pedro'
          cargo='Web Developer'
          empresa='Spotify'
          testimonio='El 50% del exito es hacerse presente.'/>
      </div>
    </div>
  );
}

export default App;