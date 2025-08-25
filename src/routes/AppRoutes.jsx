import {Routes, Route } from "react-router-dom";

import Home from '../pages/Home/Home';
import AtendimentosList from '../pages/Atendimento/FluxoAtendimento/AtendimentoList';
import ArquivadosList from '../pages/Arquivamento/ArquivamentoList/ArquivamentoList';
import ClientesList from '../pages/Cliente/ClientesList/ClientesList'
import ProdutoList from '../pages/Produto/ProdutosList/ProdutoList';
import VeiculosList from '../pages/Veiculo/VeiculosList/VeiculosList';
import ServicosList from '../pages/TipoServico/ServicosList/ServicosList';
import FuncionarioList from '../pages/Equipe/FuncionarioList/FuncionarioList';


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atendimentos" element={<AtendimentosList />} />
            <Route path="/arquivados" element={<ArquivadosList />} />
            <Route path="/clientes" element={<ClientesList />} />
            <Route path="/produtos" element={<ProdutoList />} />
            <Route path="/veiculos" element={<VeiculosList />} />
            <Route path="/servicos" element={<ServicosList />} />
            <Route path="/funcionarios" element={<FuncionarioList />} />
        </Routes>
    );
}

export default AppRoutes;