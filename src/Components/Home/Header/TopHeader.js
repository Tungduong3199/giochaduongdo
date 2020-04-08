import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles({
    text: {
        color: '#777777',
        textAlign: 'end',
    },
    p:{
        cursor: 'pointer',
        textTransform: 'capitalize',
        '&:hover' : {
            color: '#245a46'
        }
    }
})
function TopHeader(props) {
    const classes = useStyles()
    const history = useHistory();
    return (
        <Grid container xs={12} sm={12}>
            <Grid item container sm={7}></Grid>
            <Grid item container sm={5} style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Grid className={classes.text} item sm={4}>
                    <span className={classes.p}>tài khoản của tôi</span>
                </Grid>
                <Grid className={classes.text} style={{paddingRight: 10}} item sm={5}>
                    <span className={classes.p}>thủ tục thanh toán</span>
                </Grid>
                <Grid className={classes.text} item sm={3}>
                    <span className={classes.p} onClick={()=> history.push('/Login')}>đăng nhập</span>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default TopHeader;