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
import {HighlightOffTwoTone} from "@material-ui/icons";
import {PropagateLoader} from "react-spinners";

const useStyles = makeStyles((theme) => ({
    content: {
        width: 1170,
        margin: '40px auto 100px auto'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    boxProduct: {
        position: 'relative'
    },
    icon: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 40,
        height: 40,
        cursor: 'pointer',
        color: '#245a46'
    },
    text: {
        color: '#245a46',
        textAlign: 'center',
        margin: 'auto'
    }
}))

const load = {
    display: 'block',
    margin: 'auto'
}

function FixProduct(props) {
    const classes = useStyles();
    const [cate, setCate] = useState('');
    const [open, setOpen] = useState(false);
    const [arrCate, setArrCate] = useState([]);
    const [codeProduct, setCodeProduct] = useState('');
    const [product, setProduct] = useState([]);
    const [data, setData] = useState('');
    const [reload, setReload] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleChangeCategories(e) {
        setCate(e.target.value)
    }

    const handleChangeProductCode = (e) => {
        setCodeProduct(e.target.value)
    };

    const getCate = async () => {
        try {
            let data = []
            const result = await firestore
                .collection('categories')
                .get();
            if (result) {
                result.forEach(doc =>
                    data.push(doc.data())
                )
            }
            setArrCate([...data])
        } catch (e) {
            console.log(e);
        }
    };

    const getProduct = async () => {
        try {
            setLoading(true);
            let data = [];
            const result = await firestore.collection('products')
                .where('cate', '==', cate)
                .get();
            if (result) {
                result.forEach(doc => {
                    data.push({...doc.data(), doc: doc.id})
                })
            }
            setProduct([...data]);
            setLoading(false)
        } catch (e) {
            console.log(e);
        }
    };

    const handleDelete = (value) => {
        try {
            firestore.collection('products')
                .doc(value.doc)
                .delete()
                .then(() => {
                    setReload(!reload)
                })
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getCate()
    }, []);

    useEffect(() => {
        getProduct()
    }, [cate, reload]);

    return (
        <div>
            <Header/>
            <Grid container className={classes.content}>
                <Grid item sm={4}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline/>
                        <div className={classes.paper}>
                            <Typography align={'center'} component="h1" variant="h5">
                                Chọn Sản Phẩm
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
                    {cate === ''
                        ? <Typography variant={"h5"} gutterBottom className={classes.text}>
                            Hãy chọn danh mục !
                        </Typography>
                        : product.length === 0
                            ? loading === true ? <PropagateLoader css={load} type={"bars"} color={'#245a46'}/>
                                : <Typography variant={"h5"} gutterBottom className={classes.text}>
                                    Không có sản phẩm nào !
                                </Typography>
                            : loading === true ? <PropagateLoader css={load} type={"bars"} color={'#245a46'}/>
                                : product.map(value =>
                                    <Grid item sm={3} className={classes.boxProduct}>
                                        <ProductDetails
                                            data={value}
                                            alert={true}
                                            setData={setData}
                                            setOpen={setOpen}
                                        />
                                        <HighlightOffTwoTone onClick={() => handleDelete(value)}
                                                             className={classes.icon}/>
                                    </Grid>
                                )}
                </Grid>
            </Grid>
            <div style={product.length < 5 ? {position: 'absolute', bottom: 0, width: '100%'} : null}>
                <Footer/>
            </div>
            <AlertDialog priceProduct={data.price} open={open} setOpen={setOpen} data={data} cate={arrCate}
                         reload={reload} setReload={setReload}/>
        </div>
    );
}

export default FixProduct;