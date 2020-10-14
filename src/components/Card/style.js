import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #7C7878;
    border-radius: 30px;
    width: 30%;
    height: auto;
    text-align: center;
    margin-right: 3%;

    img{
        border-radius: 30px;
        height: 340px;
    }

    p{
        font-size: 1.5rem;
        font-family: "Archivo Narrow";
        text-align: center;
        color: #7C7878;
    }

    h1{
        font-size: 2.25rem;
        font-family: "Archivo Narrow";
        color: #767575;
    }
`;

export const Text = styled.div`
    padding: 10% 5%;
`;