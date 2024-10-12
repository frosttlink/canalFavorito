import { useState } from "react";
import "./index.scss";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ConsultarUsuario() {
  const [usuario, setUsuario] = useState([]);

  async function buscar() {
    const url = "http://localhost:5050/usuario";
    let resp = await axios.get(url);
    console.log(resp.data);
    setUsuario(resp.data);
  }

  return (
    <div className="pagina-consultar-usuario">
      <h1>CONSULTAR USUARIO</h1>

      <button onClick={buscar}>Buscar</button>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
          </tr>
        </thead>

        <tbody>
          {usuario.map((item) => (
            <tr>
              <td>{item.idUsuario}</td>
              <td>{item.nomeUsuario}</td>
              <td> <Link className="alterar-link" to={"/adicionarUsuario/" + item.idUsuario}> Alterar </Link> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
