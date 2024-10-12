import { useEffect, useState } from "react";
import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function AdicionarUsuario() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  
  const navigate = useNavigate()
              
  const { id } = useParams();

  async function entrar() {
    let paramCorpo = {
      nome: nome,
      senha: senha
    };

    const url = "http://localhost:5050/entrar";
    let resp = await axios.post(url, paramCorpo);
    if (resp.data.erro != undefined) {
      alert(resp.data.erro)
    } else {
      localStorage.setItem("USUARIO", resp.data.token)
      navigate("/adicionarCanal")
    }
  }

  async function buscar() {
    const url = `http://localhost:5050/usuario/${id}`;
    let resp = await axios.get(url);
    console.log(resp.data);

    setNome(resp.data.nomeUsuario);
  }

  useEffect(() => {
    if (id != undefined) {
      buscar();
    }
  }, []);

  return (
    <div className="pagina-adicionar-usuario">
      <h1>LOGIN USUARIO</h1>

      <div className="form">
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label>Senha:</label>
          <input
            type="text"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
      </div>

      <button onClick={entrar}> Entrar </button>
    </div>
  );
}
