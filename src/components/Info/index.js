import React from 'react';
import { Container, CardList } from './style.js';
import Card from '../../components/Card';
import quadra from '../../img/5801_big.jpg';
import estacionamento from '../../img/estacionamentos-brusque.jpg';
import vestiario from '../../img/vestiario-atlhetics-capa.jpg';

export default function Info(){
    return(
        <Container>
            <h1>Nossa Estrutura</h1>
            <h2>Possuímos uma estrutura ampla e com várias comodidades para jogos de futebol 7, churrascos, festas e eventos.</h2>
            <CardList>
                <Card titulo={"Quadras e futebol 7"} imagem={quadra} texto={"Contamos com duas quadras cobertas de futebol 7. As quadras possuem gramado sintético com inédito Sistema Shock Pad de amortecimento  e iluminação da mais alta qualidade."} />
                <Card titulo={"Vestiários"} imagem={vestiario} texto={"Contamos com amplo vestiário e banheiros constantemente higienizados, chuveiros com aquecimento à gás e armários individualizados."} />
                <Card titulo={"Estacionamentos"} imagem={estacionamento} texto={"Amplo estacionamento com segurança total, monitorado por vigias próprios, câmeras de segurança monitoradas online pela empresa Rudder Segurança, além de contarmos com empresa de segurança privada."} />
            </CardList>
        </Container>
    );
}