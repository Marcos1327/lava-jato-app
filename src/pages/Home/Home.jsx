import React, { use } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title, Button, ButtonGroup, Container } from './styles';

function Home() {
    const Navigate = useNavigate();
    return (
        <Container >
            <Title>Lava a Jato</Title>
            <ButtonGroup>
                <Button onClick={() => Navigate('clientes')}>Clientes</Button>
                <Button onClick={() => Navigate('produtos')}>Produtos</Button>
                <Button onClick={() => Navigate('veiculos')}>Veiculos</Button>
                <Button onClick={() => Navigate('servicos')}>Servicos</Button>
                <Button onClick={() => Navigate('funcionarios')}>Funcionarios</Button>
            </ButtonGroup>
        </Container>
    )
}

export default Home;