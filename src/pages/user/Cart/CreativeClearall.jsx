import React, { useContext, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, Box } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { CartContext } from '../../../components/context/CartContext';

const CreativeClearall = () => {
    const { clearCart} = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (confirm) => {
    setOpen(false);
    if (confirm) {
      console.log('Confirmed exit');
      clearCart();
      // Add exit logic here
    }
  };

  return (
    <div>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handleClickOpen} 
        startIcon={<ExitToAppIcon />}
      >
        Claer
      </Button>
      <Dialog open={open} onClose={() => handleClose(false)} maxWidth="sm">
        <DialogTitle>
          <Typography variant="h6" style={{ display: 'flex', alignItems: 'center' }}>
            <ExitToAppIcon style={{ marginRight: '8px' }} />
            Confirm Clear All
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box textAlign="center" sx={{ padding: 2 }}>
            <Typography variant="body1">
              Are you sure you want to clear all products? 
            </Typography>
            
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color="primary">
            No
          </Button>
          <Button onClick={() => handleClose(true)} color="error">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreativeClearall;