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
import {setAccessType} from 'redux/actions';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.subbackground.main,
    color: theme.palette.text.main,
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
    margin: `0 ${theme.spacing(1)}`,
    color: 'red',
  },
  textfield: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.caption.main,
  },
  togglebutton: {
    '&$selected': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  selected: {},
}));

function LoginForm({handleAccessType}) {
  const classes = useStyles();

  const accessType = localStorage.getItem('accessType');

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
          <TextField fullWidth label="E-mail" variant="filled" InputProps={{className: classes.textfield}}/>
        </Grid>
      </Grid>
      <Grid container className={classes.inputWrap}>
        <Grid item xs={12} className={classes.input}>
          <TextField
            fullWidth
            label="Password"
            variant="filled"
            type="password"
            InputProps={{className: classes.textfield}}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.inputWrap}>
        <a href="/">Забыли пароль?</a>
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
          <Button variant="outlined" style={{color: '#8e8e8e', borderColor: '#8e8e8e'}}>
            Отмена
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.button} variant="contained" color="primary">
            Вход
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

LoginForm.propTypes = {
  handleAccessType: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    videocontent: state.gridvideo,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleAccessType: setAccessType,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
