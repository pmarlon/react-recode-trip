import React from 'react';

import './Destinos.css'
import CardInfo from './Card'

import Row from 'react-bootstrap/Row'


const Destinos = () => {
    const cardInfo = [
        {imageUrl:"https://www.viagenscinematograficas.com.br/wp-content/uploads/2018/03/Praia-de-Pipa-RN-O-que-Fazer-Capa-2.jpg", title:"Praia da Pipa", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {imageUrl:"https://www.viagenscinematograficas.com.br/wp-content/uploads/2019/07/Paraty-O-que-fazer-Roteiro-Capa.jpg", title:"Paraty", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et pulvinar justo. Nulla elementum vitae lectus nec vehicula."},
        {imageUrl:"https://i0.wp.com/trilhasviagens.com.br/wp-content/uploads/2022/01/jalapao-min.jpg", title:"Jalapão", text:"Nunc non accumsan dolor, vel rhoncus lectus."},
        {imageUrl:"https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/foto-abre-pgalinhas01.jpg?quality=70&strip=info&w=1024", title:"Porto de Galinhas", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et pulvinar justo. "},
        {imageUrl:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/95/26/78/lugar-fantastico.jpg?w=700&h=500&s=1", title:"Morro de São Paulo", text:"Pellentesque et pulvinar justo. Nulla elementum vitae lectus nec vehicula. Nunc non accumsan dolor, vel rhoncus lectus."},
        {imageUrl:"https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-gramado-capa2019-04.jpg", title:"Gramado", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et pulvinar justo. Nulla elementum vitae lectus nec vehicula. Nunc non accumsan dolor, vel rhoncus lectus."},
    ]
    
    return ( 
        <div className="cards">
            <Row xs={1} md={2} lg={3} className="g-4">
            {cardInfo.map(cardInfo => <CardInfo cardInfo={cardInfo}/>)}

            </Row>
            </div>

 );
}
 
export default Destinos;