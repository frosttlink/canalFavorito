import { Plus, Search } from 'lucide-react';
import './App.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function App() {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('USUARIO') == 'null'){
      navigate('/')
    }
  }, [])


  return (
    <div className="pagina-home">
      <div className='actions'>
        <Plus/>
        <Link to="/adicionarCanal"> Adicionar canal </Link>
        <div className='line'/>
        <Search/>
        <Link to="/consultarCanal"> Consultar canal </Link>
      </div>

      <div className='actions'>
        <Plus/>
        <Link to="/adicionarUsuario"> Adicionar usuario </Link>
        <div className='line'/>
        <Search/>
        <Link to="/consultarUsuario"> Consultar usuario </Link>
      </div>

      <div className='actions'>
        <Plus/>
        <Link to="/adicionarPrograma"> Adicionar Programa </Link>
        <div className='line'/>
        <Search/>
        <Link to="/consultarPrograma"> Consultar Programa </Link>
      </div>

      <div className='actions'>
        <Plus/>
        <Link to="/adicionarProgramaFavorito"> Adicionar Programa Favorito</Link>
        <div className='line'/>
        <Search/>
        <Link to="/consultarProgramaFavorito"> Consultar Programa Favorito </Link>
      </div>
    </div>
  )
}

