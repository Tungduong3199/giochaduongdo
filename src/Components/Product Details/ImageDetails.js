import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {firestore} from '../../firebaseConfig'
import ItemsCarousel from 'react-items-carousel';
import ReactImageMagnify from "react-image-magnify";

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
        height: 575
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

        background: '#EEE',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        '&:hover': {
            border: '3px solid #245a46'
        }
    }
}));

export default function ImageDetails() {
    const classes = useStyles();
    const chevronWidth = 40;
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [picture, setPicture] = useState([])
    const [img, setImg] = useState('')

    const getPicture = async () => {
        try {
            const result = await firestore.collection('products')
                .where('id', '==', localStorage.id)
                .get()
            if (result.size > 0) {
                result.forEach(doc => {
                    setPicture(doc.data().picture)
                    setImg(doc.data().picture[0])
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
                            width: 500,
                            height: 450
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
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={4}
                gutter={20}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
                className={classes.carousel}
            >
                {picture.map(value1 =>
                    <div
                        onClick={() => setImg(value1)}
                        className={classes.imgCarousel}
                        style={{
                            backgroundImage: `url(${value1})`,
                        }}></div>
                )}
            </ItemsCarousel>
        </div>
    );
}