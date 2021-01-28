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
import RightPanel from './RightPanel';

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
    rightPanel: {
        "&.MuiGrid-item": {
            paddingTop: '100px',
            paddingRight: '20px',
        },
    },
}));

function Comments() {
    const classes = useStyles();

    return <Grid container className={classes.root} spacing={3}>
        <Grid item xs={9}>
            <List subheader={<h3 className={classes.header}>Обсуждение</h3>}>
                <Comment authorName="Виктор Голдман" contentName="Здравствуйте! Я думал вы не работаете..."></Comment>
                <Comment authorName="Виктор Голдман" contentName="Здравствуйте! Я думал вы не работаете..."></Comment>
                <Comment authorName="Виктор Голдман" contentName="Здравствуйте! Я думал вы не работаете..."></Comment>
                <Comment authorName="Виктор Голдман" contentName="Здравствуйте! Я думал вы не работаете..."></Comment>
            </List>
        </Grid>
        <Grid item xs={3} className={classes.rightPanel}>
            <RightPanel></RightPanel>
        </Grid>
    </Grid>
}

export default Comments;