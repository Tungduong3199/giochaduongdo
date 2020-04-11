import React from 'react';
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";
import ProfileDetails from "./ProfileDetails";

function Profile(props) {
    return (
        <div>
            <Header/>
            <ProfileDetails/>
            <Footer/>
        </div>
    );
}

export default Profile;