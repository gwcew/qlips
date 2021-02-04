import React, {useState} from 'react';
import {
    Grid,
    ToggleButton,
    ToggleButtonGroup,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    setModalRegisterFormStatus,
    setModalRegisterFormListUserStatus,
} from 'redux/actions';
import {ACCESS_TYPE_USER_REGISTER_AS_STUDY, ACCESS_TYPE_USER_REGISTER_AS_STUDENT} from './AccessTypes';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.searchbar.backgroundColor,
    },
    headerText: {

    },
}));

function Page({handleModalRegisterFormStatus, handleModalRegisterFormUserListStatus}) {
    const classes = useStyles();

    const [alignment, setAlignment] = useState(ACCESS_TYPE_USER_REGISTER_AS_STUDY);

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    return (
        <Grid container className={classes.root}>
            <Grid item>
                <div className={classes.headerText}>Список документов, подтверждающих статус пользователя</div>
            </Grid>
            <Grid item>
                <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                >
                    <ToggleButton value={ACCESS_TYPE_USER_REGISTER_AS_STUDY}>
                        Обучающийся
                    </ToggleButton>
                    <ToggleButton value={ACCESS_TYPE_USER_REGISTER_AS_STUDENT}>
                        Студент
                    </ToggleButton>
                </ToggleButtonGroup>
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