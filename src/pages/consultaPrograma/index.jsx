import { useState } from "react"
import "./index.scss"
import axios from "axios"
import { Link } from "react-router-dom"

export default function ConsultarPrograma() {
  const [programa, setPrograma] = useState([])

  async function buscar() {
    const url = "http://localhost:5050/programa"
    let resp = await axios.get(url)
    console.log(resp.data);
    setPrograma(resp.data)
  }

  return (
    <div className="pagina-consultar-programa">
      <h1>CONSULTAR PROGRAMA</h1>

      <button onClick={buscar}>Buscar</button>

      <table>
        <thead>
          <tr>
            <th>Canal</th>
            <th>Nome</th>
            <th>Genero</th>
            <th>Horario</th>
          </tr>
        </thead>

        <tbody>
          {programa.map((item) => (
            <tr>
              <td>{item.idCanal}</td>
              <td>{item.nomePrograma}</td>
              <td>{item.generoPrograma}</td>
              <td>{item.horarioPrograma}</td>
              <td><Link className="alterar-link" to={'/adicionarPrograma/' + item.idCanal}> Alterar </Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}