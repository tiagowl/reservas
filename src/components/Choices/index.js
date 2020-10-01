import React from 'react';
import { Container, Options } from './style';
import book from '../../icons/book.png';
import clock from '../../icons/clock.png';

export default function Choices(){
    return(
        <Container>
            <h1>Convoque o time e<br/> Faça uma reserva!</h1>
            <Options>
                <ul>
                    <li>Quadra</li>
                    <li>Sintético</li>
                    <img src={book} />
                    <li>Escolha a data</li>
                    <img src={clock} />
                    <li>Selecione o horário</li>
                </ul>
                <button>Marcar Jogo</button>
            </Options>
        </Container>
    );
}