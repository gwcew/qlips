import React from 'react';
import {
    Grid,
    FormControl,
    InputLabel,
    OutlinedInput,
    TextField,
    Button,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import MoodIcon from '@material-ui/icons/Mood';

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

    makeBold: {
        color: theme.palette.comment.secondaryColor,
        fontWeight: 'bold',
    },
    text: {
        color: theme.palette.comment.secondaryColor,
    },
    makeUnderline: {
        color: theme.palette.comment.secondaryColor,
        textDecoration: 'underline',
    },
    chooseSmile: {

    },
    sendButton: {
        color: theme.palette.comment.secondaryColor,
        textAlign: 'right',
        cursor: "pointer",
    },
    default: {
        color: theme.palette.comment.secondaryColor,
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
            <Grid container direction="row" alignItems="center" justify="flex-end">
                <Grid xs={4} item className={classes.text}>
                    <span className={classes.makeBold}>B</span>/<span className={classes.makeUnderline}>U</span>
                </Grid>
                <Grid xs={8} item className={classes.sendButton}>
                    Отправить
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}


RightPanelPage.propTypes = {

};

export default RightPanelPage;
