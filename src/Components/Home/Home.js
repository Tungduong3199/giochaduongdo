import React from 'react';
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    content: {
        backgroundColor: '#f5f5f5',
        paddingBottom: 40
    }
})

function Home() {
    const classes = useStyles();
    return (
        <div>
            <Header/>
            <div className={classes.content}>
                <Banner/>
                <Content/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;