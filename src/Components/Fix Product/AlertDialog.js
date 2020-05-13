import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CurrencyFormat from "react-currency-format";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CircularProgress from "@material-ui/core/CircularProgress";
import Files from "react-butterfiles";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
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
    }
})

export default function AlertDialog({open, setOpen, data, picture}) {
    const classes = useStyles()
    const [loading, setLoading] = useState(false)
    const [loadingAvt, setLoadingAvt] = useState(false)
    const handleClose = () => {
        setOpen(false);
    };
    console.log(picture);
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
                        Thêm Sản Phẩm
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            {/*<Grid item xs={12}>*/}
                            {/*    <FormControl className={classes.formControl}>*/}
                            {/*        <InputLabel id="demo-simple-select-label">Danh mục</InputLabel>*/}
                            {/*        <Select*/}
                            {/*            labelId="demo-simple-select-label"*/}
                            {/*            id="demo-simple-select"*/}
                            {/*            // onChange={handleChangeCategories}*/}
                            {/*        >*/}
                            {/*            {*/}
                            {/*                arrCate.map(value =>*/}
                            {/*                    <MenuItem value={value.name}>{value.name}</MenuItem>*/}
                            {/*                )*/}
                            {/*            }*/}
                            {/*        </Select>*/}
                            {/*    </FormControl>*/}
                            {/*</Grid>*/}
                            <Grid item xs={12}>
                                <TextField
                                    // error={check === true && name === '' ? true : false}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    value={data.name}
                                    label="Tên sản phẩm"
                                    autoComplete="name product"
                                    // onChange={handleChangeNameProduct}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CurrencyFormat placeholder={"Giá sản phẩm"}
                                                value={data.price}
                                                className={classes.price}
                                    // onChange={handleChangePrice}
                                                thousandSeparator={true} suffix={' đ'}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-multiline-static"
                                    variant="outlined"
                                    fullWidth
                                    label="Mô tả"
                                    // onChange={handleChangeDescrided}
                                    value={data.descrided}
                                />
                            </Grid>
                            <Grid item xs={12} style={{marginTop: 10}}>
                                <input style={{display: 'none'}} id="img" type="file"
                                    // onChange={addProductAvatar}
                                />
                                <label htmlFor="img" className={classes.inputImg}>
                                    <CloudUploadIcon className={classes.iconUpload}/> Thêm ảnh đại diện sản phẩm
                                </label>
                            </Grid>
                            <Grid item xs={12}>
                                {loadingAvt
                                    ? <CircularProgress style={{color: '#245a46'}}/>
                                    : data.productAvt && <img src={data.productAvt} width={100} height={100}/>
                                }
                            </Grid>
                            <Grid item xs={12}>
                                <Files
                                    multiple={true}
                                    accept={["application/pdf", "image/jpg", "image/jpeg", "image/png"]}
                                    // onSuccess={onDrop}
                                    // onError={errors => this.setState({ errors })}
                                >
                                    {({browseFiles}) => (
                                        <>
                                            <Button className={classes.addDetails} onClick={(e) => {
                                                e.preventDefault()
                                                browseFiles()
                                            }}><CloudUploadIcon className={classes.iconUpload}/>Thêm ảnh Chi tiết
                                            </Button>
                                        </>
                                    )}
                                </Files>
                            </Grid>
                            {/*<div>*/}
                            {/*    {picture.length === 0*/}
                            {/*        ? null*/}
                            {/*        : picture.map(file =>  <img className={classes.imgDetails} src={file}/>)*/}
                            {/*    }*/}
                            {/*</div>*/}
                        </Grid>
                    </form>
                </div>
            </Container>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Sửa sản phẩm
                </Button>
            </DialogActions>
        </Dialog>
    );
}