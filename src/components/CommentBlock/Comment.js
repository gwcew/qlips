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
    Button,
} from '@material-ui/core';
import {makeStyles, withStyles} from '@material-ui/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PropTypes from 'prop-types';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.default,
        borderRadius: '8px',
        borderColor: theme.palette.border.main,
    },
    authorName: {
        fontSize: 12,
        color: theme.palette.secondary.main,
    },
    contentName: {
        fontSize: 16,
        color: theme.palette.text.main,
    },
    button: {
        "&$hover": {
            backgroundColor: 'white',
        },
    },
}));

const styles = (theme) => ({
    root: {
      "&.MuiButtonBase-root": {
        border: `1px solid ${theme.palette.border.main}`,
        borderBottom: '0px',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        borderRadius: '8px',
        backgroundColor: theme.palette.comment.backgroundColor,
      },
      "&:hover": {
          borderRadius: '8px',
          borderBottom: '0px',
          borderBottomLeftRadius: '0px',
          borderBottomRightRadius: '0px',
          backgroundColor: theme.palette.comment.hoverColor,
      }
    },

    rootnested: {
        "&.MuiButtonBase-root": {
            border: `1px solid ${theme.palette.border.main}`,
            borderRadius: '0px',
            paddingLeft: 29.5,
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
  
    iconButton: {
      padding: 5
    },
  
    important: {
      color: "#00ACE9",
      fontWeight: "bold"
    },

    authorName: {
        color: theme.palette.comment.authorNameColor,
        fontSize: 15,
    },
    buttonOptions: {
        "&.MuiButtonBase-root": {
            position: 'absolute',
            right: 0,
            bottom: 20,
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
            bottom: 20,
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
        "&.MuiButtonBase-root": {
            position: 'relative',
            top: 15,
            left: 20,
            fontSize: 10,
          },
          "&:hover": {
            borderRadius: '0px',
            borderBottom: '0px',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
            backgroundColor: 'transparent',
          },
    },
    contentName: {
        color: theme.palette.comment.contentNameColor,
        fontSize: 14,
    },
});

function CustomListItemComponent(props) {
    return <ListItem button className={props.isNested ? props.classes.rootnested : props.classes.root} disableRipple={true}>
        <ListItemIcon style={{paddingLeft: '10px'}}>
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
                    <Button className={props.classes.buttonAnswer}>
                        Hello
                    </Button>
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
            <CustomListItem isNested={true} authorName={"Сергей Добросмыслов"} contentName={"Здравствуйте! Мы работаем с 8 до 21. Приходите к нам!"}></CustomListItem>
            <CustomListItem isNested={true} authorName={"Николай Захарченко"} contentName={"Где у вас можно просмотреть ..."}></CustomListItem>
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