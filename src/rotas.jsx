import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./pages/home/App";
import AdicionarCanal from "./pages/adicionarCanal";
import ConsultarCanal from "./pages/consultaCanal";
import AdicionarUsuario from "./pages/adicionarUsuario";
import ConsultarUsuario from "./pages/consultaUsuario";
import AdicionarPrograma from "./pages/adicionarPrograma";
import ConsultarPrograma from "./pages/consultaPrograma";
import AdicionarProgramaFavorito from "./pages/adicionarProgramaFav";
import ConsultarProgramaFavorito from "./pages/consultarProgramaFav";
import Login from "./pages/login";
export default function Navegacao() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ <AdicionarUsuario/> } />
          <Route path="/home" element={ <App/> } />


          <Route path="/adicionarUsuario" element={ <AdicionarUsuario/> }/>
          <Route path="/adicionarUsuario/:id" element={ <AdicionarUsuario/> }/>
          <Route path="/consultarUsuario" element={ <ConsultarUsuario/>}/>

          <Route path="/adicionarPrograma" element={ <AdicionarPrograma/> }/>
          <Route path="/adicionarPrograma/:id" element={ <AdicionarPrograma/> }/>
          <Route path="/consultarPrograma" element={ <ConsultarPrograma/> }/>

          <Route path="/adicionarProgramaFavorito" element={ <AdicionarProgramaFavorito/> }/>
          <Route path="/adicionarProgramaFavorito/:id" element={ <AdicionarProgramaFavorito/> }/>
          <Route path="/consultarProgramaFavorito" element={ <ConsultarProgramaFavorito/> }/>

          <Route path="/adicionarCanal" element={ <AdicionarCanal/> } />
          <Route path="/adicionarCanal/:id" element={ <AdicionarCanal/> } />
          <Route path="/consultarCanal" element={ <ConsultarCanal/> } />
        </Routes>
    </BrowserRouter>
  )
}