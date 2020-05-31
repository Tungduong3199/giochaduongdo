import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    container: {
        width: 1170,
        margin: '10px auto 40px auto',
        [theme.breakpoints.down('sm')]: {
            margin: 'auto'
        }
    },
    text: {
        margin: 'auto'
    },
    p: {
        fontFamily: 'cursive',
        fontSize: 24
    },
    img: {
        float: 'right',
        transition: 'all 1s ease-in-out',
        width: 500,
        height: 500,
        '&:hover': {
            transform: 'scale(1.1,1.1)'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100%'
        }
    }
}))

function DetailsIntroduce({text1, text2, img, sort}) {
    const classes = useStyles();

    if (sort === true) {
        return <Grid container xs={11} className={classes.container}>
            <Grid item xs={12} sm={6} className={classes.text}>
                <Typography className={classes.p} variant={"body1"} gutterBottom>
                    {text1}
                </Typography>
                <Typography className={classes.p} variant={"body1"} gutterBottom>
                    {text2}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <img src={img} className={classes.img}/>
            </Grid>
        </Grid>
    } else {
        return <Grid container xs={11} className={classes.container}>
            <Grid item xs={12} sm={6}>
                <img src={img} className={classes.img} style={{float: 'left'}}/>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.text}>
                <Typography className={classes.p} variant={"body1"} gutterBottom>
                    {text1}
                </Typography>
                <Typography className={classes.p} variant={"body1"} gutterBottom>
                    {text2}
                </Typography>
            </Grid>
        </Grid>
    }
}

export default DetailsIntroduce;