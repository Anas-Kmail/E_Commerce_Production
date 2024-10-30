import React, { useContext, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { UserContext } from '../context/User';
import { useNavigate } from 'react-router-dom';
import style from './ExitConfirmation.module.css'

const ExitConfirmation = () => {
  const [open, setOpen] = useState(false);
  const{isLogin,setLogin,UserData,setUserData}=useContext(UserContext);
  const navigate=useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (confirm) => {
    setOpen(false);
    if (confirm) {
      // هنا يمكنك وضع الكود الخاص بالخروج
      localStorage.removeItem("userToken");
      setLogin(false);
      setUserData({});
      navigate('/login');


      console.log('تم تأكيد الخروج');
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} className={`${style.btn}`}>
        Logout
      </Button>
      <Dialog open={open} onClose={() => handleClose(false)}>
        <DialogTitle> Confirm Exit</DialogTitle>
        <DialogContent>
          <DialogContentText>
        Do you want to logout?
          </DialogContentText>
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

export default ExitConfirmation;