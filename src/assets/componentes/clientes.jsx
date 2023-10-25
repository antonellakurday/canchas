import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import * as API from '../../Servicios/Servicios'


export function Clientes(){

    const [cliente, setClientes] = useState([]);

    const [mensajeError, setmensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')



    useEffect(()=>{
        API.getClientes().then(setClientes)
    },[])
    

    //BOTONES//

    const bajaCliente  = async(id)=>{
        console.log('el id que vamos a dar de baja es el',id)

        const user = await API.BajaCliente(id)
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

    const altaCliente = async(id)=>{
        const user = await API.AltaCliente(id)
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


////////////////////////////////////////////////////


    return(

        <div className="card table bg-dark text-white">
        <div className="card-header">
        Clientes
        </div>
        {
                    mensajeError?
                    <div class="alert alert-warning" role="alert">
                     {mensajeError}
                    </div>:''
                }

                {
                    mensajeSuccess?
                    <div class="alert alert-success" role="alert">
                     {mensajeSuccess}
                    </div>:''
                }
        <div className="card-body">
        <div className="table-responsive">
                <table className="table text-white">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cliente.map((clientes)=>(
                        <tr  key={clientes.idClientes}>
                            <td scope="row">{clientes.idClientes}</td>
                            <td>{clientes.Nombre}</td>
                            <td>{clientes.Direccion}</td>
                            <td>{clientes.Telefono}</td>
                            <td>{clientes.Estado}</td>
                            <td>
                            <div className="btn-group" role="group" aria-label="Basic example">
                            { (clientes.Estado=='A')? 

                                <button onClick={() => bajaCliente(clientes.idClientes,'B')} type="button" className="btn btn-outline-danger">Baja</button>
                                :
                                <button onClick={() =>altaCliente(clientes.idClientes,'A')} type="button" className="btn btn-outline-primary">Alta</button>

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
