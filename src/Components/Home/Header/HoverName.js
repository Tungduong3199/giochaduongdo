import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {ArrowDropUp} from "@material-ui/icons";
import {auth} from '../../../firebaseConfig'
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 200,
        maxWidth: 360,
        backgroundColor: '#245a46',
        color: '#fff',
        marginTop: -25,
        position: 'relative',
        zIndex: 9999
    },
    text: {
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            color: '#35c522',
        }
    },
    icon: {
        width: 50,
        height: 50,
        position: 'absolute',
        color: '#245a46',
        top: -29,
        left: 60
    }
}));

export default function HoverName({admin}) {
    const classes = useStyles();
    const history = useHistory();

    function handleLogOut() {
        auth.signOut()
            .then(() => history.push('/'))
    }

    return (
        <div className={classes.root}>
            <ArrowDropUp className={classes.icon}/>
            <List component="nav" aria-label="secondary mailbox folders">
                {admin
                    ? <div>
                        <ListItem onClick={() => history.push('/add-product')} className={classes.text} button>
                            <ListItemText primary="Thêm sản phẩm"/>
                        </ListItem>
                        <Divider/>
                        <ListItem onClick={() => history.push('/fix-product')} className={classes.text} button>
                            <ListItemText primary="Sửa sản phẩm"/>
                        </ListItem>
                        <Divider/>
                        <ListItem onClick={() => history.push('/add-categories')} className={classes.text} button>
                            <ListItemText primary="Thêm danh mục"/>
                        </ListItem>
                        <Divider/>
                    </div>
                    : null}
                <ListItem onClick={() => history.push('/profile')} className={classes.text} button>
                    <ListItemText primary="Tài khoản của tôi"/>
                </ListItem>
                <Divider/>
                <ListItem onClick={handleLogOut} className={classes.text} button>
                    <ListItemText primary="Đăng xuất"/>
                </ListItem>
            </List>
        </div>
    );
}