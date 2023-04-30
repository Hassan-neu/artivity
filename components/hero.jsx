import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
const Hero = () => {
    const hero = useRef();
    useEffect(() => {
        const ctx = gsap.context(() => {}, hero);
        const tl = gsap.timeline({
            stagger: {
                ease: "bounce",
                each: 0.25,
                from: "edges",
            },
        });
        ctx.add(() => {
            tl.from(".hero-element:nth-child(1)", {
                duration: 2,
                x: "-100vw",
            })
                .from(".hero-element:nth-child(2)", {
                    duration: 2,

                    x: "-100vw",
                })
                .from(".hero-element:nth-child(3)", {
                    duration: 2,

                    x: "-100vw",
                })
                .from(".hero-element:nth-child(4)", {
                    duration: 2,

                    x: "-100vw",
                })
                .from(".hero-element:nth-child(5)", {
                    duration: 2,

                    x: "-100vw",
                })
                .from(".hero-element:nth-child(6)", {
                    duration: 2,

                    x: "-100vw",
                })
                .from(".hero-element:nth-child(7)", {
                    duration: 2,

                    x: "-100vw",
                });
        });

        return () => ctx.revert();
    }, []);
    return (
        <div className="hero_wrapper" ref={hero}>
            <div className="hero_container">
                <div className="hero-element">
                    <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate, dicta!
                    </h3>
                </div>
                <div className="hero-element">
                    <h3>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Autem, a.
                    </h3>
                </div>
                <div className="hero-element">
                    <h3>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Placeat, aspernatur.
                    </h3>
                </div>
                <div className="hero-element">
                    <h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Rem, exercitationem?
                    </h3>
                </div>
                <div className="hero-element">
                    <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda, consequatur!
                    </h3>
                </div>
                <div className="hero-element">
                    <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum, quis.
                    </h3>
                </div>
                <div className="hero-element">
                    <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum, enim?
                    </h3>
                </div>
                {/* <Image
                    src="/mona-lisa.jpg"
                    width={400}
                    height={300}
                    alt="Da Vinci's Mona lisa"
                />
                <Image
                    src="/wanderer.jpg"
                    width={400}
                    height={300}
                    alt="Casper David Friedrich's Wanderer"
                />
                <Image
                    src="/starry-night.jpg"
                    width={400}
                    height={300}
                    alt="Vincent van Gogh's Starry Night"
                />
                <Image
                    src="/nighthawks.jpg"
                    width={400}
                    height={300}
                    alt="Edward Hopper's NightHawks"
                />
                <Image
                    src="/impression-sunrise.jpg"
                    width={400}
                    height={300}
                    alt="Claude Monet's impression sunrise"
                />
                <Image
                    src="/girl-with-pearl.jpg"
                    width={400}
                    height={300}
                    alt="Johanes Vermeer's Girl with pearl"
                />
                <Image
                    src="/claude-monet.jpg"
                    width={400}
                    height={300}
                    alt="a Claude Monet painting"
                /> */}
            </div>
        </div>
    );
};

export default Hero;
