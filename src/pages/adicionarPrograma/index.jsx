import { useEffect, useState } from "react"
import "./index.scss"
import { useParams } from "react-router-dom"
import axios from "axios"


export default function AdicionarPrograma() {
  const [canal, setCanal] = useState(0)
  const [nome, setNome] = useState("")
  const [genero, setGenero] = useState("")
  const [horario, setHorario] = useState("")

  const { id } = useParams()

  async function salvar() {
    let paramCorpo = {
      "canal": canal,
      "nome": nome,
      "genero": genero,
      "horario": horario
    }

    if (id == undefined) {
      const url = "http://localhost:5050/programa"
      let resp = await axios.post(url, paramCorpo)

      alert("Programa adicionado. Id " + resp.data.id)
    } else {
      const url = `http://localhost:5050/programa/${id}`
      let resp = await axios.put(url, paramCorpo)

      alert("Programa alterado.")
    }
  }

  async function buscar() {
    const url = `http://localhost:5050/programa/${id}`
    let resp = await axios.get(url)
    console.log(resp.data)

    setCanal(resp.data.idCanal)
    setNome(resp.data.nomePrograma)
    setGenero(resp.data.generoPrograma)
    setHorario(resp.data.horarioPrograma)
  }

  useEffect(() => {
    if (id != undefined) {
      buscar()
    }
  }, [])


  return (
    <div className="pagina-adicionar-programa">
      <h1>Cadastrar programa</h1>

      <div className="form">
        <div>
          <label>Canal:</label>
          <input type="number" value={canal} onChange={e => setCanal(e.target.value)}/>
        </div>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
        </div>
        <div>
          <label>Genero:</label>
          <input type="text" value={genero} onChange={e => setGenero(e.target.value)}/>
        </div>
        <div>
          <label>Horario:</label>
          <input type="time" step={2} value={horario} onChange={e => setHorario(e.target.value)}/>
        </div>
      </div>

      <button onClick={salvar}>Salvar</button>
    </div>

  )
}