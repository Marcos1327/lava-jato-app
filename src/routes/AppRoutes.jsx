import {Routes, Route } from "react-router-dom";

import Home from '../pages/Home/Home';
import ClientesList from '../pages/Cliente/ClientesList/ClientesList'
import VeiculosList from '../pages/Veiculo/VeiculosList/VeiculosList';
import ProdutosList from '../pages/Produto/ProdutosList/ProdutoList';
import ServicosList from '../pages/TipoServico/ServicosList/ServicosList';
import FuncionarioList from '../pages/Equipe/FuncionarioList/FuncionarioList';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clientes" element={<ClientesList />} />
            <Route path="/veiculos" element={<VeiculosList />} />
            <Route path="/produtos" element={<ProdutosList />} />
            <Route path="/servicos" element={<ServicosList />} />
            <Route path="/funcionarios" element={<FuncionarioList />} />
        </Routes>
    );
}

export default AppRoutes;