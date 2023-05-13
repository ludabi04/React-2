import React, { useEffect } from "react";
import { useState } from "react";

const Header = () => {
    const [lista, setLista] = useState([]);
    
    useEffect(()=> {
        const productos = [
            { id: 1, producto: 'Camisa', precio: 25.99, imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fravega.com%2Fp%2Fcelular-samsung-galaxy-a23-128gb-negro-781869%2F&psig=AOvVaw0vN2CpDB2xrCkotLFpcI29&ust=1684023203142000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCDuriB8f4CFQAAAAAdAAAAABAG' },
            { id: 2, producto: 'Pantalón', precio: 35.99, imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fravega.com%2Fp%2Fcelular-samsung-galaxy-a23-128gb-negro-781869%2F&psig=AOvVaw0vN2CpDB2xrCkotLFpcI29&ust=1684023203142000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCDuriB8f4CFQAAAAAdAAAAABAG' },
            { id: 3, producto: 'Zapatos', precio: 49.99, imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fravega.com%2Fp%2Fcelular-samsung-galaxy-a23-128gb-negro-781869%2F&psig=AOvVaw0vN2CpDB2xrCkotLFpcI29&ust=1684023203142000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCDuriB8f4CFQAAAAAdAAAAABAG' },
            { id: 4, producto: 'Gorra', precio: 15.99, imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fravega.com%2Fp%2Fcelular-samsung-galaxy-a23-128gb-negro-781869%2F&psig=AOvVaw0vN2CpDB2xrCkotLFpcI29&ust=1684023203142000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCDuriB8f4CFQAAAAAdAAAAABAG' },
            { id: 5, producto: 'Calcetines', precio: 7.99, imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fravega.com%2Fp%2Fcelular-samsung-galaxy-a23-128gb-negro-781869%2F&psig=AOvVaw0vN2CpDB2xrCkotLFpcI29&ust=1684023203142000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCDuriB8f4CFQAAAAAdAAAAABAG' },
        ];

        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos)
            }, 3000)
        });
        promesa.then(prod => {
            console.log(prod);
        });

    }, [])
    

    
    return (
       
        <div className="header">
           <h1>Soy yo</h1>
        </div>
    )
}
export default Header;