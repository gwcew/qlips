import React, {useState} from 'react';
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const useStyles = makeStyles(theme => ({
    root: {
        color: 'white'
    },
    icon: {
        color: 'white',
    },
}));

function Page({}) {
    const classes = useStyles();

    return <List className={classes.root}>
        <ListItem>
            <ListItemIcon>
                <RadioButtonUncheckedIcon className={classes.icon}></RadioButtonUncheckedIcon>
            </ListItemIcon>
            <ListItemText>
                Копия всех заполненных страниц зачетной книжки обучающегося
            </ListItemText>
        </ListItem>
        <ListItem>
            <ListItemIcon>
                <RadioButtonUncheckedIcon className={classes.icon}></RadioButtonUncheckedIcon>
            </ListItemIcon>
            <ListItemText>
                Копия всех заполненных страниц студенческого билета обучающегося
            </ListItemText>
        </ListItem>
        <ListItem>
            <ListItemIcon>
                <RadioButtonUncheckedIcon className={classes.icon}></RadioButtonUncheckedIcon>
            </ListItemIcon>
            <ListItemText>
                Копия справки об обучении с печатью университета
            </ListItemText>
        </ListItem>
    </List> 
}

Page.propTypes = {

};

export default Page;