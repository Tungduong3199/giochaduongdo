import React from 'react';
import Grid from "@material-ui/core/Grid";
import ProductDetails from "./ProductDetails";
import IntroduceProduct from "./IntroduceProduct";
import {makeStyles} from "@material-ui/core/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles({
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
        height: 600
    },
    qc: {
        overflow: 'hidden',
        height: 600
    },
    imgQc: {
        height: '100%',
        width: '100%',
        transition: 'all 1s ease-in-out',
        '&:hover': {
            transform: 'scale(1.1,1.1)'
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
    }
})

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

    return (
        <div style={{marginBottom: 40}}>
            <div className={classes.topic}>
                <span>{cate}</span>
                <div className={classes.before}></div>
            </div>
            <Grid container sm={12} className={classes.box}>
                <Grid item sm={4} className={classes.qc}>
                    <img className={classes.imgQc}
                         src={img
                             ? img
                             : 'http://demo.posthemes.com/pos_greenfarm/layout4/modules/poslistcateproduct/images/728560923e4c0f26b2635b2add8e0b9cdf562c50_listcate1.jpg'}/>
                </Grid>
                <Grid item container sm={8} className={classes.product}>
                    <Grid item sm={12}>
                        <Carousel
                            additionalTransfrom={0}
                            arrows={data.length > 4 ? true : false}
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
                                <div onClick={() => handleClick(value.name, value.id)}>
                                    <ProductDetails id={value.id} cate={value.cate} price={value.price}
                                                    name={value.name} img={value.productAvt}/>
                                </div>
                            )}
                        </Carousel>
                    </Grid>
                    <Grid item container sm={12}>
                        <IntroduceProduct img1={img1} img2={img2}/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default ListProductDetails;