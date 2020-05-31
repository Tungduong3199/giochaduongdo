import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import logo from '../../../../Images/logo.png'
import {LocalMallOutlined} from "@material-ui/icons";
import Badge from "@material-ui/core/Badge";
import Search from '../Search'
import IconAppBar from "./IconAppBar";
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    img: {
        width: 100,
        height: 100,
        margin: '0 auto',
        display: 'block'
    },
    menuIcon: {
        width: 30,
        height: 30,
        margin: '0 auto',
        display: 'block',
    },
    boxMenu: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconCart: {
        marginRight: 30
    },
    icon: {
        width: 50,
        height: 50,
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Grid container xs={12} style={{marginTop: 10}}>
            <Grid item xs={2} className={classes.boxMenu} style={{paddingLeft: 175, marginRight: -110}}>
                <IconAppBar/>
            </Grid>
            <Grid item xs={8}>
                <img alt={'giò chả'} src={logo} className={classes.img} onClick={() => history.push('/')}/>
            </Grid>
            <Grid item xs={2} className={classes.boxMenu}>
                <Badge badgeContent={4} color={"primary"} className={classes.iconCart}>
                    <LocalMallOutlined className={classes.icon}/>
                </Badge>
            </Grid>
            <Grid item xs={11} style={{margin: '15px auto',}}>
                <Search/>
            </Grid>
        </Grid>
    );
}