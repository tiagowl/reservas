import styled from 'styled-components';
import banner from '../../img/editado2.png';

export const Container = styled.div`
    max-width: 2000px;
    height: 714px;
    background-image: url(${banner});
    background-repeat: no-repeat;
    padding-top: 131px;
    padding-left: 157px;

    h1{
        color: white;
        font-family:"Archivo Narrow";
        font-size: 64px;
        font-weight: 600px;
    }
`;

export const Options = styled.div`
    display: flex;
    background: white;
    justify-content: space-between;
    align-self: center;
    width: 80vw;
    height: 90px;
    border-radius: 30px;
    margin-top: 10px;

    ul{
        display: flex;
        align-items: center;
        list-style: none;
        margin-left: 30px;
    }

    li{
        color: #7C7878;
        font-family:"Archivo Narrow";
        font-size: 1.2rem;
        margin-right: 100px;
    }

    img{
        width: 30px;
        height: 30px;
        margin-right: 5px;
    }

    button{
        background: #77D0A5;
        width: 220px;
        height: 90px;
        border-radius: 30px;
        font-family:"Archivo Narrow";
        color: white;
        font-size: 1.2rem;
    }
`;