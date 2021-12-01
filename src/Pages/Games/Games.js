import './games.css'
import React from 'react'
import Card from '../../components/Card/card'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Games = ({ props }) => {

    const games = [
        { "id": 1, "name": "Minecraft", "img": "https://store-images.s-microsoft.com/image/apps.17382.13510798887677013.afcc99fc-bdcc-4b9c-8261-4b2cd93b8845.49beb011-7271-4f15-a78b-422c511871e4" },
        { "id": 2, "name": "Cities Skyline", "img": "https://store-images.s-microsoft.com/image/apps.7220.66617542682682743.811213f2-2c45-4145-973d-fe3e3774b196.96b48a30-7ed1-4bc9-8f8b-b114375b2e1c" },
        { "id": 3, "name": "Witcher", "img": "https://store-images.s-microsoft.com/image/apps.28990.69531514236615003.8f0d03d6-6311-4c21-a151-834503c2901a.d629260e-2bc4-4588-950c-f278cbc22a64" },
        { "id": 4, "name": "War Thunder", "img": "https://store-images.s-microsoft.com/image/apps.10736.63381296256995371.8d4c1c64-a75d-4773-b3aa-21c1a2d79bf7.ff20f26c-fcb2-414a-b57e-8b960f7562b9" },
        { "id": 5, "name": "Tomb Raider", "img": "https://store-images.s-microsoft.com/image/apps.35283.68847167288522183.9fdea778-258f-40d6-9f9e-fab92915bc6d.98c2dd25-9180-49e5-bdd3-6bdb1d857889" },
        { "id": 6, "name": "The Medium", "img": "https://store-images.s-microsoft.com/image/apps.2984.13592824581067623.a376e59f-d8cf-40c9-9ef6-c7bd11240ed4.a8a5433b-ca63-40c2-a1b4-d4c071c89d69" }
    ];

    return (

        <div>
            <h2>Jogos mais vendidos</h2>
            <div className="container">
                <div className="card">
                    
                    <Carousel>

                        {games.map((game, index) => (<Card name={game.name} img={game.img} />))}
                    </Carousel>
                    
                </div>
            </div>
        </div >

    )
}

export default Games
