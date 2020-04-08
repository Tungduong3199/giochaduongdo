import React from 'react';
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

function Home(props) {
    return (
        <div>
            <Header/>
            <div style={{backgroundColor:'#f5f5f5'}}>
                <Banner/>
                <Content/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;