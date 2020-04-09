import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {auth, firestore} from '../../firebaseConfig'
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
}));

export default function SignUp({setShow}) {
    const classes = useStyles();
    const history = useHistory();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [check, setCheck] = useState(false)

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

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    function handleChangeAddress(e) {
        setAddress(e.target.value)
    }

    function createAcc(e) {
        if (firstName === '' || lastName === '' || address === '' || email === '' || password === '') {
            setCheck(true)
            e.preventDefault()
            console.log(e.target.value, 'aaaaaa')
        } else {
            const result = auth.createUserWithEmailAndPassword(email, password)
            if (result) {
                firestore.collection('user')
                    .add({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        address: address,
                        phoneNumber: phoneNumber,
                        displayName: firstName + ' ' + lastName
                    })
                    .catch((e)=>{
                        console.log(e);
                    })
                history.push('/')
            }
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Đăng Ký
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={check === true && firstName === '' ? true : false}
                                autoComplete="fname"
                                variant="outlined"
                                required
                                fullWidth
                                label="Họ"
                                autoFocus
                                onChange={handleChangeFName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                error={check === true && lastName === '' ? true : false}
                                required
                                fullWidth
                                id="lastName"
                                label="Tên"
                                name="lastName"
                                autoComplete="lname"
                                onChange={handleChangeLName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={check === true && address === '' ? true : false}
                                variant="outlined"
                                required
                                fullWidth
                                label="Địa Chỉ"
                                autoComplete="address"
                                onChange={handleChangeAddress}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={check === true && phoneNumber === '' ? true : false}
                                variant="outlined"
                                required
                                fullWidth
                                type={'number'}
                                label="Số Điện Thoại"
                                autoComplete="phone number"
                                onChange={handleChangePhoneNumber}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                error={check === true && email === '' ? true : false}
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                onChange={handleChangeEmail}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                error={check === true && password === '' ? true : false}
                                name="password"
                                label="Mật Khẩu"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChangePassword}
                            />
                        </Grid>
                        <Grid item xs={12}
                              style={{display: check ? 'block' : 'none'}}
                              className={classes.error}
                              justify={"flex-end"}>
                            Bạn cần phải điền đầy đủ thông tin !
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                        onClick={createAcc}
                    >
                        Đăng Ký
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            Đã có tài khoản?
                            <Link onClick={() => setShow(false)} href="#" variant="body2">
                                {' Đăng nhập'}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}