import React from 'react';
import {
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  setModalRegisterFormStatus,
  setModalRegisterFormListUserStatus,
} from 'redux/actions';
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
  buttonList: {
    "&.MuiButtonBase-root": {
      width: '23%',
      height: '23%',
      textTransform: 'none',
    },
  },
}));

function RegisterForm({handleModalRegisterFormStatus, handleModalRegisterFormUserListStatus}) {
  const classes = useStyles();

  const handleOnClickUserListButton = () => {
    handleModalRegisterFormStatus(false);
    handleModalRegisterFormUserListStatus(true);
  };

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
          копию документа из <Button className={classes.buttonList} variant="contained" onClick={handleOnClickUserListButton}>списка.</Button>
        </p>
      </Grid>
      <Grid container className={classes.button} spacing={1}>
        <Grid item>
          <Button style={{textTransform: 'none'}} className={classes.buttonCancel} variant="outlined" onClick={() => handleModalRegisterFormStatus(false)}>
            Отмена
          </Button>
        </Grid>
        <Grid item>
          <Button style={{textTransform: 'none'}} variant="contained" color="primary">
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
    handleModalRegisterFormUserListStatus: setModalRegisterFormListUserStatus,
  }, dispatch);
}

RegisterForm.propTypes = {
  handleModalRegisterFormStatus: PropTypes.func,
  handleModalRegisterFormUserListStatus: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
