import React from "react";
import ProfileMenu from "@/components/profileMenu";
import Image from "next/image";
import { getSession } from "next-auth/react";
const Profile = ({ session }) => {
    return (
        <div className="profile_wrapper">
            <div className="profile_container">
                <ProfileMenu />
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
                    <div className="base-details">
                        <div className="address-details">
                            <p>Address:</p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Aut veniam mollitia
                                exercitationem quae, doloremque dolores eligendi
                                corporis quia ab fuga?
                            </p>
                        </div>
                        <div className="card-details">
                            <p>Card details:</p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Dolores est cumque quaerat
                                molestias non voluptas reprehenderit. Quibusdam
                                amet debitis deserunt.
                            </p>
                        </div>
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
