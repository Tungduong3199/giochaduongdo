import React, {useEffect, useState} from 'react';
import Header from "../Home/Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {firestore, storage} from '../../firebaseConfig'
import CurrencyFormat from 'react-currency-format';
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import * as firebase from "firebase";
import Footer from "../Home/Footer/Footer";
import {v4 as uuidv4} from 'uuid';
import Files from "react-butterfiles";

const useStyles = makeStyles((theme) => ({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#245a46',
        color: '#fff'
    },
    price: {
        width: '100%',
        height: 56,
        borderRadius: 5,
        backgroundColor: 'rgb(250, 250, 250)',
        border: '1px solid rgb(192, 192, 192)',
        paddingLeft: 15,
        fontSize: 15
    },
    inputImg: {
        border: '1px solid rgb(192, 192, 192)',
        padding: 10,
        borderRadius: 5,
        position: 'relative',
        paddingLeft: 40,
        backgroundColor: '#d2d2d2',
        cursor: 'pointer'
    },
    iconUpload: {
        position: 'absolute',
        left: 10,
        bottom: 7,
        color: '#245a46'
    },
    iconDelete: {
        position: 'absolute',
        right: 2,
        top: 2,
        cursor: 'pointer',
        backgroundColor: '#245a46',
        color: '#fff',
        borderRadius: 12
    }
}))

function AddProduct(props) {
    const classes = useStyles();
    const [arrCate, setArrCate] = useState([])
    const [cate, setCate] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [descrided, setDescrided] = useState('')
    const [check, setCheck] = useState(false)
    const [open, setOpen] = useState(false)
    const [productAvt, setProductAvt] = useState('')
    const [picture, setPicture] = useState([])

    function handleChangeCategories(e) {
        setCate(e.target.value)
    }

    function handleChangeNameProduct(e) {
        setName(e.target.value)
    }

    function handleChangePrice(e) {
        setPrice(e.target.value)
    }

    function handleChangeDescrided(e) {
        setDescrided(e.target.value)
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

    const creatProduct = (e) => {
        if (name === '' || cate === '') {
            setCheck(true)
            e.preventDefault()
        } else {
            try {
                firestore.collection('products')
                    .add({
                        key: cate,
                        name: name,
                        price: price,
                        descrided: descrided,
                        picture: picture,
                        productAvt: productAvt,
                        id: uuidv4()
                    })
            } catch (e) {
                console.log(e);
            } finally {
                e.preventDefault()
                setOpen(true)
                setPrice('')
                setName('')
                setDescrided('')
                setPicture([])
                setProductAvt('')
            }
        }
    }

    const onDrop = (e) => {
        let data = []
        e.forEach(doc => {
                const uploadTask = storage.ref().child('images/' + doc.src.file.name).put(doc.src.file);
                uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
                    function (snapshot) {
                        console.log(snapshot)
                        switch (snapshot.state) {
                            case firebase.storage.TaskState.PAUSED:
                                break;
                            case firebase.storage.TaskState.RUNNING:
                                break;
                        }
                    }, function (error) {
                        switch (error.code) {
                            case 'storage/unauthorized':
                                break;

                            case 'storage/canceled':
                                break;

                            case 'storage/unknown':
                                break;
                        }
                    }, function () {
                        uploadTask.snapshot.ref.getDownloadURL().then(function (photoURL) {
                            data.push(photoURL)
                            setPicture([...data])
                        });
                    })
            }
        )
    }

    const addProductAvatar = (event) => {
        let file = event.target.files[0]
        const uploadTask = storage.ref().child('images/' + file.name).put(file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            function (snapshot) {
                const progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100) + 1;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED:
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING:
                        console.log('Upload is running');
                        break;
                }
            }, function (error) {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;

                    case 'storage/canceled':
                        break;

                    case 'storage/unknown':
                        break;
                }
            }, function () {
                uploadTask.snapshot.ref.getDownloadURL().then(function (photoURL) {
                    console.log('File available at', photoURL);
                    setProductAvt(photoURL)
                });
            });
    }

    useEffect(() => {
        getCate()
    }, [])

    return (
        <div>
            <Header/>
            <div style={{paddingTop: 50}}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <div className={classes.paper}>
                        <Typography align={'center'} component="h1" variant="h5">
                            Thêm Sản Phẩm
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormControl className={classes.formControl}
                                                 error={check === true && cate === '' ? true : false}>
                                        <InputLabel id="demo-simple-select-label">Danh mục</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            onChange={handleChangeCategories}
                                        >
                                            {
                                                arrCate.map(value =>
                                                    <MenuItem value={value.key}>{value.name}</MenuItem>
                                                )
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        error={check === true && name === '' ? true : false}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        value={name}
                                        label="Tên sản phẩm"
                                        autoComplete="name product"
                                        onChange={handleChangeNameProduct}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CurrencyFormat placeholder={"Giá sản phẩm"} value={price}
                                                    className={classes.price}
                                                    onChange={handleChangePrice}
                                                    thousandSeparator={true} suffix={' đ'}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        variant="outlined"
                                        fullWidth
                                        label="Mô tả"
                                        onChange={handleChangeDescrided}
                                        value={descrided}
                                    />
                                </Grid>
                                <Grid item xs={12} style={{marginTop: 10}}>
                                    <input style={{display: 'none'}} id="img" type="file"
                                           onChange={addProductAvatar}/>
                                    <label htmlFor="img" className={classes.inputImg}>
                                        <CloudUploadIcon className={classes.iconUpload}/> Thêm ảnh đại diện sản phẩm
                                    </label>
                                </Grid>
                                <Grid item xs={12}>
                                    {productAvt
                                        ? <img src={productAvt} width={100} height={100}/>
                                        : null
                                    }
                                </Grid>
                                <Grid item xs={12}>
                                    <Files
                                        multiple={true}
                                        accept={["application/pdf", "image/jpg", "image/jpeg", "image/png"]}
                                        onSuccess={onDrop}
                                        // onError={errors => this.setState({ errors })}
                                    >
                                        {({browseFiles}) => (
                                            <>
                                                <button onClick={(e) => {
                                                    e.preventDefault()
                                                    browseFiles()
                                                }}>Upload PDF
                                                </button>
                                                <ol>
                                                    {picture.map(file => (
                                                        <img src={file}/>
                                                    ))}
                                                    {/*{this.state.errors.map(error => (*/}
                                                    {/*    <li key={error.file.name}>*/}
                                                    {/*        {error.file.name} - {error.type}*/}
                                                    {/*    </li>*/}
                                                    {/*))}*/}
                                                </ol>
                                            </>
                                        )}
                                    </Files>
                                    {/*<ImageUploader*/}
                                    {/*    withIcon={true}*/}
                                    {/*    buttonText='Chọn ảnh'*/}
                                    {/*    onChange={onDrop}*/}
                                    {/*    label={'Thêm ảnh chi tiết'}*/}
                                    {/*    imgExtension={['.jpg', '.gif', '.png', '.gif','jpeg']}*/}
                                    {/*    maxFileSize={5242880}*/}
                                    {/*    withPreview={true}*/}
                                    {/*/>*/}
                                </Grid>
                                <Grid item xs={12}
                                      style={{
                                          display: check ? 'block' : 'none',
                                          color: 'red'
                                      }}
                                >
                                    Bạn cần phải điền đầy đủ thông tin !
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                                onClick={creatProduct}
                            >
                                Thêm sản phẩm
                            </Button>
                        </form>
                    </div>
                </Container>
            </div>
            <div>
                <Footer/>
            </div>
            <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} variant="filled" severity="success">
                    Thêm sản phẩm thành công !
                </Alert>
            </Snackbar>
        </div>
    );
}

export default AddProduct;