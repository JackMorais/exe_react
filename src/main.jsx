import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Perfil from "./components/Perfil";
import Formulario from './components/Formulario';
import './reset.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Perfil titulo="Calc Imc"/>
    <Formulario />
  </StrictMode>,
)
