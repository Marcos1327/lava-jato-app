import React from 'react';
import './ProdutoList.css';
import Sidebar from '../../../components/Sidebar/Sidebar.jsx';

function ProdutoList() {
    return (
        <div className="container">
            <Sidebar />
            <div className="content">
                <h1>Lista de Produtos</h1>
            </div>
        </div>
    )
}

export default ProdutoList;