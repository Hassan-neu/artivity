import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
const Info = () => {
    const slider = useRef();
    const dots = useRef();
    const [indx, setIndx] = useState(0);

    useEffect(() => {
        const sliderNodes = slider.current.childNodes;
        const dotNodes = dots.current.childNodes;
        if (indx >= 7) return setIndx(0);
        [...sliderNodes].map(
            (slider) =>
                slider.classList.contains("active") &&
                slider.classList.remove("active")
        );
        [...dotNodes].map(
            (dot) =>
                dot.classList.contains("active") &&
                dot.classList.remove("active")
        );
        [...sliderNodes][indx].classList.add("active");
        [...dotNodes][indx].classList.add("active");
        const interval = setInterval(
            () => setIndx((prevIndx) => prevIndx + 1),
            2000
        );
        return () => clearInterval(interval);
    }, [indx]);
    return (
        <div className="info_wrapper">
            <div className="info_container">
                <div className="slider">
                    <div className="slider-art" ref={slider}>
                        <div className="art-slide">
                            <p>Mona Lisa</p>
                            <p>Leonardo Da Vinci</p>
                        </div>
                        <div className="art-slide">
                            <p>Wanderer Above the Sea of Fog</p>
                            <p>Casper David Friedrich</p>
                        </div>
                        <div className="art-slide">
                            <p>The Starry Night</p>
                            <p>Vincent van Gogh</p>
                        </div>
                        <div className="art-slide">
                            <p>NightHawks</p>
                            <p>Edward Hopper</p>
                        </div>
                        <div className="art-slide">
                            <p>Impression Sunrise</p>
                            <p>Claude Monet</p>
                        </div>
                        <div className="art-slide">
                            <p>Girl with a Pearl Earring</p>
                            <p>Johannes Vermeer</p>
                        </div>
                        <div className="art-slide">
                            <p>Antibes Vue de Plateau Notre-Dame</p>
                            <p>Claude Monet</p>
                        </div>
                    </div>

                    <div className="dots" ref={dots}>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="info-more">
                    <h2>
                        Discover the allure of history with our timeless antique
                        art collection.
                    </h2>

                    <button type="button">
                        <Link
                            href="/gallery"
                            style={{
                                display: "block",
                                width: "100%",
                                color: "#d06224",
                            }}
                        >
                            START SHOPPING
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Info;
