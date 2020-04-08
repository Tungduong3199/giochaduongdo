import React from 'react';
import logo from '../../../Images/logo.png'
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {Phone} from "@material-ui/icons";
import Search from './Search'
import Cart from "./Cart";

const useStyles = makeStyles({
    img: {
        height: 150,
        width: 150,
        marginTop: -35
    },
    phone: {
        width: 50,
        height: 50,
        color: 'gray',
        marginLeft: 5
    },
    phoneNumber: {
        color: 'gray',
        fontSize: 17,
        fontFamily: 'sans-serif'
    },
    search: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

function MidHeader(props) {
    const classes = useStyles()
    return (
        <Grid container sm={12}>
            <Grid item sm={2}>
                <img alt={'giochaduongdo'} src={logo} className={classes.img}/>
            </Grid>
            <Grid item container sm={7} className={classes.search}>
                <Grid item container sm={4}>
                    <Grid item sm={3}>
                        <Phone className={classes.phone}/>
                    </Grid>
                    <Grid item sm={7}>
                        <span className={classes.phoneNumber}>
                            Phone:
                            0397.420.542
                        </span>
                    </Grid>
                </Grid>
                <Grid item sm={8}>
                    <Search/>
                </Grid>
            </Grid>
            <Grid item sm={3} className={classes.search}>
                <Cart/>
            </Grid>
        </Grid>
    );
}

export default MidHeader;