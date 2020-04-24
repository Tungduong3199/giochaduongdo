import React from 'react';
import Footer from "../Home/Footer/Footer";
import Header from "../Home/Header/Header";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import ImageDetails from "./ImageDetails";

const useStyles = makeStyles({
    container: {
        width: 1170
    }
})

function ProductDetails(props) {
    const classes = useStyles();
    console.log(localStorage.name)
    return (
        <div>
            <Header/>
            <section>
                <Grid className={classes.container} container sm={12}>
                    <Grid item sm={5}>
                        <ImageDetails/>
                    </Grid>
                    <Grid item sm={7}>

                    </Grid>
                </Grid>
            </section>
            <Footer/>
        </div>
    );
}

export default ProductDetails;