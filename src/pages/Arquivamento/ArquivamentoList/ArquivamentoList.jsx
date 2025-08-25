import React from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar.jsx';

function arquivamentoList() {
    return (
        <div className="container">
            <Sidebar />
            <div className="content">
                <h1>Lista de Arquivados</h1>
            </div>
        </div>
    )
}

export default arquivamentoList;