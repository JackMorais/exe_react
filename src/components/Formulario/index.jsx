import styles from './Form.module.css';
import { useState } from 'react';

const  Formulario = () => {
  let [Peso, setPeso] = useState(0);
  let [Altura, setAltura] = useState(0);

  const Resultado = () => {
    const imc = (Peso/(Altura*Altura)).toFixed(2);

    if(imc <= 17){
      return (
        <p>Seu resultado no IMC foi: {imc}kg/m² <br />  Avaliação: Muito abaixo do peso</p>
      )
    }else if(imc <= 25 && imc > 17){
      return (
        <p>Seu resultado no IMC foi:{imc}kg/m² <br /> Avaliação: Peso Normal</p>
      )

    }
    else {
      return(
        <p>Seu resultado no IMC foi:{imc}kg/m² <br />  Avaliação: Acima do peso</p>
      )
    }
  }
  return(
    <form className={styles.form}>
      <input type="number" placeholder="Digite seu peso" onChange={evento => setPeso(parseFloat(evento.target.value))}/>
      <input type="number" placeholder="Digite sua altura" onChange={evento => setAltura(parseFloat(evento.target.value))}/>
      { Resultado() }
    </form>
  )
  

}

export default Formulario;

