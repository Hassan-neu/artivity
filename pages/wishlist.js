import React from "react";
import WishItem from "@/components/wishItem";
import { useStateContext } from "@/hooks/stateContext";
const WishList = () => {
    const { wishList } = useStateContext();
    return (
        <div className="wishlist_wrapper">
            <div className="wishlist_container">
                <div className="wishlist-artwrks">
                    <div className="wishlist-count">
                        <h3>Saved Items (4)</h3>
                    </div>
                    {wishList.length < 1 && <h2>No Saved Item</h2>}
                    {wishList.map((wish) => (
                        <WishItem key={wish.id} list={wish} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WishList;
