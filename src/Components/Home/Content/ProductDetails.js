import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash'

const useStyles = makeStyles({
    root: {
        margin: 5,
    },
    media: {
        height: 200,
        width: 200
    },
});

export default function ProductDetails({img, name, price}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{textTransform: 'capitalize'}}>
                        {_.truncate(name, {
                            'length': 11,
                        })}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}