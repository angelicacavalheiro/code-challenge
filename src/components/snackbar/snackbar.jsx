import React from 'react';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import statusMappings from '../../utils/alertMapping'

export default function SimpleSnackbar({severity}) {
	const [open, setOpen] = useState(true);
	const vertical = 'top'; 
	const horizontal = 'right';  

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
		return;
		}
		setOpen(false);
	};

  	const action = (
		<>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleClose}
			>
				<CloseIcon fontSize="small" />
			</IconButton>
		</>
	);

  	const { backgroundColor, color, message } = statusMappings[severity];

	return (
		<div>
			<Snackbar
				anchorOrigin={{ vertical, horizontal }}
				open={open}
				autoHideDuration={3000}
				onClose={handleClose}
				message={message}
				action={action}
				ContentProps={{
				style: {
					backgroundColor,
					color,
				},
				}}
			/>
		</div>
	);
}
