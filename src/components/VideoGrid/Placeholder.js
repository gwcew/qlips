import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid} from '@material-ui/core';
import FilterDrama from '@material-ui/icons/SentimentDissatisfied';
import SvgIcon from '@material-ui/core/SvgIcon';

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

        [theme.breakpoints.down('sm')]: {
            width: '85%',
            height: '85%',
        },
    },
}));

function Placeholder() {
    const classes = useStyles();

    return <Grid container justifyContent="center" alignItems="center" direction="row">
        <div className={classes.root}>
            <Grid container justifyContent="center" direction="row">
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                    <FilterDrama className={classes.icon}></FilterDrama>
                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <div className={classes.text}>Ничего не найдено!</div>
            </Grid>
        </div>
    </Grid>
}

export default Placeholder;