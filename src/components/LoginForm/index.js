import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {ACCESS_TYPE_DEFAULT, ACCESS_TYPE_SPECIAL, ACCESS_TYPE_STUDENT} from './AccessTypes';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setAccessType, setModalLoginFormStatus, setModalRegisterFormStatus} from 'redux/actions';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.searchbar.backgroundColor,
    color: theme.palette.text.main,
  },
  link: {
    color: theme.palette.text.main,
    textDecoration: 'none',
  },
  header: {
    textAlign: 'center',
  },
  label: {
    textAlign: 'right',
    verticalAlign: 'middle',
    padding: `0 ${theme.spacing(1)}`,
  },
  inputWrap: {
    marginTop: theme.spacing(1),
    textAlign: 'center',
  },
  caption: {
    fontSize: '14px',
    color: theme.palette.caption.main,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(1),
  },
  textfield: {
    backgroundColor: theme.palette.searchbar.inputbackgroundColor,
    color: theme.palette.caption.main,
  },
  togglebutton: {
    "&.MuiButtonBase-root": {
      backgroundColor: theme.palette.loginform.buttonbackgroundColor,
      borderRadius: '7px',
      marginLeft: '8px',
    },
    "&.MuiToggleButton-root": {
      padding: '4px',
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
  regButtonWrap: {
    textAlign: 'center',
  },
  selected: {},
}));

function LoginForm({handleAccessType, handleLoginFormStatus, handleModalRegisterFormStatus}) {
  const classes = useStyles();

  let accessType = localStorage.getItem('accessType');

  if (accessType === undefined || accessType === null) {
    localStorage.setItem('accessType', ACCESS_TYPE_DEFAULT);
    accessType = localStorage.getItem('accessType');
  }

  const [alignment, setAlignment] = useState(Number(accessType));

  const handleAlignment = (event, newAlignment) => {
    localStorage.setItem('accessType', newAlignment);
    handleAccessType(newAlignment);
    setAlignment(newAlignment);
  };

  return (
    <Grid className={classes.root}>
      <h2 className={classes.header}>Вход</h2>
      <Grid container className={classes.inputWrap}>
        <Grid item xs={12} className={classes.input}>
          <TextField fullWidth label="E-mail" variant="filled" InputProps={{className: classes.textfield}} InputLabelProps={{className: classes.caption}}/>
        </Grid>
      </Grid>
      <Grid container className={classes.inputWrap}>
        <Grid item xs={12} className={classes.input}>
          <TextField
            fullWidth
            label="Пароль"
            variant="filled"
            type="password"
            InputProps={{className: classes.textfield}}
            InputLabelProps={{className: classes.caption}}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.inputWrap}>
        <a href="/" className={classes.link}>Забыли пароль?</a>
      </Grid>
      <Grid container className={classes.inputWrap}>
        <h3 className={classes.header}>Тип пользователя*</h3>
      </Grid>
      <Grid container className={classes.inputWrap} spacing={1}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
        >
          <ToggleButton value={ACCESS_TYPE_SPECIAL} style={{color: 'white'}} classes={{root: classes.togglebutton, selected: classes.selected}}>
            Специалист
          </ToggleButton>
          <ToggleButton value={ACCESS_TYPE_STUDENT} style={{color: 'white'}} classes={{root: classes.togglebutton, selected: classes.selected}}>
            Студент
          </ToggleButton>
          <ToggleButton value={ACCESS_TYPE_DEFAULT} style={{color: 'white'}} classes={{root: classes.togglebutton, selected: classes.selected}}>
            Обычный
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid container className={classes.inputWrap}>
        <p className={classes.caption}>
          * Данная функция является демонстрационной,
          в финальной версии сайта тип пользователя
          будет устанавливаться при подтверждении
          уровня специализации
        </p>
      </Grid>
      <Grid container className={classes.button} spacing={1}>
        <Grid item>
          <Button variant="outlined" className={classes.buttonCancel} onClick={() => handleLoginFormStatus(false)}>
            Отмена
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.button} variant="contained" color="primary">
            Вход
          </Button>
        </Grid>
      </Grid>
      <Grid className={classes.regButtonWrap}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            handleModalRegisterFormStatus(true);
          }}
        >
          Регистрация
        </Button>
      </Grid>
    </Grid>
  );
}

LoginForm.propTypes = {
  handleAccessType: PropTypes.func,
  handleLoginFormStatus: PropTypes.func,
  handleModalRegisterFormStatus: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    videocontent: state.gridvideo,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleAccessType: setAccessType,
    handleLoginFormStatus: setModalLoginFormStatus,
    handleModalRegisterFormStatus: setModalRegisterFormStatus,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
