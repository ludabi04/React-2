import { useEffect } from "react";
import { useState } from "react";

const Efectos2 = () => {
    const [vueltas, setVueltas] = useState(1);
    const [segundos, setSegundos] = useState(0);
    const [salida, setSalida] = useState("");

    const finalizarVuelta = () => {
        setSalida(<p>{ salida } Vuelta: {vueltas} en {segundos} segundos </p>);
        setVueltas(vueltas + 1);
        setSegundos(0);
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
            setSegundos(segundos + 1)
        }, 1000);

        return () => {
            clearInterval(intervalo);
            }
       
    }, [vueltas, segundos])

    return (
        <div>
            <h1>
                <p>Vueltas : {vueltas}</p>
                <p>Tiempo : {segundos} segundos</p>
                <p><button onClick={ finalizarVuelta }> Finalizar vueltas</button></p>
                <div>{ salida}</div>
            </h1>
        </div>
    )
}

export default Efectos2;