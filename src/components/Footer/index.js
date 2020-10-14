import React from 'react';
import { Container, AgendaOptions, Icon } from './style.js';
import Logo from '../../icons/iconfinder_Soccer_6159268.png';

export default function Footer(){
    return(
        <Container>

            <AgendaOptions>
                <Icon>
                    <li><img src={Logo} alt="Logo da Planet Soccer" /></li>
                    <li>Planet Soccer</li>
                </Icon>
            </AgendaOptions>

            <AgendaOptions>
                <h1>Planet Soccer</h1>
                <li>O Planet</li>
                <li>Valores</li>
                <li>Eventos</li>
                <li>Contato</li>
            </AgendaOptions>

            <AgendaOptions>
                <h1>Agendamento</h1>
                <li>Entrar</li>
                <li>Cadastrar</li>
            </AgendaOptions>

            <AgendaOptions>
                <h1>Horários</h1>
                <li>Todos os dias, das 8h<br/> até a saída
                do último cliente, sem<br/> fechar ao meio-dia.</li>
            </AgendaOptions>

            
        </Container>
    );
}