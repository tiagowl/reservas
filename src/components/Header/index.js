import React from 'react';
import { Container, Icon, Options, Login } from './style';
import Logo from '../../icons/iconfinder_Soccer_6159268.png';

export default function Header(){
    return(
        <Container>
            <Icon>
                <li><img src={Logo} alt="Logo da Planet Soccer" /></li>
                <li>Planet Soccer</li>
            </Icon>
            <Options>
                <li>A empresa</li>
                <li>Valores</li>
                <li>Contato</li>
            </Options>
            <Login>
                <li>Entrar</li>
                <li>Cadastrar</li>
            </Login>
        </Container>
    );
}