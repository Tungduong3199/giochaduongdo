import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        zIndex: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        margin: '0 20px',
        textTransform: 'uppercase',
        fontSize: 17,
        fontWeight: 'bold',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
        '&:hover': {
            color: '#41bb45'
        }
    },
    text: {
        marginRight: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 17,
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            color: '#41bb45'
        }
    },
    toolbar: {
        width: 1170,
        margin: '0 auto',
        backgroundColor: '#245a46'
    },
    product: {
        margin: '0 20px',
        textTransform: 'uppercase',
        fontSize: 17,
        fontWeight: 'bold',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
        '&:hover': {
            color: '#41bb45'
        }
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: '#245a46'}}>
                <Toolbar className={classes.toolbar}>
                    <Typography onClick={() => {
                        history.push('/')
                    }} variant="h6" className={classes.text}>
                        trang chủ
                    </Typography>
                    <Typography onClick={() => {
                        history.push('/gioi-thieu')
                    }} variant="h6" className={classes.title}>
                        giới thiệu
                    </Typography>
                    <Typography variant="h6" className={classes.product}>
                        sản phẩm
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        khuyến mãi
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        nhượng quyền thương hiệu
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        liên hệ
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}