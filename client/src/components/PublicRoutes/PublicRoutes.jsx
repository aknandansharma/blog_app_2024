import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Blogs from "../Blogs/Blogs";
import UserProfile from "../Profile/UserProfile";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

const PublicRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Blogs />} />
                <Route path='user-profile' element={<UserProfile />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
            </Routes>
        </>
    );
};

export default PublicRoutes;
