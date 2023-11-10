import React from 'react';
import DeleteButtonStyle from './styled';

export default function DeleteSelectedButton({ selectedItems, onDeleteSelected }) {
	const handleDeleteSelected = () => {
		onDeleteSelected(selectedItems);
	};

  return (
		<DeleteButtonStyle onClick={handleDeleteSelected} selected={selectedItems}>
			Excluir selecionados
		</DeleteButtonStyle>
  );
}