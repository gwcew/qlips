import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Avatar,
} from '@material-ui/core';
import Modal from 'components/Modal';
import LoginForm from 'components/LoginForm';
import RegisterForm from 'components/RegisterForm';
import { Search, Person } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import imgLogo from './logo.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    position: 'fixed',
    top: '0',
    backgroundColor: theme.palette.subbackground.main,
    zIndex: '1000',
  },
  loginBox: {
    textAlign: 'right',
  },
  button: {
    marginTop: '6px!important',
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  rightAlign: {
    marginLeft: 'auto',
    display: 'inline-flex',
    width: 'auto',
  },
  searchbar: {
    background: theme.palette.background.default,
  },
  searchbar_text: {
    color: theme.palette.text.main,
  },
  searchbar_image: {
    backgroundColor: 'transparent',
  },
}));

function Header() {
  const classes = useStyles();
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenReg, setIsOpenReg] = useState(false);

  useEffect(() => {
    if (isOpenLogin) {
      setIsOpenReg(false);
    }
    if (isOpenReg) {
      setIsOpenLogin(false);
    }
  }, [isOpenLogin, isOpenReg]);

  return (
    <Grid className={classes.root} container>
      <Grid item xs={2}>
        <Link to="/">
          <img src={imgLogo} height={40} alt="logo"/>
        </Link>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth size="small" variant="outlined" className={classes.searchbar}>
          <InputLabel htmlFor="outlined-adornment-password" className={classes.searchbar_text}>Поиск</InputLabel>
          <OutlinedInput
            fullWidth
            id="outlined-adornment-password"
            type="text"
            className={classes.searchbar_text}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            )}
            labelWidth={45}
          />
        </FormControl>
      </Grid>
      <Grid item xs={4} className={classes.loginBox}>
        <Grid container spacing={1} className={classes.rightAlign}>
          <Grid item>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              size="small"
              onClick={() => setIsOpenLogin(true)}
            >
              Вход
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => setIsOpenReg(true)}
            >
              Регистрация
            </Button>
          </Grid>
          <Grid item>
            <Avatar
              alt="avatar"
              className={classes.avatar}
            >
              <Person />
            </Avatar>
          </Grid>
        </Grid>
      </Grid>
      <Modal isOpen={isOpenLogin} handler={setIsOpenLogin}>
        <LoginForm />
      </Modal>
      <Modal isOpen={isOpenReg} handler={setIsOpenReg}>
        <RegisterForm />
      </Modal>
    </Grid>
  );
}

export default Header;
