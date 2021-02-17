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
import PropTypes from 'prop-types';

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

function Comments({commentData}) {
    const classes = useStyles();

    const generatedComments = commentData.comments.map((element, key) => {
        return (
            <Comment
                key={key}
                authorName={element.authorName}
                commentText={element.commentTextName}
                iconURL={element.urlAvatarImage}
                answers={element.userReplies}/>
        );
    });

    return <Grid container className={classes.root} spacing={3}>
        <Grid item  xs={12} md={9}>
            <List subheader={<h3 className={classes.header}>Обсуждение</h3>}>
                {generatedComments}
            </List>
        </Grid>
        <Grid item xs={12} md={3} className={classes.rightPanel}>
            <RightPanel></RightPanel>
        </Grid>
    </Grid>
}

Comments.propTypes = {
    commentData: PropTypes.object,
};

export default Comments;
