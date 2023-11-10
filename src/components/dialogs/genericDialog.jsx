import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

export default function GenericDialog({ isOpen, onClose, content, actions }) {
    return (
        <Dialog 
            open={isOpen} 
            onClose={onClose} 
            maxWidth="md"
            PaperProps={{ 
                style: {
                    width: '731px'
                }
            }}
        >
            {content}
            <DialogActions>
                {actions}
            </DialogActions>
        </Dialog>
    );
}
