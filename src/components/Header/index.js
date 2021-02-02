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
import {setSearchResult, setSearchContentByString, setModalLoginFormStatus, setModalRegisterFormStatus} from 'redux/actions';
import {useHistory, useLocation} from 'react-router-dom';


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
    "&.MuiButtonBase-root": {
      color: 'white',
      fontWeight: 'bold',
    },
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
function Header({isLoginFormOpen, isRegisterFormOpen,
   width, handleSearch, handleGenerateContentBySearch, handleModalLoginFormStatus, handleModalRegisterFormStatus}) {
  const classes = useStyles();
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenReg, setIsOpenReg] = useState(false);

  const [searchString, setSearchString] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (isOpenLogin) {
      setIsOpenReg(false);
    }
    if (isOpenReg) {
      setIsOpenLogin(false);
    }

    const params = new URLSearchParams(location.search);
    const queryResult = params.get('search');

    setSearchString(queryResult);

  }, [isOpenLogin, isOpenReg]);

  const history = useHistory();

  
  const handleOnChange = (event) => {
    setSearchString(event.target.value);
  };

  const handleOnClickSearchButton = () => {
    const params = new URLSearchParams();

    if (searchString) {
      params.append('search', searchString);
      history.push({search: '?'+params.toString()});
    }
    else {
      params.delete('search');
      history.push({search: ''});
    }
  };

  const handleGenerateOnKeyPressed = (event) => {
    if (event.key === 'Enter') {
      handleOnClickSearchButton();
    }
  };

 

  const handleClickAvatar = () => {
    handleModalLoginFormStatus(true);
  };

  return (
    <Grid className={classes.root} container>
      <Grid item xs={2}>
        <Link to="/">
          <img src={imgLogo} height={40} alt="logo"/>
        </Link>
      </Grid>
      <Grid item xs={8} sm={6}>
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
                  onClick={handleOnClickSearchButton}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            )}
            labelWidth={45}
            onChange={handleOnChange}
            onKeyPress={handleGenerateOnKeyPressed}
            value={searchString}
          />
        </FormControl>
      </Grid>
      <Grid item xs={2} sm={4} className={classes.loginBox}>
        <Grid container spacing={1} className={classes.rightAlign}>
        <Hidden mdDown>
          <Grid item>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                size="small"
                onClick={() => handleModalLoginFormStatus(true)}
              >
                Вход
              </Button>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid item>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={() => handleModalRegisterFormStatus(true)}
                >
                  Регистрация
                </Button>
            </Grid>
          </Hidden>
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
      <Modal isOpen={isLoginFormOpen} handler={handleModalLoginFormStatus}>
        <LoginForm />
      </Modal>
      <Modal isOpen={isRegisterFormOpen} handler={handleModalRegisterFormStatus}>
        <RegisterForm />
      </Modal>
    </Grid>
  );
}

function mapStateToProps(state) {
  return {
    videoContent: state.gridvideo,
    isLoginFormOpen: state.window.loginFormStatus,
    isRegisterFormOpen: state.window.registerFormStatus,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleSearch: setSearchResult,
    handleGenerateContentBySearch: setSearchContentByString,
    handleModalLoginFormStatus: setModalLoginFormStatus,
    handleModalRegisterFormStatus: setModalRegisterFormStatus,
  }, dispatch);
}

Header.propTypes = {
  isLoginFormOpen: PropTypes.bool,
  isRegisterFormOpen: PropTypes.bool,
  handleSearch: PropTypes.func,
  handleGenerateContentBySearch: PropTypes.func,
  handleModalLoginFormStatus: PropTypes.func,
  handleModalRegisterFormStatus: PropTypes.func,
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
