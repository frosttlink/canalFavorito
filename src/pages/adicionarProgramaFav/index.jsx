import { useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function AdicionarProgramaFavorito() {
  const [usuario, setUsuario] = useState(0);
  const [programa, setPrograma] = useState(0);
  const [avaliacao, setAvaliacao] = useState(0);

  const { id } = useParams();

  async function salvar() {
    let paramCorpo = {
      usuario: usuario,
      programa: programa,
      avaliacao: avaliacao,
    };

    if (id == undefined) {
      const url = "http://localhost:5050/programaFavorito";
      let resp = await axios.post(url, paramCorpo);

      alert("Programa favorito adicionado. Id " + resp.data.id);
    } else {
      const url = `http://localhost:5050/programaFavorito/${id}`;
      let resp = await axios.put(url, paramCorpo);

      alert("Programa favorito alterado.");
    }
  }

  async function buscar() {
    const url = `http://localhost:5050/programaFavorito/${id}`;
    let resp = await axios.get(url);
    console.log(resp.data);

    setUsuario(resp.data.usuario);
    setPrograma(resp.data.programa);
    setAvaliacao(resp.data.avaliacao);
  }

  useEffect(() => {
    if (id != undefined) {
      buscar();
    }
  }, []);

  return (
    <div className="pagina-adicionar-programa-favorito">
      <h1>Cadastrar programa favorito</h1>

      <div className="form">
        <div>
          <label>Usuario:</label>
          <input
            type="number"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <label>Programa:</label>
          <input
            type="number"
            value={programa}
            onChange={(e) => setPrograma(e.target.value)}
          />
        </div>
        <div>
          <label>Avaliação:</label>
          <input
            type="number"
            value={avaliacao}
            onChange={(e) => setAvaliacao(e.target.value)}
          />
        </div>
      </div>

      <button onClick={salvar}>Salvar</button>
    </div>
  );
}
