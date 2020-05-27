import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import anh1 from '../../../Images/foody-upload-api-foody-ccc-636776178286974695-181112111025.jpg'
import anh2 from '../../../Images/Gio/cccc.jpg'

const useStyles = makeStyles(theme => ({
    container: {
        margin: '0 auto',
    },
    box: {
        height: 300,
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            boxShadow: '0px 5px 4px 0px rgba(0, 0, 0, 0.1)'
        }
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
}))

function IntroduceProduct({img1, img2}) {
    const classes = useStyles();

    return (
        <Grid item container xs={12} sm={12} spacing={2} className={classes.container}>
            <Grid item xs={12} sm={6}>
                <div className={classes.box}>
                    <img className={classes.img} src={img1 ? img1 : anh2}/>
                </div>
            </Grid>
            <Grid item xs={12} sm={6}>
                <div className={classes.box}>
                    <img className={classes.img} src={img2 ? img2 : anh1}/>
                </div>
            </Grid>
        </Grid>
    );
}

export default IntroduceProduct;