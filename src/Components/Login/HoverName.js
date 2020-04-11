import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {useHistory} from 'react-router-dom'
import {auth} from '../../firebaseConfig'
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 250,
        maxWidth: 360,
        backgroundColor: '#245a46',
        zIndex: 999,
        color: '#fff',
    },
    text:{
        transition: 'all 0.3s ease-in-out',
        '&:hover':{
            color: '#1cbf19'
        }
    }
}));

export default function HoverName() {
    const classes = useStyles();
    const history = useHistory();

    function logOut() {
        auth.signOut()
            .then(()=> history.push('/'))
    }

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem className={classes.text} onClick={() => history.push('/Profile')} button>
                    <ListItemText primary="Tài khoản của tôi"/>
                </ListItem>
                <Divider style={{backgroundColor: '#fff'}}/>
                <ListItem className={classes.text} onClick={logOut} button>
                    <ListItemText primary="Đăng xuất"/>
                </ListItem>
            </List>
        </div>
    );
}