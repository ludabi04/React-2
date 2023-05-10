import { useEffect, useState } from "react"

const Efectos = () => {
    const [contador, setContador] = useState(0);
    const [mensaje, setMensaje] = useState("")

    const Incrementar = () => {
        setContador(contador + 1)
    }

    useEffect(() => {
        console.log("2 modificando contador")
        setMensaje("hiciste click "  + contador + " veces")
    }, [contador]) 

    return (
        <div>
            <h1>Efectos</h1>
            <p>Contador { contador}</p>
            <button onClick={Incrementar}>Incrementar</button>
            <p>{ mensaje }</p>
        </div>
    )
}

export default Efectos