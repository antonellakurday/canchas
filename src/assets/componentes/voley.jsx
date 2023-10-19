import React, { useEffect } from "react";
import { useState } from "react";
import * as API from '../../Servicios/Servicios'


export function     Listavoley(){

    const [voley, setvoley] = useState([]);

    const [mensajeError, setmensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')



    useEffect(()=>{
        API.getvoley().then(setvoley)
    },[])
    

    //BOTONES//

    const bajavoley  = async(id)=>{
        console.log('el id que vamos a dar de baja es el',id)

        const user = await API.Bajavoley(id)
        if(user.status){
            
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
                window.location.reload(true)
            }, 3000)

        }else{
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
            }, 4000)
        }
    }

    const altavoley = async(id)=>{
        const user = await API.Altavoley(id)
        if(user.status){
            setmensajeSuccess(user.mensaje)
            setTimeout(()=>{
                setmensajeSuccess('')
                window.location.reload(true)
            }, 3000)
        }else{
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
            }, 4000)
        }
    }

    
    return(

        <div className="card table bg-dark text-white">
        <div className="card-header">
        Stock Chanclas
        </div>
        <div className="card-body">
        <div className="table-responsive">
                <table className="table text-white">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col" >Talle</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Color</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>

                        </tr>
                    </thead>
                    <tbody>
                        {chancla.map((voley)=>(
                        <tr className="">
                            <td scope="row">{voley.idvoley}</td>
                            <td>{voley.Tamaño}</td>
                            <td>{voley.ubicacion}</td>
                            <td>{voley.disponibilidad}</td>
                            <td>
                            <div className="btn-group" role="group" aria-label="Basic example">
                            { (chanclas.Estado=='A')? 

<button onClick={() => bajavoley(voley.idvoley,'B')} type="button" className="btn btn-outline-danger">Baja</button>
:
<button onClick={() =>altavoley(voley.idvoley,'A')} type="button" className="btn btn-outline-primary">Alta</button>

}
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
            
            

    )  
}