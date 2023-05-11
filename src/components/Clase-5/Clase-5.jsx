import { useRef } from "react"

    const Saludo = () => {
        return (
            <h3>Curso de <Curso nombre={'React Js'}/> </h3>
        )
    }

    const Curso = ({ nombre }) => {
        return (
            <span className="text-decoration-underline">{nombre}</span>
        )
    }

const Clase5 = () => {
    const valorRef = useRef(null);

    const modificarValor = () => {
        valorRef.current.innerHTML = "este es elnuevo contenido";
        valorRef.current.title = "soy un title";
        valorRef.current.onclick = saludar;
    }
 
    const saludar = () => {
        alert('Soy un saludo')
    }
    return (
        <div>
            <h1 onClick={modificarValor}>clase 5</h1>
            <Saludo />
            <div ref={valorRef}>Contenido original...</div>
        </div>
    )
}

export default Clase5;