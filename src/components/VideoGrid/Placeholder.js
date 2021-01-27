import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid} from '@material-ui/core';
import FilterDrama from '@material-ui/icons/SentimentDissatisfied';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.text.main,
    },
}));

function Placeholder() {
    const classes = useStyles();

    return <Grid container justifyContent="center">
        <div className={classes.root}>
            <Grid item>
                <FilterDrama style={{width: 64, height: 64, marginLeft: '115px'}}></FilterDrama>
            </Grid>
            <Grid item>
                <h1>Ничего не найдено!</h1>
            </Grid>
        </div>
    </Grid>
}

export default Placeholder;