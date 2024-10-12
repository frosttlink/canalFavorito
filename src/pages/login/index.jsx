import "./index.scss"
import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"


export default function Login(){
  const [usuario, setUsuario] = useState('')


  return (
    <div className="pagina-login">
      <input type="text" placeholder="digite aqui seu usuário" />
      <input type="text" placeholder="digite aqui sua senha" />
      <Link to='/home' ><button>Entrar</button></Link>
      
    </div>
  )
}