import { useState } from 'react'
import '../login/Login.css'
import { Link} from 'react-router-dom'


export function Login (){

    const enviarForm  = async (event)=>{
        event.preventDefault();
        const user = await API.Login({username, password})
        if(user.status){
            // console.log(user.token);
            window.localStorage.setItem('usuario', JSON.stringify(user));
            window.localStorage.setItem('token', JSON.stringify(user.token));
            setUsername('')
            setPassword('')
            window.location.reload(true)
        }else{
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
            }, 4000)
        }
    }


const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

    return(
        <>
        <div className='container'>
    <div class="login-box">
        <h2>Login</h2>
        <form onSubmit={enviarForm}>
    <div class="user-box">
    <input 
    type="text" 
    name="" 
    required="" 
    placeholder='Usuario'
    value={username}
    onChange={(event)=> setUsername(event.target.value)}

    />
    
    <label for="floatingPassword">Usuario</label>
        </div>
        <div class="user-box">


    <input 
    type="password" 
    name="" 
    required="" 
    placeholder='Contraseña'
    value={password}
    onChange={(event)=> setPassword(event.target.value)}

    />

    <label for="floatingPassword">Contraseña</label>
    </div>
    
    <button data-text="Awesome" class="button">
    <span class="actual-text">&nbsp;Iniciar&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;Iniciar&nbsp;</span>
</button>

<Link to={'/registro'}>
<button data-text="Awesome" class="button">
    <span class="actual-text">&nbsp;Registrarse&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;Registrarse&nbsp;</span>
</button>
</Link>

  </form>
</div>
</div>
</>
    )
    
}