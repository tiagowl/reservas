import styled from 'styled-components';

export const Container = styled.nav`
    background: #77D0A5;
    height: 96px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    decoration: none;
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
        font-size: 24px;
    }
`;

export const Options = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    decoration: none;
    margin-left: 200px;
    list-style: none;

    li{
        font-family:"Archivo Narrow";
        color: white;
        font-size: 21px;
        margin-right: 80px;
        font-weight: 400;
        font-style: normal;
    }
`;

export const Login = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    decoration: none;
    margin-left: 200px;
    list-style: none;

    li{
        font-family:"Archivo Narrow";
        color: white;
        font-size: 21px;
        margin-right: 80px;
        font-weight: 400;
        font-style: normal;
    }
`;