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
  Hidden,
} from '@material-ui/core';
import Modal from 'components/Modal';
import LoginForm from 'components/LoginForm';
import RegisterForm from 'components/RegisterForm';
import { Search, Person } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import imgLogo from './logo.png';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {setSearchResult, setSearchContentByString} from 'redux/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    position: 'fixed',
    top: '0',
    backgroundColor: theme.palette.searchbar.backgroundColor,
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
    background: theme.palette.searchbar.inputbackgroundColor,
  },
  searchbar_text: {
    color: theme.palette.text.main,
  },
  searchbar_image: {
    backgroundColor: 'transparent',
  },
}));

{/* width - для отладки когда мобилка а когда ПК */}
function Header({width, handleSearch, handleGenerateContentBySearch}) {
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

  const handleOnChange = (event) => {
    handleSearch(event.target.value);
  };

  const handleGenerateOnKeyPressed = (event) => {
    if (event.key === 'Enter') {
      handleGenerateContentBySearch();
    }
  };

  const handleClickAvatar = () => {
    setIsOpenLogin(true);
  };

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
                  onClick={handleGenerateContentBySearch}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            )}
            labelWidth={45}
            onChange={handleOnChange}
            onKeyPress={handleGenerateOnKeyPressed}
          />
        </FormControl>
      </Grid>
      <Grid item xs={4} className={classes.loginBox}>
        <Grid container spacing={1} className={classes.rightAlign}>
          <Grid item>
            <Hidden mdDown>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                size="small"
                onClick={() => setIsOpenLogin(true)}
              >
                Вход
              </Button>
            </Hidden>
          </Grid>
          <Grid item>
            <Hidden smDown>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => setIsOpenReg(true)}
              >
                Регистрация
              </Button>
            </Hidden>
          </Grid>
          <Grid item>
            <Avatar
              alt="avatar"
              className={classes.avatar}
              onClick={handleClickAvatar}
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

function mapStateToProps(state) {
  return {
    videoContent: state.gridvideo,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleSearch: setSearchResult,
    handleGenerateContentBySearch: setSearchContentByString,
  }, dispatch);
}

Header.propTypes = {
  handleSearch: PropTypes.func,
  handleGenerateContentBySearch: PropTypes.func,
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
