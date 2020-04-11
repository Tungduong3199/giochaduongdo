import React from 'react';
import Topic from "./Topic";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Slider from './Slider'
import anh3 from '../../../Images/kinh-doanh-gio-cha-1.jpg'
import anh4 from '../../../Images/unnamed.jpg'
import {DoneOutline, DriveEta, PhoneInTalk} from "@material-ui/icons";

const useStyles = makeStyles({
    container: {
        maxWidth: 1170,
        margin: '0 auto',
        paddingTop: 15,
    },
    img: {
        width: 290,
        height: 190,
        margin: '0 auto',
        display: 'block',
        cursor: 'pointer',
        transition: 'all 0.7s ease-in-out',
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.2,1.2)',
        }
    },
    cheDo: {
        marginTop: 20,
        border: '1px solid #e5e5e5'
    },
    box: {
        textAlign: 'center',
        padding: '15px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        color: '#777777',
        textTransform: 'uppercase',
        fontWeight: 500
    },
    icon: {
        color:'#245a46',
        width: 35,
        height: 35,
        marginRight: 10
    }
})

function Banner(props) {
    const classes = useStyles();

    return (
        <Grid container sm={12} className={classes.container}>
            <Grid item xs={3}>
                <Topic/>
            </Grid>
            <Grid item xs={6}>
                <Slider/>
            </Grid>
            <Grid item container xs={3} style={{height: 400}}>
                <Grid item sm={12} style={{overflow: 'hidden', height: 190}}>
                    <img className={classes.img} src={anh3} alt={'gio cha'}/>
                </Grid>
                <Grid item sm={12} style={{overflow: 'hidden'}}>
                    <img className={classes.img} style={{}} src={anh4}
                         alt={'gio cha'}/>
                </Grid>
            </Grid>
            <Grid item container sm={12} className={classes.cheDo}>
                <Grid item sm={4} className={classes.box}>
                    <DriveEta className={classes.icon}/> <span>Giao Hàng Toàn Miền Bắc</span>
                </Grid>
                <Grid item sm={4} className={classes.box}
                      style={{borderLeft: '1px solid #e5e5e5', borderRight: '1px solid #e5e5e5'}}>
                    <DoneOutline className={classes.icon}/> <span>Cam Kết An Toàn Vệ Sinh Thực Phẩm</span>
                </Grid>
                <Grid item sm={4} className={classes.box}>
                    <PhoneInTalk className={classes.icon}/><span>Hỗ Trợ 24/7</span>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Banner;