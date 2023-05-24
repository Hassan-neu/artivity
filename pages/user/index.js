import React from "react";
import ProfileMenu from "@/components/profileMenu";
import Image from "next/image";
import { getSession } from "next-auth/react";
const Profile = ({ session }) => {
    return (
        <div className="profile_wrapper">
            <div className="profile_container">
                <ProfileMenu className={"menu_container"} />
                <div className="profile-details">
                    <div className="personal">
                        <div className="profile-picture">
                            <Image
                                src={
                                    session.user.image ? session.user.image : ""
                                }
                                alt="profile-picture"
                                width={100}
                                height={100}
                            />
                        </div>
                        <p>{session.user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

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
