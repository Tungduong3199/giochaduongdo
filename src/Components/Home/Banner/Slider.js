import React from 'react';
import {Fade} from 'react-slideshow-image';
import anh1 from '../../../Images/13-4.jpg'
import anh2 from '../../../Images/foody-upload-api-foody-ccc-636776178286974695-181112111025.jpg'
import anh3 from '../../../Images/kinh-doanh-gio-cha-1.jpg'
import anh4 from '../../../Images/unnamed.jpg'
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    container: {
        height: 400,
        width: 540,
        [theme.breakpoints.down('sm')]: {
            height: 350
        }
    },
    img: {
        height: 400,
        width: 700,
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('sm')]: {
            height: 350
        }
    },
    image: {
        width: 540,
        height: 400,
        boxShadow: '1px 4px 8px 5px rgba(0, 0, 0, 0.1)',
    }
}))

const slideImages = [
    anh1,
    anh2,
    anh3,
    anh4
];

const properties = {
    duration: 2000,
    transitionDuration: 1000,
    infinite: true,
    indicators: false,
    pauseOnHover: true,
    arrows: false,
}

const Slider = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} className={classes.container}>
            <Fade {...properties}>
                <div className="each-slide">
                    <div className={classes.img}>
                        <img src={slideImages[0]} className={classes.image}/>
                    </div>
                </div>
                <div className="each-slide">
                    <div className={classes.img}>
                        <img src={slideImages[1]} className={classes.image}/>
                    </div>
                </div>
                <div className="each-slide">
                    <div className={classes.img}>
                        <img src={slideImages[2]} className={classes.image}/>
                    </div>
                </div>
                <div className="each-slide">
                    <div className={classes.img}>
                        <img src={slideImages[3]} className={classes.image}/>
                    </div>
                </div>
            </Fade>
        </Grid>
    )
}

export default Slider;