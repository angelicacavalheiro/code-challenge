import React from 'react';
import { IoTrashBin } from 'react-icons/io5';
import { Container } from './styled'
import theme from '../../../shared-styles/theme';

export default function DialogButtons({ buttons }) {
  return (
    <Container>
      {buttons.map((button, index) => (
        <button
			key={index}
			onClick={button.onClick}
			className={getButtonStyle(button.label)}
			data-testid={getButtonStyle(button.label)}
        >
         	{button.label === 'Apagar' ? (
            	<IoTrashBin size={18} color={theme.colors.white}/> 
          ) : (
            button.label
          )}
        </button>
      ))}
    </Container>
  );
}

function getButtonStyle(label) {
	switch (label) {
		case 'Salvar':
			return 'save-button'; 
		case 'Apagar':
			return 'delete-button'; 
		case 'Cancelar':
			return 'cancel-button'; 
		case 'Voltar':
			return 'back-button'; 
		case 'Confirmar Exclusão':
			return 'confirm-deletion'; 
		default:
			return 'default-button'; 
	}
}
