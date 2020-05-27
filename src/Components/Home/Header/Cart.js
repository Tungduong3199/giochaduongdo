import React from 'react';
import {KeyboardArrowDown, ShoppingCartOutlined} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    cart: {
        width: 50,
        height: 50,
        marginLeft: -35,
    },
    text: {
        color: 'gray',
        fontSize: 17,
        fontFamily: 'sans-serif',
        textAlign: 'center',
        marginLeft: -45
    },
    arrow: {
        color: 'gray',
        float: 'left',
        marginLeft: -10
    },
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginLeft: 120,
        cursor: 'pointer'
    }
})

function Cart(props) {
    const classes = useStyles()
    return (
        <Grid item container sm={12} className={classes.container}>
            <Grid item sm={4}>
                <ShoppingCartOutlined className={classes.cart}/>
            </Grid>
            <Grid item sm={4}>
                <p className={classes.text}>
                    Giỏ hàng:<br/>
                   0 sp - 0đ
                </p>
            </Grid>
            <Grid item sm={1}>
                <KeyboardArrowDown className={classes.arrow}/>
            </Grid>
        </Grid>
    );
}

export default Cart;