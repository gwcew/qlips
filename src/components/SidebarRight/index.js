import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
    borderColor: theme.palette.border.main,
    borderWidth: '1px',
    borderStyle: 'solid',
    height: '100vh',
  },
}));

function SidebarRight() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Grid item xs={12} className={classes.menuBlock} />
    </Grid>
  );
}

export default SidebarRight;
