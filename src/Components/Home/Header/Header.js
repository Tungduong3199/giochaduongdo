import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import TopHeader from "./TopHeader";
import MidHeader from "./MidHeader";
import AppBar from './AppBar'
import HeaderMobile from "./HeaderMobile/HeaderMobile";

const useStyles = makeStyles(theme => ({
    container: {
        background: '#f5f5f5',
        width: '100%',
        padding: '15px 0',
        borderBottom: '1px solid #ebebeb',
        [theme.breakpoints.down('sm')]: {
            padding: 0
        }
    },
    box: {
        width: 1170,
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    BottomHeader: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    headerMobile: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    }
}))

function Header() {
    const classes = useStyles()

    return (
        <div>
            <div className={classes.container}>
                <div className={classes.box}>
                    <TopHeader/>
                </div>
            </div>
            <div className={classes.box} style={{height: 123}}>
                <MidHeader/>
            </div>
            <div className={classes.BottomHeader}>
                <AppBar/>
            </div>
            <div className={classes.headerMobile}>
                <HeaderMobile/>
            </div>
        </div>
    );
}

export default Header;