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
    makeUnderline: {
        color: theme.palette.comment.secondaryColor,
        textDecoration: 'underline',
    },
    chooseSmile: {

    },
    sendButton: {
        color: theme.palette.comment.secondaryColor,
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
                <Grid item>
                    <div className={classes.makeBold}>B</div>
                </Grid>
                <Grid item className={classes.default}>
                    /
                </Grid>
                <Grid item>
                    <div className={classes.makeUnderline}>U</div>
                </Grid>
                <Grid container direction="row" alignItems="center" justify="flex-end">
                    <Grid item>
                        <MoodIcon className={classes.default}></MoodIcon>
                    </Grid>
                    <Grid item>
                        <div className={classes.sendButton}>
                            Отправить
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}


RightPanelPage.propTypes = {

};

export default RightPanelPage;