import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from 'react-router-dom'
import {auth, firestore} from '../../../firebaseConfig'
import HoverName from "./HoverName";
import {useGlobal} from "reactn";

const useStyles = makeStyles({
    text: {
        color: '#777777',
        textAlign: 'center',
    },
    p: {
        cursor: 'pointer',
        textTransform: 'capitalize',
        position: 'relative',
        '&:hover': {
            color: '#245a46'
        },
        '&:hover > div': {
            visibility: 'visible',
            opacity: 1,
            transform: 'scale(1,1)'
        }
    },
    ul: {
        width: 200,
        position: 'absolute',
        top: 62,
        visibility: 'hidden',
        opacity: 0,
        transition: 'all 0.3s ease-in-out',
        transform: 'scale(0.2,0.2)',
        zIndex: 1111,
        border: '1px solid #fff'
    }
})

function TopHeader() {
    const classes = useStyles()
    const history = useHistory();
    const [, setAuthUser] = useGlobal('admin')
    const [user, setUser] = useState('')

    const getUserData = () => {
        try {
            if (auth.currentUser) {
                firestore.collection('user')
                    .doc(auth.currentUser.email)
                    .get()
                    .then(function (doc) {
                        setUser({...doc.data()})
                        setAuthUser({...doc.data()})
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
        <Grid container xs={12} sm={12}>
            <Grid item container sm={7}></Grid>
            <Grid item container sm={5} style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Grid className={classes.text} style={{paddingRight: 10}} item sm={5}>
                    <span className={classes.p}>thủ tục thanh toán</span>
                </Grid>
                <Grid className={classes.text} item sm={3}>
                    {auth.currentUser === null
                        ? <span className={classes.p} onClick={() => history.push('/login')}>Đăng Nhập</span>
                        :
                        <span className={classes.p}>
                    {user.displayName}
                            <div className={classes.ul}>
                        <HoverName admin={user.admin}/>
                        </div>
                        </span>
                    }

                </Grid>
            </Grid>
        </Grid>
    );
}

export default TopHeader;