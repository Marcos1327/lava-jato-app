import React, { useState } from "react";
import './CriarProduto.css';

function ProdutoModal({ isOpen, onClose, onSave}) {
    const [formData, setFormData] = useState({
        nome: '',
        precoVenda: '',
        estoque: '',
        observacao: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Remove error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErros = {};

        if (!formData.nome.trim()) {
            newErros.nome = 'O nome do produto é obrigatório.';
        }

        setErrors(newErros);
        return Object.keys(newErros).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const novoProduto = {
                id: Date.now(), // Temporary ID generation
                nome: formData.nome.trim(),
                // precoVenda: parseFloat(formData.precoVenda).toFixed(2),
                // estoque: parseInt(formData.estoque),
                // observacao: formData.observacao.trim()
            };

            onSave(novoProduto);
            handleClose();
        }
    };

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

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Adicionar Produto</h2>
                    <button className="modal-close-button" onClick={handleClose} type="button">X</button>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="form-group">
                        <label htmlFor="nome">Nome do Produto *</label>
                        <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} className={errors.nome ? 'error' : ''} placeholder="Exemplo: Cera Automotiva" />
                        {errors.nome && <span className="error-message"> {errors.nome}</span>}
                    </div>
                    <div className="modal-actions">
                        <button type="button" className="cancel-button" onClick={handleClose}>Cancelar</button>
                        <button type="submit" className="save-button">Salvar Produto</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProdutoModal;