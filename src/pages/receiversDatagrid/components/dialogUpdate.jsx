import React, { useState, useEffect } from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { updateReceiversReq, deleteReceiverReq } from '../../../service/receivers';
import GenericDialog from '../../../components/dialogs/GenericDialog';
import DialogButtons from '../../../components/buttons/dialogButtons/dialogButtons';
import Form from '../../../components/form/form';
import { StatusButton } from '../../../shared-styles/statusButton';
import { 
    ContentDeleteContainer, 
    ButtonsDeleteContainer,
    ButtonsDetailsContainer
} from '../styled'

export default function DialogUpdate({ 
    isOpen, 
    onClose, 
    receiver, 
    reloadItems, 
    setError, 
    setSuccess,
	setDeleteError,
	setDeleteSuccess
}) {
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const firstTitle = 'Quais os dados favorecido?';
    const secondTitle = 'Quais os dados bancários do favorecido?';

    const [formState, setFormState] = useState({
        nome: '',
        cpfCnpj: '',
        email: '',
        tipoChave: '',
        chave: '',
    });

    useEffect(() => {
        if (isOpen) {
            setFormState({
                nome: receiver.name,
                cpfCnpj: receiver.tax_id,
                email: receiver.email,
                tipoChave: receiver.pix_key_type,
                chave: receiver.pix_key,
            });
        }
    }, [isOpen, receiver]);

    const handleFormChange = (field, value) => {
        setFormState({
            ...formState,
            [field]: value,
        });
    };

    function handleSave() {
        const { nome, cpfCnpj, email, tipoChave, chave } = formState;
        const body = {
          name: nome,
          email,
          tax_id: cpfCnpj,
          pix_key: chave,
          pix_key_type: tipoChave,
          status: 'rascunho',
        };
    
        updateReceiversReq(receiver.id, body)
            .then((res) => {
                setSuccess(true)
            })
            .catch((error) => {
                setError(true)
            });
            reloadItems();
            onClose();
        }

    const handleDelete = () => {
        deleteReceiverReq(receiver.id)
            .then((res) => {         
                setDeleteSuccess(true)                             
            })
            .catch((error) => {
                setDeleteError(true)
            });   
        reloadItems();      
        closeDeleteDialog();
        onClose();
    };

    const openDeleteDialog = () => {
        onClose();
        setDeleteDialogOpen(true); 
    };

    const closeDeleteDialog = () => {
        setDeleteDialogOpen(false);
    };

    const dialogContent = (
        <>
            <DialogTitle>{receiver.name}</DialogTitle>
            <DialogContent>
                <StatusButton status={receiver.status}>
                    {receiver.status.charAt(0).toUpperCase() + receiver.status.slice(1)}
                </StatusButton>
                <Form 
                    firstTitle={firstTitle}
                    secondTitle={secondTitle}
                    formState={formState}
                    onFormChange={handleFormChange}
                />                
            </DialogContent>
        </>
    );

    const formButtons = [
        { label: 'Voltar', onClick: onClose },
        { label: 'Apagar', onClick: openDeleteDialog },
        { label: 'Salvar', onClick: handleSave },        
    ];  

    const dialogActions = (
        <ButtonsDetailsContainer>
            <DialogButtons buttons={formButtons} />
        </ButtonsDetailsContainer>       
    );

    const dialogContentDelete = (
        <ContentDeleteContainer>
            <h4>
                <DialogTitle>Excluir favorecido</DialogTitle>
            </h4>
            <DialogContent>           
                <h5>
                    Você confirma a exclusão do favorecido {receiver.name}?
                </h5> <br/>
                <h6>
                    O Histórico de pagamentos para este favorecido será mantido,
                    mas ele será removido da sua lista de favorecidos.
                </h6>                
            </DialogContent>
        </ContentDeleteContainer>
    );

    const deleteButtons = [
        { label: 'Cancelar', onClick: closeDeleteDialog },
        { label: 'Confirmar Exclusão', onClick: handleDelete },
    ];
    
    const dialogActionsDelete = (
        <ButtonsDeleteContainer>
            <DialogButtons buttons={deleteButtons}/>
        </ButtonsDeleteContainer>
    );

    return (
        <>
            <GenericDialog isOpen={isOpen} onClose={onClose} content={dialogContent} actions={dialogActions} />
            {isDeleteDialogOpen && (
                <GenericDialog isOpen={true} onClose={closeDeleteDialog} content={dialogContentDelete} actions={dialogActionsDelete} />
            )}
        </>
    );
}

