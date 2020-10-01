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
    align-items: center;
    background: white;
    width: 1072px;
    height: 90px;
    border-radius: 30px;
    margin-top: 10px;
    padding-left: 40px;

    ul{
        display: flex;
        list-style: none;
    }

    li{
        color: #7C7878;
        font-family:"Archivo Narrow";
        font-size: 24px;
        margin-right: 100px;
        witdh: 100px;
    }

    img{
        width: 47px;
        height: 45px;
    }

    button{
        background: #77D0A5;
        width: 200px;
        height: 90px;
        border-radius: 30px;
        font-family:"Archivo Narrow";
        color: white;
        font-size: 24px;
    }
`;