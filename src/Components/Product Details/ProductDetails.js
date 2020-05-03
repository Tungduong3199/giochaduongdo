import React, {useEffect, useState} from 'react';
import Footer from "../Home/Footer/Footer";
import Header from "../Home/Header/Header";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import ImageDetails from "./ImageDetails";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import {firestore} from '../../firebaseConfig'
import ContentDetails from "./ContentDetails";
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles({
    container: {
        width: 1170,
        margin: 'auto',
        marginTop: 30
    },
    box: {
        backgroundColor: '#f5f5f5',
        padding: '10px 0'
    },
    path: {
        width: 1170,
        margin: 'auto',
        padding: '20px 0'
    },
    link: {
        cursor: 'pointer'
    }
})

function ProductDetails(props) {
    const classes = useStyles();
    const history = useHistory();
    const [nameCate, setNameCate] = useState('')
    const [product, setProduct] = useState('')

    const getProduct = async () => {
        try {
            const product = await firestore.collection('products')
                .where('id', '==', localStorage.id)
                .get()
            if (product.size > 0) {
                product.forEach(doc => {
                    setProduct(doc.data())
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    const getNameCate = async () => {
        try {
            const result = await firestore.collection('categories')
                .where('key', '==', localStorage.cate)
                .get()
            if (result.size > 0) {
                result.forEach(doc => {
                    setNameCate(doc.data().name)
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getProduct()
    }, [localStorage.id])

    useEffect(() => {
        getNameCate()
    }, [localStorage.cate])

    return (
        <div>
            <Header/>
            <Breadcrumbs aria-label="breadcrumb" className={classes.path}>
                <Link color="inherit" className={classes.link} onClick={() => history.push('/')}>
                    Trang chủ
                </Link>
                <Link className={classes.link} color="inherit">
                    {product.cate}
                </Link>
                <Typography style={{color: '#245a46'}}>{product.name}</Typography>
            </Breadcrumbs>
            <section className={classes.box}>
                <Grid container sm={12} className={classes.container}>
                    <Grid item sm={5}>
                        <ImageDetails/>
                    </Grid>
                    <Grid item sm={7}>
                        <ContentDetails product={product}/>
                    </Grid>
                </Grid>
            </section>
            <Footer/>
        </div>
    );
}

export default ProductDetails;