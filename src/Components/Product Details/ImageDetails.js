import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {firestore} from '../../firebaseConfig'
import ReactImageMagnify from "react-image-magnify";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        height: 575,
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    tabs: {
        height: 70,
        backgroundColor: '#fff'
    },
    tab: {
        height: 70,
    },
    carousel: {
        height: 45
    },
    imgCarousel: {
        height: 110,
        cursor: 'pointer',
        width: 160,
        margin: 'auto',

        background: '#EEE',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        '&:hover': {
            border: '2px solid #245a46'
        }
    }
}));

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 3,
        partialVisibilityGutter: 40
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 2,
        partialVisibilityGutter: 30
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 2,
        partialVisibilityGutter: 30
    }
}

export default function ImageDetails() {
    const classes = useStyles();
    const [picture, setPicture] = useState([])
    const [img, setImg] = useState('')

    const getPicture = async () => {
        try {
            const result = await firestore.collection('products')
                .where('id', '==', localStorage.id)
                .get()
            if (result.size > 0) {
                result.forEach(doc => {
                    const a = doc.data().picture
                    a.unshift(doc.data().productAvt)
                    setPicture(a)
                    setImg(doc.data().productAvt)
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getPicture()
    }, [localStorage.id])

    return (
        <div className={classes.root}>
            {
                img !== ''
                    ?
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'giò chả',
                            isFluidWidth: false,
                            src: img,
                            width: window.screen.width < 500 ? window.screen.width - 34 : 450,
                            height: 400
                        },
                        largeImage: {
                            src: img,
                            width: 1000,
                            height: 1100
                        },
                        hoverDelayInMs: 0,
                        style: {zIndex: 999, marginBottom: 5}
                    }} />
                    : null
            }
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {picture.map(value1 =>
                    <div
                        onClick={() => setImg(value1)}
                        className={classes.imgCarousel}
                        style={{
                            backgroundImage: `url(${value1})`,
                        }}></div>
                )}
            </Carousel>
        </div>
    );
}