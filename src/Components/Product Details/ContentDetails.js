import React, {useState} from 'react';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    root: {
        width: 670,
        height: 575,
        marginLeft: 13,
        backgroundColor: '#fff',
    },
    container: {
        paddingTop: 30,
        marginLeft: 35
    },
    nameProduct: {
        textTransform: 'capitalize',
        fontFamily: 'segoe-ui light',
        fontSize: 34,
        fontWeight: 500
    },
    price: {
        fontWeight: 'bold',
        fontSize: 28,
        color: '#245a46',
        fontFamily: 'segoe ui light',
        marginTop: 20
    },
    descrided: {
        fontSize: 17,
        color: '#666666',
        textTransform: 'initial',
        marginTop: 20
    },
    quantity: {
        width: 40,
        height: 40,
        paddingLeft: 5,
        fontSize: 18
    },
    button: {
        backgroundColor: '#245a46',
        color: '#fff',
        marginTop: 20,
    }
})

function ContentDetails({product}) {
    const classes = useStyles();
    const [quantity, setQuantity] = useState(1)

    function handleChangeQuantity(e) {
        setQuantity(e.target.value)
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Typography variant={'h4'} className={classes.nameProduct}>{product.name}</Typography>
                <Typography variant={"h6"} className={classes.price}>{product.price}</Typography>
                <Typography variant={"body1"} className={classes.descrided}>{product.descrided}</Typography>
                <Typography variant={"body1"} style={{marginTop: 20, color: '#666666'}}>Số lượng:</Typography>
                <input type="number" min="0" onChange={handleChangeQuantity} value={quantity}
                       className={classes.quantity}/><br/>
                <Button type={'contained'} className={classes.button}>Thêm vào giỏ hàng</Button>
            </div>
        </div>
    );
}

export default ContentDetails;