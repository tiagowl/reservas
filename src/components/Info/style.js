import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-itens: flex-start;
    padding: 2% 10%;
    text-align: center;

    h1{
        font-family: "Archivo Narrow";
        color: black;
        font-size: 3rem;
        margin-bottom: 25px;
    }

    h2{
        font-family: "Archivo Narrow";
        color: #7C7878;
        font-size: 1.5rem;
        margin-bottom: 37px;
    }
`;

export const CardList = styled.div`
    display: flex;
    justify-content: center;
`;