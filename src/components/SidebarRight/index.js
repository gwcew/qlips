import React from 'react';
import {
   Grid,
   ToggleButton,
   ToggleButtonGroup,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  NightsStay,
} from '@material-ui/icons';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: '0',
    right: '0',
    height: '100%',
    width: '75px',
    overflow: 'hidden',
  },
  menuBlock: {
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.sidebar.backgroundColor,
    borderRadius: '0 0 0 0',
    border: `1px solid ${theme.palette.border.main}`,
    borderRight: '0px solid green',
    height: '100vh',
  },
}));

function SidebarRight() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Grid item xs={12} className={classes.menuBlock}>
        
      </Grid>
    </Grid>
  );
}

export default SidebarRight;
