import React from 'react';
import Grid from "@material-ui/core/Grid";
import ProductDetails from "./ProductDetails";
import IntroduceProduct from "./IntroduceProduct";
import {makeStyles} from "@material-ui/core/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useHistory} from 'react-router-dom'
import {AddShoppingCart, Search} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 10,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 520
        }
    },
    topic: {
        backgroundColor: '#245a46',
        width: '12%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
        }
    },
    before: {
        position: 'absolute',
        borderBottom: '15px solid transparent',
        borderLeft: '15px solid transparent',
        borderTop: '15px solid #5d8801',
        top: '100%',
        zIndex: 999,
        left: 0
    },
    box: {
        marginLeft: 15,
        boxShadow: '5px 7px 14px -7px #888888',
        backgroundColor: '#245a46',
        width: 1179,
        height: 600,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    qc: {
        overflow: 'hidden',
        height: 600,
        [theme.breakpoints.down('sm')]: {
            height: 470
        }
    },
    imgQc: {
        height: '100%',
        width: '100%',
        transition: 'all 1s ease-in-out',
        '&:hover': {
            transform: 'scale(1.1,1.1)'
        },
        [theme.breakpoints.down('sm')]: {
            height: 470
        }
    },
    product: {
        height: 615,
        backgroundColor: '#245a46'
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
    },
    icon: {
        width: 30,
        height: 30,
        color: '#fff',
        backgroundColor: '#245a46',
        borderRadius: 30,
        padding: 8,
    },
    containerIcon: {
        position: 'absolute',
        zIndex: 10,
        transform: 'translateY(80px) translateX(43px)',
        opacity: 0,
        visibility: 'hidden',
        transition: 'all 0.3s ease-in-out',
        height: 46,
        cursor: 'pointer'
    },
    product1: {
        '&:hover > div': {
            visibility: 'visible',
            opacity: 1
        }
    }
}))

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 4,
        partialVisibilityGutter: 40
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1,
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

function ListProductDetails({data, cate, img, img1, img2}) {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = (name, id) => {
        localStorage.clear()
        localStorage.cate = cate
        localStorage.id = id
        history.push(`/product/${localStorage.cate}/${name}`)
    }

    const handleSearch = () => {

    }

    const handleCart = () => {

    }

    return (
        <Grid container xs={12} sm={12} className={classes.container}>
            <Grid item xs={5} sm={2} className={classes.topic}>
                <span>{cate}</span>
                <div className={classes.before}></div>
            </Grid>
            <Grid item container xs={12} sm={12} className={classes.box}>
                <Grid item xs={12} sm={4} className={classes.qc}>
                    <img className={classes.imgQc}
                         src={img
                             ? img
                             : 'http://demo.posthemes.com/pos_greenfarm/layout4/modules/poslistcateproduct/images/728560923e4c0f26b2635b2add8e0b9cdf562c50_listcate1.jpg'}/>
                </Grid>
                <Grid item container xs={12} sm={8} className={classes.product}>
                    <Grid item xs={11} sm={12} style={data.length === 0 ? {height: 300} : {margin: 'auto'}}>
                        <Carousel
                            additionalTransfrom={0}
                            arrows={data.length > 4 || window.screen.width < 500 ? true : false}
                            autoPlaySpeed={3000}
                            containerClass="container-with-dots"
                            draggable
                            infinite
                            keyBoardControl
                            minimumTouchDrag={80}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={responsive}
                            slidesToSlide={1}
                            swipeable
                        >
                            {data.map(value =>
                                <div className={classes.product1}>
                                    <div className={classes.containerIcon}>
                                        <Search onClick={handleSearch} className={classes.icon}
                                                style={{marginRight: 5}}/>
                                        <AddShoppingCart onClick={handleCart} className={classes.icon}
                                                         style={{marginLeft: 5}}/>
                                    </div>
                                    <div onClick={() => handleClick(value.name, value.id)}>
                                        <ProductDetails data={value}/>
                                    </div>
                                </div>
                            )}
                        </Carousel>
                    </Grid>
                    <Grid item container xs={12} sm={12}>
                        <IntroduceProduct img1={img1} img2={img2}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ListProductDetails;