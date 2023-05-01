import React, { useRef, useEffect, startTransition } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const LayerPin = () => {
    const pin = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {}, pin);
        const tl = gsap.timeline({});
        ctx.add(() => {
            tl.to(".layer", {});
        });
        return () => ctx.revert();
    }, []);
    return (
        <div className="layer_wrapper" ref={pin}>
            <div className="layer_container">
                <div className="layer one"></div>
                <div className="layer two"></div>
                <div className="layer three"></div>
            </div>
        </div>
    );
};

export default LayerPin;
