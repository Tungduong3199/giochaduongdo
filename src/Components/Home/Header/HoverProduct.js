import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
        backgroundColor: theme.palette.background.paper,
        position: 'absolute',
        opacity: 0,
        visibility: 'hidden'
    },
}));

export default function HoverProduct() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} sm={12}>
            <Grid item sm={3}>
                <List component="nav" aria-label="mailbox folders">
                    <ListItem button>
                        <ListItemText primary="Inbox"/>
                    </ListItem>
                    <Divider/>
                    <ListItem button divider>
                        <ListItemText primary="Drafts"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Trash"/>
                    </ListItem>
                    <Divider light/>
                    <ListItem button>
                        <ListItemText primary="Spam"/>
                    </ListItem>
                </List>
            </Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}></Grid>
        </Grid>

    );
}