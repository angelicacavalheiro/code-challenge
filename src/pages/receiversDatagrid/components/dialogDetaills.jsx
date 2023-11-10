import React, { useState, useEffect } from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { patchReceiverReq, deleteReceiverReq } from '../../../service/receivers';
import GenericDialog from '../../../components/dialogs/GenericDialog';
import DialogButtons from '../../../components/buttons/dialogButtons/dialogButtons';
import { StatusButton } from '../../../shared-styles/statusButton';
import { 
    ContentContainer, 
    ContentDeleteContainer, 
    ButtonsDeleteContainer, 
    ButtonsDetailsContainer 
} from '../styled'

export default function DialogDetails({ 
    isOpen, 
    onClose, 
    receiver, 
    reloadItems, 
    setError, 
    setSuccess,
	setDeleteError,
	setDeleteSuccess
}) {
    const [email, setEmail] = useState('');
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setEmail(receiver.email);
        }
    }, [isOpen, receiver.email]);

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

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

    const handleSave = () => {
        patchReceiverReq(receiver.id, email)
            .then((res) => {
                setSuccess(true)
            })
            .catch((error) => {
                setError(true)     
            });
        reloadItems();
        onClose();
    };

    const openDeleteDialog = () => {
        setDeleteDialogOpen(true);
        onClose(); 
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
                <ContentContainer>                
                    <h4>CPF/CNPJ </h4> 
                    <h5>{receiver.tax_id}</h5> 
                    <section>
                        <div>
                            <h4 className={'firstElement'}>Banco </h4>
                            <h5> {receiver.bank_name} </h5>
                        </div>
                        <div>
                            <h4>Agência </h4>
                            <h5> {receiver.branch} </h5>
                        </div>                      
                    </section>
                    <section>
                        <div>
                            <h4 className={'firstElement'}>Tipo de conta </h4>
                            <h5> {receiver.account_type} </h5>
                        </div>
                        <div>
                            <h4>Conta poupança </h4>
                            <h5> {receiver.account} </h5>
                        </div>                       
                    </section>                
                    <h6> E-mail do favorecido <br/>
                        <input
                            data-testid={'E-mail'}
                            placeholder='Digite seu e-mail'
                            value={email}
                            onChange={handleInputChange}
                        />
                    </h6>
                </ContentContainer>
            </DialogContent>
        </>
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

    const detailsButtons = [
        { label: 'Voltar', onClick: onClose },        
        { label: 'Apagar', onClick: openDeleteDialog },
        { label: 'Salvar', onClick: handleSave },
    ];

    const dialogActions = (
        <ButtonsDetailsContainer>
            <DialogButtons buttons={detailsButtons} />
        </ButtonsDetailsContainer>       
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
