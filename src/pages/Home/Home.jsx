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
                <Button>Produtos</Button>
                <Button>Veiculos</Button>
                <Button>Servicos</Button>
                <Button>Funcionarios</Button>
            </ButtonGroup>
        </Container>
    )
}

export default Home;