import React, { useEffect } from 'react';
import { Dialog, Fade, Backdrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.searchbar.backgroundColor,
    padding: theme.spacing(2, 4, 3),
    outline: 'none!important',
    minWidth: '300px',
    maxWidth: '350px',
    width: '100%',
  },
}));

function ModalComponent({ isOpen = true, handler, children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    handler(true);
  };

  const handleClose = () => {
    setOpen(false);
    handler(false);
  };

  useEffect(() => {
    if (isOpen) {
      handleOpen();
    } else {
      handleClose();
    }
  }, [isOpen]);

  return (
    <Dialog
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          {children}
        </div>
      </Fade>
    </Dialog>
  );
}

ModalComponent.propTypes = {
  isOpen: PropTypes.bool,
  handler: PropTypes.func,
  children: PropTypes.object
};

export default ModalComponent;
