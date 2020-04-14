import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {ArrowRight, PlayCircleOutline} from "@material-ui/icons";
import TopicDetails from "./TopicDetails";

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
        '&:hover > ul':{
            visibility: 'visible',
            opacity: 1
        }
    },
    ulCon: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        left: '100%',
        width: 800,
        top: 0,
        visibility: 'hidden',
        opacity: 0,
        transition: 'all 0.1s ease-in-out',
        zIndex: 999,
        backgroundColor: '#fff'
    },
    liCon: {
        listStyle: 'none',
        marginLeft: -39,
        marginRight: 50
    }
}));

export default function Topic({arr}) {
    const classes = useStyles();

    return (
        <div style={{margin: '0 15px 0 -12px'}}>
            <div className={classes.topic}>
                <PlayCircleOutline/> <span style={{marginLeft: 10}}>Danh Mục Sản Phẩm</span>
                <div className={classes.before}></div>
            </div>
            <ul className={classes.ul}>
                {arr.map(value => (
                    <li className={classes.li}>{value.name}<ArrowRight className={classes.iconArrow}/>
                        <ul className={classes.ulCon}>
                            <li className={classes.liCon}><TopicDetails/></li>
                            <li className={classes.liCon}><TopicDetails/></li>
                            <li className={classes.liCon}><TopicDetails/></li>
                            <li className={classes.liCon}><TopicDetails/></li>
                        </ul>
                    </li>
                ))}
                {/*<li className={classes.li}>Giò<ArrowRight className={classes.iconArrow}/>*/}
                {/*    <ul className={classes.ulCon}>*/}
                {/*        <li className={classes.liCon}><TopicDetails/></li>*/}
                {/*        <li className={classes.liCon}><TopicDetails/></li>*/}
                {/*        <li className={classes.liCon}><TopicDetails/></li>*/}
                {/*        <li className={classes.liCon}><TopicDetails/></li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li className={classes.li}>Chả<ArrowRight className={classes.iconArrow}/>*/}
                {/*    <ul className={classes.ulCon}*/}
                {/*        style={{height: 550,flexWrap: 'wrap', width: 850, top: 53}}>*/}
                {/*        <li className={classes.liCon} style={{margin: '0 15px 0 -5px'}}><TopicDetails/></li>*/}
                {/*        <li className={classes.liCon} style={{margin: '0 15px 0 -5px'}}><TopicDetails/></li>*/}
                {/*        <li className={classes.liCon} style={{margin: '0 15px 0 -5px'}}><TopicDetails/></li>*/}
                {/*        <li className={classes.liCon} style={{margin: '0 15px 0 -5px'}}><TopicDetails/></li>*/}
                {/*        <li className={classes.liCon} style={{margin: '0 15px 0 -5px'}}><TopicDetails/></li>*/}
                {/*        <li className={classes.liCon} style={{margin: '0 15px 0 -5px'}}><TopicDetails/></li>*/}
                {/*        <li className={classes.liCon} style={{margin: '0 15px 0 -5px'}}><TopicDetails/></li>*/}
                {/*        <li className={classes.liCon} style={{margin: '0 15px 0 -5px'}}><TopicDetails/></li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li className={classes.li}>Bánh Chưng</li>*/}
                {/*<li className={classes.li}>Đồ Khô<ArrowRight className={classes.iconArrow}/>*/}
                {/*    <ul className={classes.ulCon} style={{top: 161}}>*/}
                {/*        <li className={classes.liCon}><TopicDetails/></li>*/}
                {/*        <li className={classes.liCon}><TopicDetails/></li>*/}
                {/*        <li className={classes.liCon}><TopicDetails/></li>*/}
                {/*        <li className={classes.liCon}><TopicDetails/></li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li className={classes.li}>Đồ Đông Lạnh<ArrowRight className={classes.iconArrow}/>*/}
                {/*    <ul className={classes.ulCon} style={{top: 215}}>*/}
                {/*        <li className={classes.liCon}><TopicDetails/></li>*/}
                {/*        <li className={classes.liCon}><TopicDetails/></li>*/}
                {/*        <li className={classes.liCon}><TopicDetails/></li>*/}
                {/*        <li className={classes.liCon}><TopicDetails/></li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
            </ul>
        </div>
    );
}