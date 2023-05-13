import { useEffect, useState } from "react";

const Promesas = () => {
    const [objeto, setObjeto] = useState({});
    const [error, setError] = useState(true);

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            resolve({ id: 1, nombre: "coca", precio: 700});
            reject("error no se cargo el mensaje");
        });
        console.log(promesa);
        promesa.then(valor => {
            setObjeto(valor);
        }).catch(errorPromesa => {
            setError(true);
            setObjeto(errorPromesa);
        }).finally(() => {
            console.log("fin del proceso")
        })
    }, []);

    

    return (
        <div>
            <h1>Promesas</h1>
            <p>{ `ID: ${objeto.id} - Producto: ${objeto.nombre}`}</p>
        </div>
    )
}

export default Promesas;