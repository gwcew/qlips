import React from 'react';
import {Grid} from '@material-ui/core';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    setModalRegisterFormStatus,
    setModalRegisterFormListUserStatus,
} from 'redux/actions';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.searchbar.backgroundColor,
    },
    headerText: {

    },
}));

function Page({handleModalRegisterFormStatus, handleModalRegisterFormUserListStatus}) {
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
    handleModalRegisterFormStatus: PropTypes.func,
    handleModalRegisterFormUserListStatus: PropTypes.func,
};

function mapStateToProps(state) {
   return {
   }
}
  
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleModalRegisterFormStatus: setModalRegisterFormStatus,
    handleModalRegisterFormUserListStatus: setModalRegisterFormListUserStatus,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);