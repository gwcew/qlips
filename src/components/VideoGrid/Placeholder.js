import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid} from '@material-ui/core';
import FilterDrama from '@material-ui/icons/SentimentDissatisfied';
import SvgIcon from '@material-ui/core/SvgIcon';
import PropTypes from 'prop-types';
import imageSearchLight from './previews/PlaceholderLight.png';
import imageSearchDark from './previews/PlaceholderDark.png';

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.text.main,
    },
    text: {
        fontWeight: 'bold',
        fontSize: '200%',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '125%',
        },
    },
    icon: {
        width: '100%', 
        height: '100%',
    },
}));

function Placeholder({isLightTheme}) {
    const classes = useStyles();
    console.log(isLightTheme);
    const currentPlaceholderImage = isLightTheme === "true" ? imageSearchLight : imageSearchDark;

    return <Grid container justifyContent="center" alignItems="center" direction="row">
        <div className={classes.root}>
            <Grid container justifyContent="center" direction="row">
                <Grid item xs={0} sm={4}>
                </Grid>
                <Grid item xs={10} sm={4}>
                    <img className={classes.icon} src={currentPlaceholderImage}></img>
                </Grid>
                <Grid item xs={2} sm={4}>
                </Grid>
            </Grid>
        </div>
    </Grid>
}

Placeholder.propTypes = {
    isLightTheme: PropTypes.string,
};

export default Placeholder;