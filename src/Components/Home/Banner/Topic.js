import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {ArrowRight, PlayCircleOutline} from "@material-ui/icons";
import TopicDetails from "./TopicDetails";
import {firestore} from '../../../firebaseConfig'
import {PropagateLoader} from "react-spinners";
import Typography from "@material-ui/core/Typography";
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #e0e0e0',
        boxShadow: '0px 5px 4px 0px rgba(0, 0, 0, 0.1)',
        float: 'right',
        marginRight: 30
    },
    topic: {
        backgroundColor: '#245a46',
        width: '85%',
        float: 'right',
        marginRight: 30,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        position: 'relative',
    },
    iconArrow: {
        float: 'right',
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
    ul: {
        width: '80%',
        boxShadow: '20px 25px 10px -20px rgba(0, 0, 0, 0.1)',
        float: 'right',
        marginRight: 30,
        marginTop: 0,
        position: 'relative'
    },
    li: {
        listStyle: 'none',
        border: '1px solid #e0e0e0',
        padding: '15px 0 15px 15px',
        fontSize: 17,
        fontWeight: 500,
        color: '#404040',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        backgroundColor: '#fff',
        '&:hover': {
            backgroundColor: '#f0f0f0'
        },
        '&:hover > ul': {
            visibility: 'visible',
            opacity: 1,
        }
    },
    ulCon: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        left: '100%',
        width: '100%',
        top: 0,
        visibility: 'hidden',
        opacity: 0,
        transition: 'all 0.1s ease-in-out',
        zIndex: 999,
        backgroundColor: '#fff',
        margin: '0 auto'
    },
    liCon: {
        listStyle: 'none',
        marginLeft: -39,
        marginRight: 50
    },
    load: {
        display: 'block',
        margin: 'auto'
    },
    text: {
        margin: 'auto',
        justify: 'center',
        color: '#fff'
    }
}));

const load = {
    display: 'block',
    margin: 'auto'
}


export default function Topic({arr}) {
    const classes = useStyles();
    const history = useHistory()
    const [cate, setCate] = useState('')
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const handleClick = (value) => {
        localStorage.cate = value.key
        localStorage.name = value.name
        history.push(`/product/${localStorage.cate}/${localStorage.name}`)
    }

    const getDataTopic = async () => {
        setLoading(true)
        try {
            let data = []
            const result = await firestore.collection('products')
                .where('key', '==', cate)
                .get()
            if (result) {
                result.forEach(doc => {
                    if (data.length <= 8) {
                        data.push(doc.data())
                    } else {
                        return null
                    }
                })
            }
            setProduct([...data])
            setLoading(false)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getDataTopic()
    }, [cate])

    return (
        <div style={{margin: '0 15px 0 -12px'}}>
            <div className={classes.topic}>
                <PlayCircleOutline/> <span style={{marginLeft: 10}}>Danh Mục Sản Phẩm</span>
                <div className={classes.before}></div>
            </div>
            <ul className={classes.ul}>
                {arr.map(value => (
                    <li onMouseOver={() => setCate(value.key)} className={classes.li}>{value.name}<ArrowRight
                        className={classes.iconArrow}/>
                        <ul className={classes.ulCon}
                            style={{
                                paddingBottom: 15,
                                height: 620,
                                flexWrap: 'wrap',
                                width: 850,
                                backgroundColor: '#245a46'
                            }}>
                            {loading
                                ? <PropagateLoader css={load} type={"bars"} color={'#ffffff'}/>
                                : product.length === 0
                                    ? <Typography variant={"h5"} gutterBottom className={classes.text}>Không có sản phẩm
                                        nào !</Typography>
                                    : product.map(value1 =>
                                        <li className={classes.liCon} onClick={() => handleClick(value1)}
                                            style={{margin: '17px 15px 0 -7px'}}><TopicDetails
                                            name={value1.name} price={value1.price} img={value1.productAvt}/></li>
                                    )
                            }
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}