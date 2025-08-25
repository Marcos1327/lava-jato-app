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

        if(!formData.precoVenda){
            newErros.precoVenda = "Preço de venda é Obrigatório."
        } else if(isNaN(formData.precoVenda) || parseFloat(formData.precoVenda) <= 0){
            newErros.precoVenda = "Preço de venda deve ser maior que zero.";
        }

        if(!formData.estoque){
            newErros.estoque = "Estoque é Obrigatório."
        } else if(isNaN(formData.estoque) || parseInt(formData.estoque) < 0){
            newErros.estoque = "Estoque deve ser maior ou igual a zero.";
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
                precoVenda: parseFloat(formData.precoVenda).toFixed(2),
                estoque: parseInt(formData.estoque),
                observacao: formData.observacao.trim()
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
                        <label htmlFor="nome">Nome do Produto</label>
                        <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} className={errors.nome ? 'error' : ''} placeholder="Cera Automotiva" />
                        {errors.nome && <span className="error-message"> {errors.nome}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="precoVenda">Preço de Venda (R$)</label>
                        <input type="number" id="precoVenda" name="precoVenda" value={formData.precoVenda} onChange={handleChange} className={errors.precoVenda ? 'error' : ''} placeholder="12.50" step="0.01" min="0"></input>
                        {errors.precoVenda && <span className="error-message"> {errors.precoVenda}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="estoque">Quantidade em Estoque</label>
                        <input type="number" id="estoque" name="estoque" value={formData.estoque} onChange={handleChange} className={errors.estoque ? 'error' : ''} placeholder="50" min="0"></input>
                        {errors.estoque && <span className="error-message"> {errors.estoque}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="observacao">Observação</label>
                        <textarea id="observacao" name="observacao" value={formData.observacao} onChange={handleChange} placeholder="Informações adicionais sobre o produto (opcional)" rows="3"></textarea>
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