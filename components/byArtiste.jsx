import { urlFor } from "@/libs/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ByArtiste = ({ byArtiste }) => {
    const { image, artiste, price, name, slug } = byArtiste;
    return (
        <Link href={`/artwork/${slug.current}`}>
            <div className="artcrd-card">
                <div className="artcrd-image">
                    <Image
                        src={urlFor(image[0]).url()}
                        width={200}
                        height={200}
                        alt="monalisa"
                    />
                </div>
                <div className="artcrd-details">
                    <div className="artcrd-artiste">{artiste}</div>
                    <div className="artcrd-price">
                        $
                        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </div>
                    <div className="artcrd-name">{name}</div>
                </div>
            </div>
        </Link>
    );
};

export default ByArtiste;
