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
                Документ о высшем профессиональном медицинском образовании и квалификации
            </ListItemText>
        </ListItem>
        <ListItem>
            <ListItemIcon>
                <RadioButtonUncheckedIcon className={classes.icon}></RadioButtonUncheckedIcon>
            </ListItemIcon>
            <ListItemText>
                Документ о высшем или среднем профессиональном фармацевтическом образовании и квалификации
            </ListItemText>
        </ListItem>
        <ListItem>
            <ListItemIcon>
                <RadioButtonUncheckedIcon className={classes.icon}></RadioButtonUncheckedIcon>
            </ListItemIcon>
            <ListItemText>
                Сертификат специалиста и / или свидетельство об аккредитации специалиста
            </ListItemText>
        </ListItem>
        <ListItem>
            <ListItemIcon>
                <RadioButtonUncheckedIcon className={classes.icon}></RadioButtonUncheckedIcon>
            </ListItemIcon>
            <ListItemText>
                Документ, подтверждающий состояние пользователя в трудовых отношениях с медицинской или фармацевтической организацией
            </ListItemText>
        </ListItem>
    </List> 
}

Page.propTypes = {

};

export default Page;