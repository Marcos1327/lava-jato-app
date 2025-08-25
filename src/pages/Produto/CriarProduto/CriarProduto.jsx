import React, { useState } from "react";
import './CriarProduto.css';

function ProdutoModal({isOpen, onClose}) {
    const [formData, setFormData] = useState({
        nome: '',
        precoVenda: '',
        estoque: '',
        observacao: ''
    });

    const [errors, setErrors] = useState({});

    const handleClose = () => {
        setFormData({
            nome: '',
            precoVenda: '',
            estoque: '',
            observacao: ''
        });
        setErrors({});
        onClose();
    };

    if (!isOpen) return null

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Adicionar Produto</h2>
                    <button className="modal-close-button" onClick={handleClose} type="button">X</button>
                </div>

                <form className="modal-form">
                    <div className="form-group">
                        <label htmlFor="nome">Nome do Produto *</label>
                        <input type="text" id="nome" name="nome" placeholder="Exemplo: Cera Automotiva"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProdutoModal;