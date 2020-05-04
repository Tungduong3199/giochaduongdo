import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import anh1 from '../../../Images/gio-lua.png'
import ProductDetails from "./ProductDetails";
import IntroduceProduct from "./IntroduceProduct";
import {firestore} from '../../../firebaseConfig'

const useStyles = makeStyles({
    container: {
        marginTop: 20,
        marginLeft: -15,
        marginRight: 5
    },
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

const List = [anh1, anh1, anh1, anh1]

function ListProduct(props) {
    const classes = useStyles();
    const [arr, setArr] = useState(List)
    const [data, setData] = useState({})

    const getData = async () => {
        try {
            const result = await firestore.collection('products')
                .get()
            if (result.size > 0) {
                const _data = {}
                result.forEach(doc => {
                    const d = doc.data()
                    console.log(d, 'ddddd');
                    const cate = d.cate
                    if (_data[cate]) {
                        _data[cate].push(d)
                    } else {
                        _data[cate] = [d]
                    }
                })
                setData(_data)
            }
        } catch (e) {
            console.log(e);
        }
    }
    console.log(data);
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className={classes.container}>
            <div className={classes.topic}>
                <span>Giò</span>
                <div className={classes.before}></div>
            </div>
            <Grid container sm={12} className={classes.box}>
                <Grid item sm={4} className={classes.qc}>
                    <img className={classes.imgQc}
                         src={'http://demo.posthemes.com/pos_greenfarm/layout4/modules/poslistcateproduct/images/728560923e4c0f26b2635b2add8e0b9cdf562c50_listcate1.jpg'}/>
                </Grid>
                <Grid item sm={8}>
                    <Grid item sm={12} className={classes.listProduct}>
                        {arr.map(value => <ProductDetails img={value}/>)}
                    </Grid>
                    <Grid item container sm={12} style={{marginTop: 10}}>
                        <IntroduceProduct/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default ListProduct;