import React, {useEffect, useState} from 'react';
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import {firestore} from "../../firebaseConfig";
import ProductDetails from "../Home/Content/ProductDetails";
import AlertDialog from "./AlertDialog";

const useStyles = makeStyles((theme) => ({
    content: {
        width: 1170,
        margin: '40px auto 100px auto'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}))

function FixProduct(props) {
    const classes = useStyles();
    const [cate, setCate] = useState('')
    const [open, setOpen] = useState(false)
    const [arrCate, setArrCate] = useState([])
    const [codeProduct, setCodeProduct] = useState('')
    const [product, setProduct] = useState([])
    const [fix, setFix] = useState('')

    function handleChangeCategories(e) {
        setCate(e.target.value)
    }

    const handleChangeProductCode = (e) => {
        setCodeProduct(e.target.value)
    }

    const handleClick = (value) => {
        setOpen(true)
        setFix(value)
    }


    const getCate = async () => {
        try {
            let data = []
            const result = await firestore
                .collection('categories')
                .get()
            if (result) {
                result.forEach(doc =>
                    data.push(doc.data())
                )
            }
            setArrCate([...data])
        } catch (e) {
            console.log(e);
        }
    }

    const getProduct = async () => {
        try {
            let data = []
            const result = await firestore.collection('products')
                .where('cate', '==', cate)
                .get()
            if (result) {
                result.forEach(doc => {
                    data.push(doc.data())
                    console.log(data);
                })
            }
            setProduct([...data])

        } catch (e) {
            console.log(e);
        }
    }

    const fixProduct = () => {

    }

    useEffect(() => {
        getCate()
    }, [])

    useEffect(() => {
        getProduct()
    }, [cate])

    return (
        <div>
            <Header/>
            <Grid container className={classes.content}>
                <Grid item sm={4}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline/>
                        <div className={classes.paper}>
                            <Typography align={'center'} component="h1" variant="h5">
                                Chỉnh sửa Sản Phẩm
                            </Typography>
                            <form className={classes.form} noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel id="demo-simple-select-label">Danh mục</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                onChange={handleChangeCategories}
                                            >
                                                {
                                                    arrCate.map(value =>
                                                        <MenuItem value={value.name}>{value.name}</MenuItem>
                                                    )
                                                }
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            value={codeProduct}
                                            label="Mã sản phẩm"
                                            autoComplete="name product"
                                            onChange={handleChangeProductCode}
                                        />
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Container>
                </Grid>
                <Grid item container sm={8}>
                    {product.map(value => <Grid item sm={3} onClick={() => handleClick(value)}><ProductDetails
                        id={value.id} cate={value.cate}
                        price={value.price}
                        name={value.name}
                        img={value.productAvt}/></Grid>
                    )}
                </Grid>
            </Grid>
            <div style={product.length < 5 ? {position: 'absolute', bottom: 0, width: '100%'} : null}>
                <Footer/>
            </div>
            <AlertDialog open={open} setOpen={setOpen} data={fix} picture={fix.picture}/>
        </div>
    );
}

export default FixProduct;