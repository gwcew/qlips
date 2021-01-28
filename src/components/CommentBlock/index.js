import React from 'react';
import {
    List,
    ListItemText,
    ListItem,
    ListItemAvatar,
    Button,
    ListSubheader,
    Grid
} from '@material-ui/core';

import {makeStyles} from '@material-ui/styles';
import Comment from './Comment';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.comment.subbackgroundColor,
        borderRadius: '5px',
    },
    header: {
        color: theme.palette.text.main,
        paddingLeft: 58,
    },
    list: {
        backgroundColor: theme.palette.background.default,
    },
}));

function Comments() {
    const classes = useStyles();

    return <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12}>
            <List subheader={<h3 className={classes.header}>Обсуждение</h3>}>
                <Comment authorName="Виктор Голдман" contentName="Здравствуйте! Я думал вы не работаете..."></Comment>
                <Comment authorName="Виктор Голдман" contentName="Здравствуйте! Я думал вы не работаете..."></Comment>
                <Comment authorName="Виктор Голдман" contentName="Здравствуйте! Я думал вы не работаете..."></Comment>
                <Comment authorName="Виктор Голдман" contentName="Здравствуйте! Я думал вы не работаете..."></Comment>
            </List>
        </Grid>
    </Grid>
}

export default Comments;