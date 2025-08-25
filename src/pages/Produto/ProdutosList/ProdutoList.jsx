import React, { useState } from 'react';
import './ProdutoList.css';
import Sidebar from '../../../components/Sidebar/Sidebar.jsx';
import UpdateIcon from '../../../assets/icon-edit-color.svg';
import DeleteIcon from '../../../assets/icon-delete-color.svg';
import ProdutoModal from '../CriarProduto/CriarProduto.jsx';

function ProdutoList() {
    const produtos = [
        {
            id: 1,
            nome: 'Notebook Dell Inspiron 15',
            precoVenda: '2499.99',
            estoque: 15,
            observacao: 'Modelo 2024, SSD 512GB'
        },
        {
            id: 2,
            nome: 'Mouse Logitech MX Master 3',
            precoVenda: '459.90',
            estoque: 3,
            observacao: 'Sem fio, ergonômico'
        },
        {
            id: 3,
            nome: 'Notebook Dell Inspiron 15',
            precoVenda: '2499.99',
            estoque: 15,
            observacao: 'Modelo 2024, SSD 512GB'
        },
        {
            id: 4,
            nome: 'Notebook Dell Inspiron 15',
            precoVenda: '2499.99',
            estoque: 15,
            observacao: 'Modelo 2024, SSD 512GB'
        },
        {
            id: 5,
            nome: 'Notebook Dell Inspiron 15',
            precoVenda: '2499.99',
            estoque: 15,
            observacao: 'Modelo 2024, SSD 512GB'
        },
        {
            id: 6,
            nome: 'Notebook Dell Inspiron 15',
            precoVenda: '2499.99',
            estoque: 15,
            observacao: 'Modelo 2024, SSD 512GB'
        },
        {
            id: 7,
            nome: 'Notebook Dell Inspiron 15',
            precoVenda: '2499.99',
            estoque: 15,
            observacao: 'Modelo 2024, SSD 512GB'
        },
        {
            id: 8,
            nome: 'Notebook Dell Inspiron 15',
            precoVenda: '2499.99',
            estoque: 15,
            observacao: 'Modelo 2024, SSD 512GB'
        },
        {
            id: 9,
            nome: 'Notebook Dell Inspiron 15',
            precoVenda: '2499.99',
            estoque: 15,
            observacao: 'Modelo 2024, SSD 512GB'
        },
        {
            id: 10,
            nome: 'Notebook Dell Inspiron 15',
            precoVenda: '2499.99',
            estoque: 15,
            observacao: 'Modelo 2024, SSD 512GB'
        },
        {
            id: 11,
            nome: 'Notebook Dell Inspiron 15',
            precoVenda: '2499.99',
            estoque: 15,
            observacao: 'Modelo 2024, SSD 512GB'
        }
    ];

    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = produtos.slice(startIndex, endIndex);

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
    }

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="produtos-page">
            <Sidebar />
            <div className="main-content">
                <div className="produto-header">
                    <button className="addButton" onClick={handleOpenModal}>+ Adicionar Produto</button>
                </div>

                <div className="produtos-container">
                    <div className="content-panel">
                        <h2 className="container-title">Produtos em Estoque</h2>
                        <div className='table-container'>
                            <table className="produtos-table">
                                <thead>
                                    <tr>
                                        <th>Nome do Produto</th>
                                        <th>Preço de Venda</th>
                                        <th>Estoque</th>
                                        <th>Observação</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((produto) => (
                                        <tr key={produto.id}>
                                            <td>{produto.nome}</td>
                                            <td>R$ {produto.precoVenda}</td>
                                            <td>{produto.estoque}</td>
                                            <td>{produto.observacao}</td>
                                            <td className="table-actions">
                                                <button className="edit-button"><img src={UpdateIcon} alt="Atualizar"></img></button>
                                                <button className="delete-button"><img src={DeleteIcon} alt="Deletar"></img></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="pagination-container">
                                <div className="items-per-page">
                                    <span> Itens por página:</span>
                                    <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProdutoModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    )
}

export default ProdutoList;