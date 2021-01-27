import React from 'react';
import {
    List,
    ListItemText,
    ListItem,
    ListItemAvatar,
    Button,
    Grid
} from '@material-ui/core';

import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.subbackground.main,
        borderRadius: '5px',
    },
}));

function Comments() {
    const classes = useStyles();

    return <Grid container className={classes.root}>
        <Grid item>
            Sas
        </Grid>
    </Grid>
}

export default Comments;