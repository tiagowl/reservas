import styled from 'styled-components';

export const Container = styled.footer`
    background: #278759;
    width: 100%;
    padding: 3% 5%;
    height: auto;
    display: flex;
    text-align: center;
    justify-content: center;
`;

export const AgendaOptions = styled.ul`

    h1{
        font-size: 1.6rem;
        margin-bottom: 5px;
    }

    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    color: white;
    font-family: "Archivo Narrow";
    list-style: none;
    font-weight: normal;
    margin-right: 200px;

`;

export const Icon = styled.ul`

    list-style: none;
    display: flex;
    align-items: center;

    img{
        height: 75px;
        width: 73px;
        margin-right: 7px;
    }

    li{
        font-family:"Righteous";
        color: white;
        font-size: 1.5rem;
    }
`;

