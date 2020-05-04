import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import ProductDetails from "./ProductDetails";
import IntroduceProduct from "./IntroduceProduct";
import {makeStyles} from "@material-ui/core/styles";
import anh1 from "../../../Images/gio-lua.png";

const useStyles = makeStyles({
    topic: {
        backgroundColor: '#245a46',
        width: '10%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        position: 'relative',
    },
    before: {
        position: 'absolute',
        borderBottom: '15px solid transparent',
        borderLeft: '15px solid transparent',
        borderTop: '15px solid #5d8801',
        top: '100%',
        zIndex: 999,
        left: 0
    },
    box: {
        marginLeft: 15
    },
    qc: {
        overflow: 'hidden',
    },
    imgQc: {
        height: '100%',
        width: '100%',
        transition: 'all 1s ease-in-out',
        '&:hover': {
            transform: 'scale(1.1,1.1)'
        }
    },
    listProduct: {
        display: 'flex',
        flexDirection: 'row',
    }
})

function ListProductDetails({data, cate}) {
    const classes = useStyles();

    return (
        <div style={{marginBottom: 20}}>
            <div className={classes.topic}>
                <span>{cate}</span>
                <div className={classes.before}></div>
            </div>
            <Grid container sm={12} className={classes.box}>
                <Grid item sm={4} className={classes.qc}>
                    <img className={classes.imgQc}
                         src={'http://demo.posthemes.com/pos_greenfarm/layout4/modules/poslistcateproduct/images/728560923e4c0f26b2635b2add8e0b9cdf562c50_listcate1.jpg'}/>
                </Grid>
                <Grid item sm={8}>
                    <Grid item sm={12} className={classes.listProduct}>
                        {data.map(value => <ProductDetails id={value.id} cate={cate} price={value.price}
                                                           name={value.name} img={value.productAvt}/>)}
                    </Grid>
                    <Grid item container sm={12} style={{marginTop: 10}}>
                        <IntroduceProduct/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default ListProductDetails;