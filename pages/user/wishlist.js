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
                <ProfileMenu />
                <div className="wishlist-artwrks">
                    <div className="wishlist-count">
                        <h3>Saved Items ({wishList.length})</h3>
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
