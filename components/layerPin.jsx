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
                stagger: {
                    each: 2,
                },
                scrollTrigger: {
                    trigger: ".layer_container",
                    start: "top top",
                    end: "+=2000",
                    scrub: true,
                    pin: true,
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
                <div className="layer"></div>
                <div className="layer"></div>
            </div>
        </div>
    );
};

export default LayerPin;
