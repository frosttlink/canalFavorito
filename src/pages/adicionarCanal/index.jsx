import { useEffect, useState} from "react";
import "./index.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


export default function AdicionarCanal() {
  const [token, setToken] = useState(null)

  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState(0)
  const [aberto, setAberto] = useState(false)

  const navigate = useNavigate()

  const { id } = useParams()

  async function salvar() {
    let paramCorpo = {
      "nome": nome,
      "numero": numero,
      "aberto": aberto
    }

    if (id == undefined) {
      // cria
      const url = `http://localhost:5050/canal?x-access-token=${token}`
      let resp = await axios.post(url, paramCorpo)

      alert("Canal adicionado. Id " + resp.data.id)
    } else {
      // alterar
      const url = `http://localhost:5050/canal/${id}?x-access-token=${token}`
      let resp = await axios.put(url, paramCorpo)

      alert("Canal alterado.")
    }
  }


 
useEffect(() => {
  let usu = localStorage.getItem("USUARIO")
  setToken(usu)

  if (usu == undefined) {
    navigate('/')
  }
  
}, [])

async function sair() {
  localStorage.setItem("USUARIO", null)
  navigate('/')
}

  return (
      <div className="pagina-adicionar-canal">
           <button onClick={sair}>Sair</button>
        <h1>Cadastrar canal</h1>

          <div className='form'>
            <div>
                <label>Nome:</label>
                <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            <div>
                <label>Numero:</label>
                <input type='number' value={numero} onChange={e => setNumero(e.target.value)}/>
            </div>
            <div className="checkbox-container">
                <label>Aberto:</label>
                <input type='checkbox' checked={aberto} onChange={e => setAberto(e.target.checked)} />
            </div>
        </div>

        <button onClick={salvar}> Salvar </button>
    </div>
  );
}
