import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserPost from "./UserPost";
import UserStats from "./UserStats";

const User = () => {
    return (
        <section className="container">
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="postar" element={<UserPhotoPost />} />
                {/* <Route path='estatisticas' element={<UserStats />}/> */}
                <Route path="/user/post" element={<UserPost />} />
            </Routes>
        </section>
    );
};

export default User;
