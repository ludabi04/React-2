import { useEffect, useRef, useState } from "react";
import '../Prueba/Prueba.css';

const Prueba = () => {
    const [contador, setContador] = useState(0);
    const [contador1, setContador1] = useState(0);
    const [sumarTodo, setSumarTodo] = useState(0)
    const [mensaje, setMensaje] = useState("")

    const sumar = () => {
        setContador(contador + 1);
    }
    const restar = () => {
        setContador(contador - 1);
    }
    const sumar1 = () => {
        setContador1(contador1 + 1);
    }
    const restar1 = () => {
        setContador1(contador1 - 1);
    }

    const sumarFinal = () => {
        setSumarTodo(contador + contador1)
    }

    useEffect(() => {
        setMensaje('se agrego el item' + sumarTodo)
    }, [sumarTodo])
    
    const valor = useRef(null);

    const modificarTexto = () => {
        valor.current.innerHTML = "soy nuevo titulo";
        valor.current.className = "bg-dark";
    }

    return (
        <div >
            <button onClick={ sumar }> + </button>
            <p ref={ valor }>contador general : { contador }</p>
            <button onClick={ restar }> - </button>
            <br></br>
            <button onClick={ sumarFinal }>Agregar </button>
            <br></br>
            <button onClick={ sumar1 }> + </button>
            <p ref={ valor }>contador general : { contador1 }</p>
            <button onClick={ restar1 }> - </button>
            <br></br>
            <button onClick={sumarFinal} >Agregar </button>
            <br></br>
            <h1>total final { sumarTodo }</h1>
            <p onClick={ modificarTexto } ref={valor}>{ mensaje }</p>
            
        </div>
    )
}

export default Prueba;