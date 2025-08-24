import React from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css';
import CarIcon from '../../assets/car2.png'
import ClienteIcon from '../../assets/icon-clientes-color.svg'
import ProdutoIcon from '../../assets/icon-produtos-color.svg'
import VeiculoIcon from '../../assets/icon-veiculos-color.svg'
import ServicoIcon from '../../assets/icon-servicos-color.svg'
import FuncionarioIcon from '../../assets/icon-equipe-color.svg'
import AtendimentoIcon from '../../assets/icon-dashboard-color.svg'
import ArquivadosIcon from '../../assets/icon-archive-color.svg'
import CaixaIcon from '../../assets/icon-caixa-color.svg'
import RelatorioIcon from '../../assets/icon-relatorios-color.svg'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="logo-title">
                    <img src={CarIcon} alt="car" className="img" />
                    <h3 className="title">Lava - Jato</h3>
                </div>
            </div>

            <div className="button-group">
                <NavLink to="/atendimentos" className={({ isActive }) => isActive ? "button active" : "button"}><img src={AtendimentoIcon} alt="Atendimento" className="button-icon" />Atendimentos</NavLink>
                <NavLink to="/arquivados" className={({ isActive }) => isActive ? "button active" : "button"}><img src={ArquivadosIcon} alt="Arquivados" className="button-icon" />Arquivados</NavLink>
                <div className="divider" />

                <NavLink to="/clientes" className={({ isActive }) => isActive ? "button active" : "button"}><img src={ClienteIcon} alt="Clientes" className="button-icon" />Clientes</NavLink>
                <NavLink to="/produtos" className={({ isActive }) => isActive ? "button active" : "button"}><img src={ProdutoIcon} alt="Produtos" className="button-icon" />Produtos</NavLink>
                <NavLink to="/veiculos" className={({ isActive }) => isActive ? "button active" : "button"}><img src={VeiculoIcon} alt="Veículos" className="button-icon" />Veículos</NavLink>
                <NavLink to="/servicos" className={({ isActive }) => isActive ? "button active" : "button"}><img src={ServicoIcon} alt="Serviços" className="button-icon" />Serviços</NavLink>
                <NavLink to="/funcionarios" className={({ isActive }) => isActive ? "button active" : "button"}><img src={FuncionarioIcon} alt="Funcionários" className="button-icon" />Funcionários</NavLink>
                <div className="divider" />
                <NavLink to="/caixa" className={({ isActive }) => isActive ? "button active" : "button"}><img src={CaixaIcon} alt="Caixa" className="button-icon" />Caixa</NavLink>
                <NavLink to="/relatorio" className={({ isActive }) => isActive ? "button active" : "button"}><img src={RelatorioIcon} alt="Relatório" className="button-icon" />Relatório</NavLink>
            </div>

            <div className="sidebar-footer">
                <span className="footer-text">Lava-Jato App v1.0</span>
            </div>
        </div>
    )
}
export default Sidebar;