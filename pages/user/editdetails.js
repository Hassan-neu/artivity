import React from "react";
import ProfileMenu from "@/components/profileMenu";
import { getSession } from "next-auth/react";
const Editdetails = ({ session }) => {
    return (
        <div className="edit_wrapper">
            <div className="edit_container">
                <ProfileMenu className={"menu_container"} />
                <div className="edit-details">
                    <div className="edit-head">
                        <h3>Edit Profile and Details</h3>
                    </div>
                    <form action="submit" method="post">
                        <div className="edit address">
                            <label htmlFor="address">Address:</label>
                            <textarea
                                name="Address"
                                id="address"
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>
                        <div className="edit card">
                            <label htmlFor="card">Card Details:</label>
                            <textarea
                                name="Card"
                                id="card"
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Editdetails;

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
