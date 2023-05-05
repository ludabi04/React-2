import { useState } from "react";

const Clase4 = () => {
    const [nombreBoton, setNombreBoton] = useState('haga click aqui');
    const [tema, setTema] = useState('estamos viendo Props');
    const [botonVisible, setBotonVisible] = useState(false);
    const [colorBoton, setColorBoton] = useState("warning");

    const modificarEstado = () => {
        setNombreBoton("Hiciste click");
        setTema("UseStates!");
        setBotonVisible(true);
    }

    const Item = ({ valor }) => {
        return (
            <li>{ valor }</li>
        )
    }

    const MostrarCotizacionDolar = ({ valor }) => {
        if (valor >= 300 && valor <= 399) {
            setColorBoton("")
        } else if
            (valor >= 400 && valor <= 499) { setColorBoton("danger") }
    
        else {
            setColorBoton("dark")
        }
        return (
            <button className={ "btn btn-" + colorBoton }>${ valor }</button>)
    }

    

    return (
        <div>
            <button className="btn btn-primary" onClick={ () => {modificarEstado()}}>{ nombreBoton }</button>
            <p>Observacion: estamos viendo <b>{ tema }</b> </p>
            {botonVisible ? <button>aceptar</button> : ""}
            <ul>
                <Item valor="te" />
                <Item valor="cafe" />
                <Item valor="yerba"/>
            </ul>
            <h1>
            <MostrarCotizacionDolar valor={499} />
            </h1>
        </div>
    )
}

export default Clase4;