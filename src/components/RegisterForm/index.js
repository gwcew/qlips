import React from 'react';
import {
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
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
    color: '#515151',
  },
  button: {
    margin: `0 ${theme.spacing(1)}`,
  },
}));

function RegisterForm() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <h2 className={classes.header}>Регистрация</h2>
      <Grid container className={classes.inputWrap}>
        <Grid item xs={12} className={classes.input}>
          <TextField fullWidth label="Фамилия" variant="filled" />
        </Grid>
      </Grid>
      <Grid container className={classes.inputWrap}>
        <Grid item xs={12} className={classes.input}>
          <TextField fullWidth label="Имя" variant="filled" />
        </Grid>
      </Grid>
      <Grid container className={classes.inputWrap}>
        <Grid item xs={12} className={classes.input}>
          <TextField fullWidth label="Отчество" variant="filled" />
        </Grid>
      </Grid>
      <Grid container className={classes.inputWrap}>
        <Grid item xs={12} className={classes.input}>
          <TextField fullWidth label="Email" variant="filled" />
        </Grid>
      </Grid>
      <Grid container className={classes.inputWrap}>
        <Grid item xs={12} className={classes.input}>
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
      <Grid container className={classes.inputWrap} spacing={1}>
        <Grid item>
          <Button className={classes.button} variant="contained" color="secondary">
            Отмена
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.button} variant="contained" color="primary">
            Регистрация
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default RegisterForm;
