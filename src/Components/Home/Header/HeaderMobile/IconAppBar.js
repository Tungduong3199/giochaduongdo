import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {useHistory} from 'react-router-dom'
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import {auth, firestore} from "../../../../firebaseConfig";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            width: 0
        }
    },
    menuButton: {
        marginRight: 40,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#245a46',
        color: "#ffffff"
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const [openCollapse, setOpenCollapse] = React.useState(false);
    const [openAccount, setOpenAccount] = React.useState(false);
    const [user, setUser] = useState('')

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleClickOpenCollapse = () => {
        setOpenCollapse(!openCollapse)
    }

    const handleClickOpenAccount = () => {
        setOpenAccount(!openAccount)
    }

    const getUserData = () => {
        try {
            if (auth.currentUser) {
                firestore.collection('user')
                    .doc(auth.currentUser.email)
                    .get()
                    .then(function (doc) {
                        setUser({...doc.data()})
                    })
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getUserData()
    }, [auth.currentUser])

    return (
        <div className={classes.root}>
            <CssBaseline/>

            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
            >
                <MenuIcon/>
            </IconButton>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton color={"inherit"} onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider style={{backgroundColor: '#fff'}}/>
                <ListItem button>
                    <ListItemText primary={'Trang chủ'} onClick={() => history.push('/')}/>
                </ListItem>
                <ListItem button>
                    <ListItemText primary={'Giới thiệu'} onClick={() => history.push('/gioi-thieu')}/>
                </ListItem>
                <ListItem button onClick={handleClickOpenCollapse}>
                    <ListItemText primary="Sản phẩm"/>
                    {openCollapse ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Giò"/>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Chả"/>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Bánh Chưng"/>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Đồ Khô"/>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Đồ Đông Lạnh"/>
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button>
                    <ListItemText primary={'Khuyến mãi'} onClick={() => history.push('/')}/>
                </ListItem>
                <ListItem button>
                    <ListItemText primary={'Liên hệ'} onClick={() => history.push('')}/>
                </ListItem>
                <ListItem button onClick={handleClickOpenAccount}>
                    <ListItemText primary="Tài khoản"/>
                    {openAccount ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={openAccount} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {!user.admin
                            ? null
                            : <div>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Thêm sản phẩm"/>
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Sửa sản phẩm"/>
                                </ListItem>
                            </div>
                        }
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Thông tin tài khoản"/>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Đăng xuất"/>
                        </ListItem>
                    </List>
                </Collapse>
            </Drawer>
        </div>
    );
}