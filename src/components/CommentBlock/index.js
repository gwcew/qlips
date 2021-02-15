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
        [theme.breakpoints.up('md')]: {
            "&.MuiGrid-item": {
                paddingTop: '100px',
                paddingRight: '20px',
            },
        },
    },
}));

function Comments() {
    const classes = useStyles();

    return <Grid container className={classes.root} spacing={3}>
        <Grid item  xs={12} md={9}>
            <List subheader={<h3 className={classes.header}>Обсуждение</h3>}>
                <Comment
                  authorName="Рошаль Леонид"
                  commentText="Данное видео содержит столько информации, что и тексты читать не нужно"
                  answers={[
                      {
                          authorName: "Светлова Евгения",
                          commentText: "Польностью поддерживаю, посмотреть видео будет достаточно"
                      }
                  ]}
                />
                <Comment
                  authorName="Мясников Александр"
                  commentText="Ссылки на статьи приложили бы к видео, искать совершенно некогда."
                />
            </List>
        </Grid>
        <Grid item xs={12} md={3} className={classes.rightPanel}>
            <RightPanel></RightPanel>
        </Grid>
    </Grid>
}

export default Comments;
