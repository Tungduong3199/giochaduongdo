import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash'

const useStyles = makeStyles(theme => ({
    root: {
        margin: 10,
        '&:hover > div': {
            visibility: 'visible',
            opacity: 1
        },
        [theme.breakpoints.down('sm')]: {
            width: '62%',
            margin: '10px auto 0 auto',
            paddingLeft: 8,

        }
    },
    media: {
        height: 200,
        width: 200,
    },
    icon: {
        width: 30,
        height: 30,
        color: '#fff',
        backgroundColor: '#245a46',
        borderRadius: 30,
        padding: 8,
    },
    containerIcon: {
        position: 'absolute',
        zIndex: 10,
        transform: 'translateY(80px) translateX(43px)',
        opacity: 0,
        visibility: 'hidden',
        transition: 'all 0.3s ease-in-out',
        height: 46,
        cursor: 'pointer'
    }
}));

export default function ProductDetails({data, alert, setOpen, setData}) {

    const classes = useStyles();

    const handleClick = () => {
        setData(data)
        setOpen(true)
    }

    return (
        <Card className={classes.root}>

            <CardActionArea onClick={alert === true ? handleClick : null}>
                <CardMedia
                    className={classes.media}
                    image={data.productAvt}
                    title={data.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{textTransform: 'capitalize'}}>
                        {_.truncate(data.name, {
                            'length': 11,
                        })}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {data.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}