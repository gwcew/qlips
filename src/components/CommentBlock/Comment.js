import React from 'react';
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemIcon,
    Grid,
    IconButton,
    ListItemSecondaryAction,
    Typography,
} from '@material-ui/core';
import {makeStyles, withStyles} from '@material-ui/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PropTypes from 'prop-types';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CloseButton from './CloseButton';

const styles = (theme) => ({
    root: {
      "&.MuiButtonBase-root": {
        border: `1px solid ${theme.palette.border.main}`,
        borderBottom: `1px solid ${theme.palette.border.main}`,
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        borderRadius: '8px',
        backgroundColor: theme.palette.comment.backgroundColor,
      },
      "&:hover": {
          borderRadius: '8px',
          borderBottom: `1px solid ${theme.palette.border.main}`,
          borderBottomLeftRadius: '0px',
          borderBottomRightRadius: '0px',
          backgroundColor: theme.palette.comment.hoverColor,
      }
    },

    rootnested: {
        "&.MuiButtonBase-root": {
            border: `1px solid ${theme.palette.border.main}`,
            borderTop: '0px solid white',
            borderRadius: '0px',
            paddingLeft: 28,
            backgroundColor: theme.palette.comment.backgroundColor,
          },
          "&:hover": {
              borderRadius: '0px',
              backgroundColor: theme.palette.comment.hoverColor,
          }
    },
  
    listItemDone: {
      borderRadius: "1em",
      "&,&:focus": {
        backgroundColor: "#F6F6E8",
        textDecoration: "line-through"
      },
      "&:hover": {
        textDecoration: "line-through"
      }
    },

    authorName: {
        color: theme.palette.comment.authorNameColor,
        fontSize: 15,
    },
    buttonOptions: {
        "&.MuiButtonBase-root": {
            position: 'absolute',
            right: 0,
            bottom: 32,
            color: theme.palette.comment.optionsColor,
          },
          "&:hover": {
            borderRadius: '0px',
            borderBottom: '0px',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
            backgroundColor: 'transparent',
          },
    },
    buttonOptionsNested: {
        "&.MuiButtonBase-root": {
            position: 'absolute',
            right: 0,
            bottom: 32,
            color: theme.palette.comment.optionsColor,
          },
          "&:hover": {
            borderRadius: '0px',
            borderBottom: '0px',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
            backgroundColor: 'transparent',
          },
    },
    buttonAnswer: {
        position: 'relative',
        top: 15,
        left: 0,
        color: theme.palette.comment.secondaryColor,
        "&.MuiTypography-root": {
            fontSize: '0.7rem',
            fontWeight: 'bold',
        },
    },
    contentName: {
        color: theme.palette.comment.contentNameColor,
        fontSize: 14,
    },
    avatar: {
        color: theme.palette.comment.avatarColor,
        paddingLeft: '10px',
    },
});

function CustomListItemComponent(props) {
    return <ListItem button className={props.isNested ? props.classes.rootnested : props.classes.root} disableRipple={true}>
        <ListItemIcon className={props.classes.avatar}>
            <AccountCircleIcon style={{width: '48px', height: '48px'}}></AccountCircleIcon>
        </ListItemIcon>
        <ListItemText>
            <Grid container direction="column">
                <Grid item className={props.classes.authorName}>
                    <div>
                        {props.authorName}
                    </div>
                </Grid>
                <Grid item className={props.classes.contentName}>
                    <div>
                        {props.contentName}
                    </div>
                </Grid>
            </Grid>
        </ListItemText>
        <IconButton className={props.isNested ? props.classes.buttonOptionsNested : props.classes.buttonOptions}>
            <MoreHorizIcon className={props.classes.buttonShare}></MoreHorizIcon>
        </IconButton>
        <Typography variant="h6" className={props.classes.buttonAnswer}>
            Ответить
        </Typography>
    </ListItem>
}

CustomListItemComponent.propTypes = {
    classes: PropTypes.object,
    authorName: PropTypes.string,
    contentName: PropTypes.string,
    isNested: PropTypes.bool,
};

const CustomListItem = withStyles(styles)(CustomListItemComponent);

function Comment({authorName, contentName, iconURL, replies}) {
 

    return <>
        <List component="nav">
            <CustomListItem authorName={authorName} contentName={contentName}></CustomListItem>
            <CustomListItem isNested={true} authorName={authorName} contentName={contentName}></CustomListItem>
            <CustomListItem isNested={true} authorName={authorName} contentName={contentName}></CustomListItem>
            <CustomListItem isNested={true} authorName={authorName} contentName={contentName}></CustomListItem>
            <CloseButton caption=""></CloseButton>
        </List>
        </>
}

Comment.propTypes = {
    authorName: PropTypes.string,
    contentName: PropTypes.string, 
    iconURL: PropTypes.string,
    replies: PropTypes.array,
};

export default Comment;