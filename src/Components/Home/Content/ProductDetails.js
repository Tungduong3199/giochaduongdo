import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        margin: 5,
    },
    media: {
        height: 200,
        width: 200
    },
});

export default function ProductDetails({img, name, price, cate, id}) {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {
        localStorage.clear()
        localStorage.cate = cate
        localStorage.id = id
        history.push(`/product/${localStorage.cate}/${name}`)
    }
    return (
        <Card className={classes.root} onClick={handleClick}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}