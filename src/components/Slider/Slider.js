import React,{useState} from 'react'
import './Slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Fade  from 'react-reveal/Fade';

export default function Slider() {
    const [show,setShow] = useState(true)
    const handleSwipeActive = () =>{
        return setShow(!show)
    }

    const handleSwipeDisable = () =>{
        return setShow(true)
    }
    const ofertas = [
        {
            title: "Forza Horizon 5 ",
            tag: "CONSOLE • PC",
            text: "Jogue agora com o xbox game pass ou compre",
            color:false,
            url: "https://assets.xboxservices.com/assets/31/6f/316fb6e7-58e0-4efe-aee5-42a356c4c14f.jpg?n=Forza-Horizon-5_Page-Hero-1084_1920x720.jpg"
        },
        {
            title: "Halo infinite ",
            tag: "CONSOLE • PC • CLOUD",
            text: "Sempre acreditamos em heróis. Agora, é a hora de se tornar um.",
            color:false,
            url: "https://assets.xboxservices.com/assets/63/1c/631c594c-3aa4-4e1d-a133-7d1923e4570b.jpg?n=58585555_Page-Hero-1084_1920x720_03.jpg"
        },
        {
            title: "Oferta da Cyber Week XBOX",
            tag: "",
            text: "Economize até 50% nos jogos selecionados",
            color: true,
            url: 'https://assets.xboxservices.com/assets/24/53/24535e4d-a6fe-4566-a3c6-0e0048f9c291.jpg?n=3232400_Page-Hero-1084_1920x720.jpg'
        },


    ]



    return (
        <div className="slider-wrapper">
            <Carousel
            autoPlay={true}
            infiniteLoop={true}

            >
            

                {ofertas.map((item, index) => (
                    <div key={index} >
                        <div className="image">
                            <img src={item.url} alt="Títulos em promoção" />
                        </div>
                        <Fade left>
                            <div className={`slider-container ${item.color ? "colorText" : ""}`}>
                                <div className="tag-wrapper">
                                    <p className="tag">{item.tag}</p>
                                </div>
                                <h2 className="titulo">{item.title}</h2>
                                <h3 className="subtitle">{item.text}</h3>
                            </div>
                        </Fade>
                    </div>
                ))}
            </Carousel>

        </div>
    )
}


