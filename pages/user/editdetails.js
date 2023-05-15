import React from "react";
import ProfileMenu from "@/components/profileMenu";
const Editdetails = () => {
    return (
        <div className="edit_wrapper">
            <div className="edit_container">
                <ProfileMenu />
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
                        <div className="edit ">
                            <label htmlFor="card">Card Details:</label>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>
                        <div className="edit ">
                            <label htmlFor="card">Card Details:</label>
                            <textarea
                                name=""
                                id=""
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
