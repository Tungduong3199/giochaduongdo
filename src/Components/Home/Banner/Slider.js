import React from 'react';
import {Fade} from 'react-slideshow-image';
import anh1 from '../../../Images/13-4.jpg'
import anh2 from '../../../Images/foody-upload-api-foody-ccc-636776178286974695-181112111025.jpg'
import anh3 from '../../../Images/kinh-doanh-gio-cha-1.jpg'
import anh4 from '../../../Images/unnamed.jpg'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    container:{
        boxShadow: '1px 4px 8px 5px rgba(0, 0, 0, 0.1)',
    },
    img: {
        height: 400,
        width: 700,
        backgroundRepeat: 'no-repeat',
    },
})

const slideImages = [
    anh1,
    anh2,
    anh3,
    anh4
];

const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    pauseOnHover: true,
    arrows: false,
}

const Slider = () => {
    const classes = useStyles();
    return (
        <div className={classes.container} style={{height: 400, width: 540}}>
            <Fade {...properties}>
                <div className="each-slide">
                    <div className={classes.img} >
                        <img src={slideImages[0]} style={{width: 540, height: 400}}/>
                    </div>
                </div>
                <div className="each-slide">
                    <div className={classes.img}>
                        <img src={slideImages[1]} style={{width: 540, height: 400}}/>
                    </div>
                </div>
                <div className="each-slide">
                    <div className={classes.img} >
                        <img src={slideImages[2]} style={{width: 540, height: 400}}/>
                    </div>
                </div>
                <div className="each-slide">
                    <div className={classes.img}>
                        <img src={slideImages[3]} style={{width: 540, height: 400}}/>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Slider;