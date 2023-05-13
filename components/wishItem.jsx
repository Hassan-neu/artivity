import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useStateContext } from "@/hooks/stateContext";
import { urlFor } from "@/libs/client";
const WishItem = ({ list }) => {
    const { image, artiste, name, price, id, slug } = list;
    const { toRemoveArt } = useStateContext();
    return (
        <div className="list-item">
            <div className="list-dets">
                <Link href={`/artwork/${slug.current}`}>
                    <Image
                        src={urlFor(image[0]).url()}
                        width={100}
                        height={100}
                        alt={name}
                    />
                </Link>

                <div className="list-title">
                    <h4>{name}</h4>
                    <p>{artiste}</p>
                    <p>
                        $
                        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                </div>
            </div>

            <div className="list-optn">
                <div
                    className="list-rmv"
                    onClick={() => {
                        toRemoveArt(id);
                    }}
                >
                    <button type="button"> Remove</button>
                </div>
                <div className="list-buy">
                    <button type="button">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default WishItem;
