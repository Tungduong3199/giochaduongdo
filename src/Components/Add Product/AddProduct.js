import React from 'react';
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    }
})

function AddProduct(props) {
    const classes = useStyles();
    return (
        <div>
            <Header/>
            <div style={{backgroundColor: '#f5f5f5'}}>
                {/*<Container component="main" maxWidth="xs">*/}
                {/*    <CssBaseline/>*/}
                {/*    <div className={classes.paper}>*/}
                {/*        <Avatar className={classes.avatar}>*/}
                {/*            <LockOutlinedIcon/>*/}
                {/*        </Avatar>*/}
                {/*        <Typography component="h1" variant="h5">*/}
                {/*            Đăng Ký*/}
                {/*        </Typography>*/}
                {/*        <form className={classes.form} noValidate>*/}
                {/*            <Grid container spacing={2}>*/}
                {/*                <Grid item xs={12}>*/}
                {/*                    <TextField*/}
                {/*                        error={check === true && address === '' ? true : false}*/}
                {/*                        variant="outlined"*/}
                {/*                        required*/}
                {/*                        fullWidth*/}
                {/*                        label="Tên sản phẩm"*/}
                {/*                        autoComplete="name product"*/}
                {/*                        onChange={handleChangeNameProduct}*/}
                {/*                    />*/}
                {/*                </Grid>*/}
                {/*                <Grid item xs={12}>*/}
                {/*                    <TextField*/}
                {/*                        error={check === true && phoneNumber === '' ? true : false}*/}
                {/*                        variant="outlined"*/}
                {/*                        required*/}
                {/*                        fullWidth*/}
                {/*                        type={'number'}*/}
                {/*                        label="Tên sản phẩm"*/}
                {/*                        autoComplete="name product"*/}
                {/*                        onChange={handleChangeNameProduct}*/}
                {/*                    />*/}
                {/*                </Grid>*/}
                {/*                <Grid item xs={12}>*/}
                {/*                    <TextField*/}
                {/*                        variant="outlined"*/}
                {/*                        required*/}
                {/*                        error={check === true && email === '' ? true : false}*/}
                {/*                        fullWidth*/}
                {/*                        id="email"*/}
                {/*                        label="Email"*/}
                {/*                        name="email"*/}
                {/*                        autoComplete="email"*/}
                {/*                        onChange={handleChangeEmail}*/}
                {/*                    />*/}
                {/*                </Grid>*/}
                {/*                <Grid item xs={12}>*/}
                {/*                    <TextField*/}
                {/*                        variant="outlined"*/}
                {/*                        required*/}
                {/*                        fullWidth*/}
                {/*                        error={check === true && password === '' ? true : false}*/}
                {/*                        name="password"*/}
                {/*                        label="Mật Khẩu"*/}
                {/*                        type="password"*/}
                {/*                        id="password"*/}
                {/*                        autoComplete="current-password"*/}
                {/*                        onChange={handleChangePassword}*/}
                {/*                    />*/}
                {/*                </Grid>*/}
                {/*                <Grid item xs={12}*/}
                {/*                      style={{display: check ? 'block' : 'none'}}*/}
                {/*                      className={classes.error}*/}
                {/*                      justify={"flex-end"}>*/}
                {/*                    Bạn cần phải điền đầy đủ thông tin !*/}
                {/*                </Grid>*/}
                {/*            </Grid>*/}
                {/*            <Button*/}
                {/*                type="submit"*/}
                {/*                fullWidth*/}
                {/*                variant="contained"*/}
                {/*                className={classes.submit}*/}
                {/*                onClick={createAcc}*/}
                {/*            >*/}
                {/*                Đăng Ký*/}
                {/*            </Button>*/}
                {/*        </form>*/}
                {/*    </div>*/}
                {/*</Container>*/}
            </div>
            <div className={classes.footer}>
                <Footer/>
            </div>
        </div>
    );
}

export default AddProduct;