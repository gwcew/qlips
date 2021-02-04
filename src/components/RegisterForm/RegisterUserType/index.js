import React from 'react';
import {Grid} from '@material-ui/core';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.searchbar.backgroundColor,
    },
    headerText: {

    },
}));

function Page({}) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item>
                <div className={classes.headerText}>Список документов, подтверждающих статус пользователя</div>
            </Grid>
        </Grid>
    );
}

Page.propTypes = {

};

export default Page;