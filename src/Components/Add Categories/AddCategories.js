import React, {useEffect, useState} from 'react';
import Header from "../Home/Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useHistory} from 'react-router-dom'
import {firestore} from '../../firebaseConfig'
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Chip from "@material-ui/core/Chip";
import TopicCate from "./TopicCate";
import Footer from "../Home/Footer/Footer";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 50,
        width: 1170,
        margin: '0 auto',
        paddingBottom: 70
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    footer: {
        [theme.breakpoints.up('xl')]:{
            position: 'absolute',
            bottom: 0,
            width: '100%',
        }
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
}))

function AddCategories(props) {
    const classes = useStyles();
    const history = useHistory();
    const [cate, setCate] = useState('')
    const [check, setCheck] = useState(false)
    const [open, setOpen] = useState(false)
    const [arr, setArr] = useState([])
    const [getData, setGetData] = useState(false)

    function to_slug(str) {
        str = str.toLowerCase();
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
        str = str.replace(/([^0-9a-z-\s])/g, '');
        str = str.replace(/(\s+)/g, '-');
        str = str.replace(/^-+/g, '');
        str = str.replace(/-+$/g, '');
        return str;
    }

    function handleChangeCate(e) {
        setCate(e.target.value)
    }

    const handleUpdate = (e) => {
        try {
            firestore.collection('categories')
                .doc(`${arr.length + 1}`)
                .set({
                    key: to_slug(cate),
                    name: cate
                })
        } catch (e) {
            console.log(e);
        } finally {
            setOpen(true)
            setCate('')
            setGetData(!getData)
            e.preventDefault()
        }
    }

    function handleShowError(e) {
        e.preventDefault()
        setCheck(true)
    }

    function handleDelete() {

    }

    const getCategories = async () => {
        try {
            let data = []
            await firestore.collection('categories')
                .get()
                .then((querySnapshot) =>
                    querySnapshot.forEach((doc) => {
                        data.push(doc.data())
                    }))
            setArr([...data])
        } catch (e) {
            console.log(e.message());
        }
    }

    useEffect(() => {
        getCategories()
    }, [getData])

    return (
        <div>
            <Header/>
            <Grid container sm={12} className={classes.container}>
                <Grid item sm={4}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline/>
                        <div className={classes.paper}>
                            <div>
                                {arr.map(value => (
                                    <Chip label={value.name} onDelete={handleDelete}/>
                                ))}
                            </div>
                            <Typography component="h1" variant="h5" style={{marginBottom: 20}}>
                                Thêm Danh Mục
                            </Typography>
                            <form className={classes.form} noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            error={check === true && cate === '' ? true : false}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            value={cate}
                                            label="Tên danh mục"
                                            autoComplete="name product"
                                            onChange={handleChangeCate}
                                        />
                                    </Grid>
                                    <Grid item xs={12}
                                          style={{display: check ? 'block' : 'none', color: 'red'}}
                                          className={classes.error}
                                          justify={"flex-end"}>
                                        Bạn cần phải điền đầy đủ thông tin !
                                    </Grid>
                                    <Grid item xs>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            className={classes.submit}
                                            onClick={cate
                                                ? handleUpdate
                                                : handleShowError}
                                            style={{margin: 'auto', display: 'block'}}
                                        >
                                            Thêm
                                        </Button>
                                    </Grid>
                                    <Grid item xs>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            className={classes.submit}
                                            style={{margin: 'auto', display: 'block'}}
                                            onClick={() => history.push('/')}
                                        >
                                            Thoát
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Container>
                </Grid>
                <Grid item sm={8}>
                    <Typography variant={'h5'} align={'center'} gutterBottom>Danh Mục Hiện Tại</Typography>
                    <div style={{width: '100%', height: '100%', borderRadius: 10, backgroundColor: '#fff'}}>
                        <div style={{width: 300, margin: '0 auto', marginTop: 20, paddingTop: 30}}>
                            <TopicCate arr={arr}/>
                        </div>
                    </div>
                </Grid>

                <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
                    <Alert onClose={() => setOpen(false)} severity="success">
                        Thêm danh mục thành công !
                    </Alert>
                </Snackbar>

            </Grid>
            <div className={classes.footer}>
                <Footer/>
            </div>
        </div>
    );
}

export default AddCategories;