import React from 'react';
import {
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setModalRegisterFormStatus} from 'redux/actions';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.searchbar.backgroundColor,
  },
  header: {
    textAlign: 'center',
    color: theme.palette.text.main,
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
  buttonCancel: {
    "&.MuiButtonBase-root": {
      color: '#8e8e8e',
      borderColor: '#8e8e8e'
    },
  },
  button: {
    margin: `0 ${theme.spacing(3)}`,
  },
  input: {
    backgroundColor: theme.palette.searchbar.inputbackgroundColor,
  },
}));

function RegisterForm({handleModalRegisterFormStatus}) {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <h2 className={classes.header}>Регистрация</h2>
      <Grid container className={classes.inputWrap}>
        <Grid item xs={12} className={classes.input}>
          <TextField fullWidth label="Фамилия" variant="filled" InputProps={{className: classes.caption}} InputLabelProps={{className: classes.caption}} />
        </Grid>
      </Grid>
      <Grid container className={classes.inputWrap}>
        <Grid item xs={12} className={classes.input}>
          <TextField fullWidth label="Имя" variant="filled" InputProps={{className: classes.caption}} InputLabelProps={{className: classes.caption}} />
        </Grid>
      </Grid>
      <Grid container className={classes.inputWrap}>
        <Grid item xs={12} className={classes.input}>
          <TextField fullWidth label="Отчество" variant="filled" InputProps={{className: classes.caption}} InputLabelProps={{className: classes.caption}} />
        </Grid>
      </Grid>
      <Grid container className={classes.inputWrap}>
        <Grid item xs={12} className={classes.input}>
          <TextField fullWidth label="Email" variant="filled" InputProps={{className: classes.caption}} InputLabelProps={{className: classes.caption}} />
        </Grid>
      </Grid>
      <Grid container className={classes.inputWrap}>
        <Grid item xs={12}>
          <Button variant="contained" component="label">
            Загрузить документ
            <input type="file" hidden />
          </Button>
        </Grid>
      </Grid>
      <Grid container className={classes.inputWrap}>
        <p className={classes.caption}>
          Вы можете получить полный доступ,
          подтвердив статус специалиста
          или обучающегося в сфере здравоохранения
        </p>
        <p className={classes.caption}>
          Для этого необходимо прислать электронную
          копию документа из списка.
        </p>
      </Grid>
      <Grid container className={classes.button} spacing={1}>
        <Grid item>
          <Button className={classes.buttonCancel} variant="outlined" onClick={() => handleModalRegisterFormStatus(false)}>
            Отмена
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Регистрация
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleModalRegisterFormStatus: setModalRegisterFormStatus,
  }, dispatch);
}

RegisterForm.propTypes = {
  handleModalRegisterFormStatus: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
