import React from 'react';
import IntroduceProduct from "./IntroduceProduct";
import {makeStyles} from "@material-ui/core/styles";
import ListProduct from "./ListProduct";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    container: {
        width: 1170,
        margin: '0 auto',
        marginTop: 20,
    }
})
function Content(props) {
    const classes = useStyles();
    return (
        <Grid container xs={11} className={classes.container}>
            <IntroduceProduct/>
            <ListProduct/>
        </Grid>
    );
}

export default Content;