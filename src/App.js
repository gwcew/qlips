import React, { useEffect, useState } from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import All from 'components/All';

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#4B6EE2',
    },
    secondary: {
      main: '#9978DC',
    },
    background: {
      default: '#ffffff',
    },
    subbackground: {
      main: '#ffffff',
    },
    sidePanels: {
      main: '#e1e1e1',
    },
    border: {
      main: '#8fa7e8',
    },
    text: {
      main: '#364095',
    },
    subtext: {
      main: '#626a96',
    },
    caption: {
      main: '#515151',
    },
    logintext: {
      main: '#b3abbd',
      background: '#f0f0f0',
    },
    comment: {
      hoverColor: '#e9edfd',
      backgroundColor: '#fff',
      subbackgroundColor: '#e1e1e1',
      authorNameColor: '#9978DC',
      contentNameColor: '#364095',
      secondaryColor: '#626a97',
      optionsColor: '#626a97',
      avatarColor: 'black',
      rightPanelInputBackgroundColor: '#f5f5f5',
    },
    sidebar: {
      backgroundColor: '#f5f5f5',
      iconBackgroundColor: '#f4f4f4',
      iconUnSelectedBackgroundColor: 'transparent',
      buttonBackgroundColor: '#fefefe',
    },
    searchbar: {
      backgroundColor: '#ffffff',
      inputbackgroundColor: '#f0f0f0',
    },
    loginform: {
      buttonbackgroundColor: '#8e8e8e',
    },
    videoPreview: {
      borderColor: '#8fa7e8',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      lm: 400,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#2e70f3',
    },
    secondary: {
      main: '#27c1c1',
    },
    background: {
      default: '#383838',
    },
    subbackground: {
      main: '#262626',
    },
    sidePanels: {
      main: '#262626',
    },
    border: {
      main: '#8fa7e8',
    },
    text: {
      main: '#b4c1f6',
    },
    subtext: {
      main: '#848eb5'
    },
    caption: {
      main: '#5f5f5f',
    },
    comment: {
      hoverColor: '#383838',
      backgroundColor: '#262626',
      subbackgroundColor: '#313131',
      authorNameColor: 'white',
      contentNameColor: '#b4c1f6',
      secondaryColor: '#8994bf',
      optionsColor: '#c1defe',
      avatarColor: 'white',
      rightPanelInputBackgroundColor: '#383838',
    },
    sidebar: {
      backgroundColor: '#383838',
      iconBackgroundColor: '#373737',
      iconUnSelectedBackgroundColor: 'transparent',
      buttonBackgroundColor: '#252525',
    },
    searchbar: {
      backgroundColor: '#262626',
      inputbackgroundColor: '#323232',
    },
    loginform: {
      buttonbackgroundColor: '#8e8e8e',
    },
    videoPreview: {
      borderColor: '#8fa7e8',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      lm: 325,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {

  const location = useLocation();
  const [crutchLocation, setCrutchLocation] = useState(false);


  // By default we use light theme, but user can change it at anytime!
  let requestedTheme = localStorage.getItem('theme');

  if (requestedTheme === null) {
    requestedTheme = 'true';
  }

  const [isLightTheme, setTheme] = useState(requestedTheme);

  useEffect(() => {
    if (crutchLocation) {
      window.location.reload(false);
    } else {
      setCrutchLocation(true);
    }

  }, [location]);

  const currentTheme = isLightTheme === "true" ? lightTheme : darkTheme;




  return (
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <All isLightTheme={isLightTheme} setTheme={setTheme}></All>
      </ThemeProvider>
  );
}

export default App;
