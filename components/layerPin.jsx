import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const LayerPin = () => {
    const pin = useRef();
    useEffect(() => {
        const tl = gsap.timeline();
        const ctx = gsap.context(() => {
            tl.from(".layer", {
                x: "-100vw",
                duration: 2,
                stagger: 3,
                scrollTrigger: {
                    trigger: ".layer_container",
                    start: "top top",
                    end: "+=2000",
                    pin: true,
                    scrub: true,
                },
            });
            // tl.from(".box", {
            //     y: -50,
            //     stagger: {
            //         each: 0.25,
            //         repeat: 2,
            //         yoyo: true,
            //     },
            //     scrollTrigger: {
            //         trigger: ".second",
            //         start: "right ",
            //     },

            //     duration: 2,
            // });
            tl.to(".box", {
                scale: 1.1,
                duration: 0.5,
                yoyo: true,
                stagger: {
                    repeat: -1,
                    each: 0.5,
                },
            });
        }, pin);
        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <div className="layer_wrapper" ref={pin}>
            <div className="layer_container">
                <div className="pin-text">
                    <h2>ART IMITATES LIFE</h2>
                </div>
                <div className="layer">
                    <div className="pin-text">
                        <h2>ART IS YOU</h2>
                    </div>
                </div>
                <div className="layer">
                    <div className="layer-items">
                        <p>ART MAKES THE HEART</p>
                        <div className="boxes">
                            <div className="box">
                                <p>B</p>
                            </div>
                            <div className="box">
                                <p>E</p>
                            </div>
                            <div className="box">
                                <p>A</p>
                            </div>
                            <div className="box">
                                <p>T</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayerPin;
