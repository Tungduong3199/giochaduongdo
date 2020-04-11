import React, {useEffect, useState} from 'react';
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {firestore} from '../../firebaseConfig'
import {useGlobal} from 'reactn'
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#245a46',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#245a46',
        color: '#fff'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    }
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Profile(props) {
    const classes = useStyles();
    const history = useHistory();
    const [authUser] = useGlobal('authUser')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [modify, setModify] = useState(true)
    const [open, setOpen] = useState(false)

    function handleChangeFName(e) {
        setFirstName(e.target.value)
    }

    function handleChangeLName(e) {
        setLastName(e.target.value)
    }

    function handleChangePhoneNumber(e) {
        setPhoneNumber(e.target.value)
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }

    function handleChangeAddress(e) {
        setAddress(e.target.value)
    }

    function handleModify(e) {
        e.preventDefault()
        setModify(false)
    }

    function handleUpdate(e) {
        try {
            firestore.collection('user')
                .doc(authUser.email)
                .set({
                    firstName: firstName,
                    lastName: lastName,
                    address: address,
                    phoneNumber: phoneNumber,
                    email: email
                }, {merge: true})
        } catch (e) {
            console.log(e);
        } finally {
            setOpen(true)
            setModify(true)
            e.preventDefault()
        }
    }

    const getDataProfile = async () => {
        try {
            const result = await firestore
                .collection('user')
                .doc(authUser.email)
                .get()
            setAddress(result.data().address)
            setEmail(result.data().email)
            setLastName(result.data().lastName)
            setFirstName(result.data().firstName)
            setPhoneNumber(result.data().phoneNumber)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getDataProfile()
    }, [])

    return (
        <div>
            <Header/>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Thông Tin Tài Khoản
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    disabled={modify}
                                    autoComplete="fname"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Họ"
                                    autoFocus
                                    value={firstName}
                                    onChange={handleChangeFName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    disabled={modify}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Tên"
                                    value={lastName}
                                    onChange={handleChangeLName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    disabled={modify}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Địa Chỉ"
                                    value={address}
                                    autoComplete="address"
                                    onChange={handleChangeAddress}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    disabled={modify}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    type={'number'}
                                    value={phoneNumber}
                                    label="Số Điện Thoại"
                                    autoComplete="phone number"
                                    onChange={handleChangePhoneNumber}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    disabled={modify}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    value={email}
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleChangeEmail}
                                />
                            </Grid>
                            <Grid item xs={7}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    className={classes.submit}
                                    onClick={modify === false
                                        ? handleUpdate
                                        : handleModify}
                                    style={{margin: 'auto', display: 'block'}}
                                >
                                    {
                                        modify
                                            ? "Thay đổi thông tin"
                                            : "Cập Nhật"
                                    }
                                </Button>
                            </Grid>
                            <Grid item xs={5}>
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
            <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity="success">
                    Cập nhật thông tin thành công !
                </Alert>
            </Snackbar>
            <div className={classes.footer}>
                <Footer/>
            </div>
        </div>
    );
}

export default Profile;