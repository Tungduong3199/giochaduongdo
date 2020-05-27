import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import NumberFormat from 'react-number-format';
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CircularProgress from "@material-ui/core/CircularProgress";
import Files from "react-butterfiles";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {firestore, storage} from '../../firebaseConfig'
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import {v4 as uuidv4} from "uuid";
import * as firebase from "firebase";

const useStyles = makeStyles(theme => ({
    price: {
        width: '100%',
        height: 56,
        borderRadius: 5,
        backgroundColor: 'rgb(250, 250, 250)',
        border: '1px solid rgb(192, 192, 192)',
        paddingLeft: 15,
        fontSize: 15
    },
    imgDetails: {
        width: 200,
        height: 200,
        margin: 'auto',
        padding: 10
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
    },
    addDetails: {
        border: '1px solid rgb(192, 192, 192)',
        paddingLeft: 40,
        backgroundColor: '#d2d2d2',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    iconLoad: {
        color: '#245a46',
        margin: 'auto',
        marginTop: 40
    }
}))

export default function AlertDialog({open, setOpen, data, cate, reload, setReload, priceProduct}) {

    const classes = useStyles();
    const [name, setName] = useState('');
    const [price, setPrice] = useState(priceProduct);
    const [descrided, setDescrided] = useState('');
    const [codeProduct, setCodeProduct] = useState('');
    const [categories, setCategories] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadingAvt, setLoadingAvt] = useState(false);
    const [productAvt, setProductAvt] = useState('');
    const [picture, setPicture] = useState([]);
    const [openSnackBar, setOpenSnackBar] = useState(false)

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeNameProduct = (e) => {
        setName(e.target.value)
    };

    const handleChangeDescrided = (e) => {
        setDescrided(e.target.value)
    };

    const handleChangeCategories = e => {
        setCategories(e.target.value)
    };

    const handleChangeCodeProduct = e => {
        setCodeProduct(e.target.value)
    };

    const handleChangeProduct = async () => {
        try {
            await firestore.collection('products')
                .doc(data.doc)
                .set({
                    cate: categories,
                    name: name,
                    codeProduct: codeProduct,
                    price: price,
                    descrided: descrided,
                    picture: picture,
                    productAvt: productAvt,
                }, {merge: true})
        } catch (e) {
            console.log(e);
        } finally {
            setOpen(false)
            setOpenSnackBar(true)
            setReload(!reload)
        }
    }

    const onDrop = (e) => {
        setLoading(true)
        let data = []
        e.forEach(doc => {
                const uploadTask = storage.ref().child('images/' + doc.src.file.name + uuidv4()).put(doc.src.file);
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
                            setLoading(false)
                        });
                    })
            }
        )
    }

    const addProductAvatar = (event) => {
        setLoadingAvt(true)
        let file = event.target.files[0]
        const uploadTask = storage.ref().child('images/' + file.name + uuidv4()).put(file);
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
                    setLoadingAvt(false)
                });
            });
    }

    useEffect(() => {
        setCategories(data.cate)
        setCodeProduct(data.codeProduct)
        setName(data.name)
        setPicture(data.picture)
        setProductAvt(data.productAvt)
        setDescrided(data.descrided)
        setPrice(data.price)
    }, [data])

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Typography align={'center'} component="h1" variant="h5">
                        Chỉnh Sửa Sản Phẩm
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Danh mục</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        defaultValue={data.cate}
                                        onChange={handleChangeCategories}
                                    >
                                        {
                                            cate.map(value =>
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
                                    defaultValue={data.codeProduct}
                                    label="Mã sản phẩm"
                                    autoComplete="name product"
                                    onChange={handleChangeCodeProduct}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    defaultValue={data.name}
                                    label="Tên sản phẩm"
                                    autoComplete="name product"
                                    onChange={handleChangeNameProduct}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <NumberFormat placeholder={'Giá sản phẩm'} className={classes.price} value={price}
                                              displayType={'input'} onChange={(e) => setPrice(e.target.value)}
                                              thousandSeparator={true} suffix={' đ'}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    defaultValue={data.descrided}
                                    label="Mô tả"
                                    autoComplete={'descrided'}
                                    onChange={handleChangeDescrided}
                                />
                            </Grid>
                            <Grid item xs={12} style={{marginTop: 10}}>
                                <input style={{display: 'none'}} id="img" type="file"
                                       onChange={addProductAvatar}
                                />
                                <label htmlFor="img" className={classes.inputImg}>
                                    <CloudUploadIcon className={classes.iconUpload}/> Sửa ảnh đại diện sản phẩm
                                </label>
                            </Grid>
                            <Grid item xs={12}>
                                {loadingAvt
                                    ? <CircularProgress style={{color: '#245a46'}}/>
                                    : !productAvt ? null : <img src={productAvt} width={100} height={100}/>
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
                                            <Button className={classes.addDetails} onClick={(e) => {
                                                e.preventDefault()
                                                browseFiles()
                                            }}><CloudUploadIcon className={classes.iconUpload}/>Sửa ảnh Chi tiết
                                            </Button>
                                        </>
                                    )}
                                </Files>
                            </Grid>
                            <Grid item container xs={12}>
                                {picture === undefined
                                    ? null
                                    : loading ? <CircularProgress className={classes.iconLoad}/>
                                        : picture.map(file =>
                                            <Grid item xs={6}>
                                                <img className={classes.imgDetails} src={file}/>
                                            </Grid>)
                                }
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
            <DialogActions>
                <Button onClick={handleChangeProduct} color="primary">
                    Sửa sản phẩm
                </Button>
            </DialogActions>
            <Snackbar open={openSnackBar} autoHideDuration={3000} onClose={() => setOpenSnackBar(false)}>
                <Alert onClose={() => setOpenSnackBar(false)} variant="filled" severity="success">
                    Sửa sản phẩm thành công !
                </Alert>
            </Snackbar>
        </Dialog>
    );
}