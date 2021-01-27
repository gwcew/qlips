import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

function LoginForm() {
  const classes = useStyles();
  const [alignment, setAlignment] = useState(1);

  const handleAlignment = (event, newAlignment) => {
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
          <ToggleButton value={1} style={{color: 'white'}} classes={{root: classes.togglebutton, selected: classes.selected}}>
            Специалист
          </ToggleButton>
          <ToggleButton value={2} style={{color: 'white'}} classes={{root: classes.togglebutton, selected: classes.selected}}>
            Студент
          </ToggleButton>
          <ToggleButton value={3} style={{color: 'white'}} classes={{root: classes.togglebutton, selected: classes.selected}}>
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

export default LoginForm;
