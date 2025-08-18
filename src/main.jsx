import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home/Home';
import ClientesList from '../src/pages/Cliente/ClientesList/ClientesList';
import VeiculosList from '../src/pages/Veiculo/VeiculosList/VeiculosList';
import ProdutosList from '../src/pages/Produto/ProdutosList/ProdutoList';
import ServicosList from '../src/pages/TipoServico/ServicosList/ServicosList';
import FuncionarioList from '../src/pages/Equipe/FuncionarioList/FuncionarioList';
import GlobalStyles from './styles/globalStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<ClientesList />} />
      </Routes>  
    </BrowserRouter>
  </StrictMode>,
)
