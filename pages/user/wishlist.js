import React from "react";
import WishItem from "@/components/wishItem";
import { useStateContext } from "@/hooks/stateContext";
import ProfileMenu from "@/components/profileMenu";
import { getSession } from "next-auth/react";
const WishList = () => {
    const { wishList } = useStateContext();
    return (
        <div className="wishlist_wrapper">
            <div className="wishlist_container">
                <ProfileMenu className={"menu_container"} />
                <div className="wishlist-artwrks">
                    <div className="wishlist-count">
                        <p>Saved Items ({wishList.length})</p>
                    </div>
                    {wishList.length < 1 && <p>No Saved Item</p>}
                    <div className="wishlist-list">
                        {wishList.map((wish) => (
                            <WishItem key={wish.id} list={wish} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishList;
export const getServerSideProps = async ({ req }) => {
    const session = await getSession({ req });
    if (!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }
    return {
        props: {
            session,
        },
    };
};
