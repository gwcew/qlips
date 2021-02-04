import React, {useState} from 'react';
import {
    Grid,
    ToggleButton,
    ToggleButtonGroup,
    Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    setModalRegisterFormStatus,
    setModalRegisterFormListUserStatus,
} from 'redux/actions';
import {ACCESS_TYPE_USER_REGISTER_AS_STUDY, ACCESS_TYPE_USER_REGISTER_AS_SPECIALIST} from './AccessTypes';
import ContentStudy from './ContentForStudy';
import ContentSpecialist from './ContentForSpecialist';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.searchbar.backgroundColor,
    },
    gridItemHeader: {
        paddingBottom: '25px',
    },
    gridItemToggles: {
        paddingLeft: '25px',
    },
    headerText: {
        color: theme.palette.text.main,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '100%',
    },
    togglebutton: {
        "&.MuiButtonBase-root": {
          backgroundColor: theme.palette.loginform.buttonbackgroundColor,
          borderRadius: '7px',
          marginLeft: '12px',
          textTransform: 'none',
        },
        "&.MuiToggleButton-root": {
          padding: '4px',
    
          "&:hover": {
            backgroundColor: 'rgb(52,77,158)',
            transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
          },
        },
        '&$selected': {
          backgroundColor: theme.palette.primary.main,
        },
    },
    buttonCancel: {
        margin: `0 ${theme.spacing(1)}`,
    
        "&.MuiButtonBase-root": {
          color: '#8e8e8e',
          borderColor: '#8e8e8e'
        },
      },
    selected: {},
}));

function Page({handleModalRegisterFormStatus, handleModalRegisterFormUserListStatus}) {
    const classes = useStyles();

    const [alignment, setAlignment] = useState(ACCESS_TYPE_USER_REGISTER_AS_STUDY);

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    return (
        <Grid container className={classes.root} justifyContent="center">
            <Grid item className={classes.gridItemHeader}>
                <div className={classes.headerText}>Список документов, подтверждающих статус пользователя</div>
            </Grid>
            <Grid item>
                <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                >
                    <ToggleButton value={ACCESS_TYPE_USER_REGISTER_AS_STUDY} style={{color: 'white'}} classes={{root: classes.togglebutton, selected: classes.selected}}>
                        Обучающийся
                    </ToggleButton>
                    <ToggleButton value={ACCESS_TYPE_USER_REGISTER_AS_SPECIALIST} style={{color: 'white'}} classes={{root: classes.togglebutton, selected: classes.selected}}>
                        Специалист
                    </ToggleButton>
                </ToggleButtonGroup>
            </Grid>
            <Grid item>
                {alignment === ACCESS_TYPE_USER_REGISTER_AS_STUDY ? <ContentStudy></ContentStudy> : <ContentSpecialist></ContentSpecialist>}
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" className={classes.buttonCancel}>Отмена</Button>
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