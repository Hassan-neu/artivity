import React from "react";
import Art from "./art";
import LayerPin from "./layerPin";
import Info from "./info";
const Hero = () => {
    return (
        <div className="hero">
            <Art />
            <Info />
            <LayerPin />
        </div>
    );
};

export default Hero;
