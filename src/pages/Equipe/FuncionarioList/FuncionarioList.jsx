import React from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar.jsx';

function funcionarioList() {
    return (
        <div className="container">
            <Sidebar />
            <div className="content">
                <h1>Lista de Funcionários</h1>
            </div>
        </div>
    )
}

export default funcionarioList;