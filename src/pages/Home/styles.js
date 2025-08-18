import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;       /* alinha título e botões na vertical */
  justify-content: flex-start; /* separa o título dos botões */
  gap: 20px;
  padding: 10px 10px;
  background-color: #60d3f0ff;
`
export const Title = styled.h1`
        font-weight: 600;
        font-size: 2.5rem;
        color: #2c3e50;
        margin: 0;
`

export const ButtonGroup = styled.div`
        display: flex;
        gap: 10px;
`

export const Button = styled.button`
        background-color: #f1c40f;
        color: #ffffff;
        border-color: #f39c12;
        padding: 10px 20px;
        border-radius: 5px;
        transition: background-color 0.2s;
        cursor: pointer;

        &:hover {
            background-color: #f39c12;
        }
`


