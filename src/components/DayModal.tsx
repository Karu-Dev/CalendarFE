import React from 'react';
import {Modal, Box, Typography } from '@mui/material';

interface DayModalProps {
  open: boolean;
  info: any;
  handleClose: () => void;
}

const DayModal: React.FC<DayModalProps> = ({ open, handleClose, info }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {info && info.summary ? info.summary: ''}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Creator: {info && info.creator && info.creator.email && info.creator.email ? info.creator.email:''} <br/>
          Start: {new Date(info && info.start && info.start.dateTime?info.start.dateTime: null ).toDateString()}
        </Typography>
      </Box>
    </Modal>
  );
};

export default DayModal;