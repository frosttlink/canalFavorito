import { useState } from "react"
import "./index.scss"
import axios from "axios"
import { Link } from "react-router-dom"

export default function ConsultarProgramaFavorito(params) {
  const [programaFavorito, setProgramaFavorito] = useState([])

  async function buscar() {
    const url = "http://localhost:5050/programaFavorito"
    let resp = await axios.get(url)
    console.log(resp.data);
    setProgramaFavorito(resp.data)
  }

  return (
    <div className="pagina-consultar-programa-favorito">
      <h1>CONSULTAR PROGRAMA FAVORITO</h1>

      <button onClick={buscar}> Buscar </button>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Usuario</th>
            <th>Programa</th>
            <th>Avaliacao</th>
          </tr>
        </thead>

        <tbody>
          {programaFavorito.map((item) => (
            <tr>
              <td>{item.usuario}</td>
              <td>{item.programa}</td>
              <td>{item.avaliacao}</td>
              <td> <Link className="alterar-link" to={'/adicionarProgramaFavorito/' + item.idProgramaFav}> Alterar </Link> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}