import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import img404 from './images/404.png';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    textAlign: 'center',
  },
  image: {
    width: '50%',
  },
}));

function Page404() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <img className={classes.image} src={img404} alt="404" />
    </Grid>
  );
}

export default Page404;
