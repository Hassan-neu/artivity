import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Art = () => {
    const art = useRef();
    useEffect(() => {
        const ctx = gsap.context(() => {}, art);
        const tl = gsap.timeline({});
        ctx.add(() => {
            tl.from(".art-element", {
                x: "-100vw",
                duration: 2,
                stagger: 0.1,
                rotation: -260,
                scrollTrigger: {
                    trigger: ".art_container",
                    start: "top top",
                    scrub: true,
                    pin: true,
                    id: "for-art",
                    markers: true,
                },
            });
        });

        return () => ctx.revert();
    }, []);
    return (
        <div className="art_wrapper" ref={art}>
            <div className="art_container">
                <h2>IS THIS ART?</h2>
                <div className="art-element">
                    <p>Mona Lisa</p>
                    <p>Leonardo Da Vinci</p>
                </div>
                <div className="art-element">
                    <p>Wanderer Above the Sea of Fog</p>
                    <p>Casper David Friedrich</p>
                </div>
                <div className="art-element">
                    <p>The Starry Night</p>
                    <p>Vincent van Gogh</p>
                </div>
                <div className="art-element">
                    <p>NightHawks</p>
                    <p>Edward Hopper</p>
                </div>
                <div className="art-element">
                    <p>Impression Sunrise</p>
                    <p>Claude Monet</p>
                </div>
                <div className="art-element">
                    <p>Girl with a Pearl Earring</p>
                    <p>Johannes Vermeer</p>
                </div>
                <div className="art-element">
                    <p>Antibes Vue de Plateau Notre-Dame</p>
                    <p>Claude Monet</p>
                </div>
            </div>
        </div>
    );
};

export default Art;
