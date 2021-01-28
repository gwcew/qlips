import React from 'react';
import {
    Grid,
    FormControl,
    InputLabel,
    OutlinedInput,
    TextField,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.comment.backgroundColor,
        borderRadius: '8px',
    },  

    input: {
        "&.MuiFormControl-root": {
            backgroundColor: theme.palette.comment.rightPanelInputBackgroundColor,
        },
    },

    inputText: {
        color: theme.palette.comment.contentNameColor,
    },
}));

function RightPanelPage() {
    const classes = useStyles();

    return <Grid container direction="column" className={classes.root} spacing={3}>
        <Grid item>
        <FormControl className={classes.input}>
            <OutlinedInput multiline className={classes.inputText}>
            </OutlinedInput>
        </FormControl>
        </Grid>
        <Grid item>
            Element2
        </Grid>
    </Grid>
}


RightPanelPage.propTypes = {

};

export default RightPanelPage;