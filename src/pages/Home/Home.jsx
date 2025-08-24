import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Title, Button, ButtonGroup, Container, Logo } from './styles';

function Home() {
    const navigate = useNavigate();
    return (
        <Container >
            <div className = "sidebar">
                <Logo>
                    <Title>Lava a Jato</Title>
                </Logo>
                <ButtonGroup>
                    <Button onClick={() => navigate('clientes')}>Clientes</Button>
                    <Button onClick={() => navigate('produtos')}>Produtos</Button>
                    <Button onClick={() => navigate('veiculos')}>Veiculos</Button>
                    <Button onClick={() => navigate('servicos')}>Servicos</Button>
                    <Button onClick={() => navigate('funcionarios')}>Funcionarios</Button>
                </ButtonGroup>
            </div>
        </Container>
    )
}

export default Home;