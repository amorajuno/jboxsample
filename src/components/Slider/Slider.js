import React from 'react'
import './Slider.css'
import SimpleImageSlider from "react-simple-image-slider";


export default function Slider() {

    const images = [
        { url: "https://assets.xboxservices.com/assets/24/53/24535e4d-a6fe-4566-a3c6-0e0048f9c291.jpg?n=3232400_Page-Hero-1084_1920x720.jpg" },
        { url: "https://assets.xboxservices.com/assets/31/6f/316fb6e7-58e0-4efe-aee5-42a356c4c14f.jpg?n=Forza-Horizon-5_Page-Hero-1084_1920x720.jpg" },
        { url: "https://assets.xboxservices.com/assets/c7/3c/c73c62ec-8c67-4ee8-9c2a-f8e16dfb3547.jpg?n=Minecraft_Page-Hero-1084_Shotlock_1920x720_02.jpg" },
        
    ];
            

    return (
        <div className="slider-container">
            <p className="sliderTitle">titulo da promoção</p>
            <SimpleImageSlider
                    width={1080}
                    height={464}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                />
            </div>
    )
}


