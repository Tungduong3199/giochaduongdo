import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import anh1 from '../../../Images/foody-upload-api-foody-ccc-636776178286974695-181112111025.jpg'
import anh2 from '../../../Images/kinh-doanh-gio-cha-1.jpg'

const useStyles = makeStyles({
    container: {
        margin: '0 auto',
    },
    box: {
        height: 300,
        overflow: 'hidden',
    },
    img: {
        width: '100%',
        height: '100%',
        margin: 'auto',
        display: 'block',
        transition: 'all 0.8s ease-in-out',
        '&:hover': {
            transform: 'scale(1.2,1.2)',
        }
    }
})

function IntroduceProduct(props) {
    const classes = useStyles();

    return (
        <Grid container sm={12} spacing={2} className={classes.container}>
            <Grid item sm={6}>
                <div className={classes.box}>
                    <img className={classes.img} src={anh2}/>
                </div>
            </Grid>
            <Grid item sm={6}>
                <div className={classes.box}>
                    <img className={classes.img} src={anh1}/>
                </div>
            </Grid>
        </Grid>
    );
}

export default IntroduceProduct;