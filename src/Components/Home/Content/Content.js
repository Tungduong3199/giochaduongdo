import React from 'react';
import IntroduceProduct from "./IntroduceProduct";
import {makeStyles} from "@material-ui/core/styles";
import ListProduct from "./ListProduct";

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
        <div className={classes.container}>
            <IntroduceProduct/>
            <ListProduct/>
        </div>
    );
}

export default Content;