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

const styles = (theme) => ({
    root: {
      "&.MuiButtonBase-root": {
        border: `1px solid ${theme.palette.border.main}`,
        borderTop: '0px solid',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        borderBottom: `1px solid ${theme.palette.border.main}`,
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
        backgroundColor: theme.palette.comment.backgroundColor,
        padding: '1px',
      },
      "&:hover": {
          borderBottom: `1px solid ${theme.palette.border.main}`,
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          backgroundColor: theme.palette.comment.hoverColor,
      }
    },
    content: {
        textAlign: 'center',
        color: theme.palette.comment.secondaryColor,
    },
    text: {
        "&.MuiTypography-root": {
            fontSize: '0.75rem',
        },
    },
});

function CustomListItemComponent(props) {
    return <ListItem button className={props.classes.root} disableRipple={true}>
        <ListItemText className={props.classes.content}>
             <Typography variant="h6" className={props.classes.text}>
                Просмотреть ещё (38 ответов)
             </Typography>
        </ListItemText>
    </ListItem>
}

CustomListItemComponent.propTypes = {
    classes: PropTypes.object,
};

const CloseButton = withStyles(styles)(CustomListItemComponent);

export default CloseButton;