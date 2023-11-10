import React from 'react';
import { useEffect, useState } from 'react';
import Menu from './components/menu'
import Datagrid from '../../components/datagrid/datagrid'
import { Container } from './styled';
import { getReceiversReq, deleteReceiversListReq } from '../../service/receivers';
import DeleteSelectedButton from '../../components/buttons/deleteButton/deleteSelectedButton/deleteButton'
import transfeera_logo from "../../assets/transfeera_logo.png" 
import SimpleSnackbar from '../../components/snackbar/snackbar'
import statusMapping from '../../utils/alertMapping'

export default function ReceiversDatagrid() {
    const [receiversFound, setReceiversFound] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);

    const [listError, setListError] = useState(false);
    const [deleteListError, setDeleteListError] = useState(false);
    const [deleteListSuccess, setDeleteListSuccess] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [deleteError, setDeleteError] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);

    // reset
    useEffect(() => {
        const timeout = setTimeout(() => {
            setListError(false);
            setDeleteListError(false);
            setDeleteListSuccess(false);
            setSuccess(false);
            setError(false);
            setDeleteError(false);
            setDeleteSuccess(false);
        }, 2000);     
        return () => clearTimeout(timeout); 
    }, [
        listError, 
        deleteError, 
        deleteListSuccess, 
        success, 
        error, 
        deleteError, 
        deleteSuccess
    ]);

    const handleToggleSelection = (itemId) => {
        if (selectedItems.includes(itemId)) {
        setSelectedItems((prevSelected) => prevSelected.filter((id) => id !== itemId));
        } else {
        setSelectedItems((prevSelected) => [...prevSelected, itemId]);
        }
    };

    const handleDeleteSelected = (selectedItems) => {  
        setIsLoading(true)
        deleteReceiversListReq(selectedItems)
        .then((res) => {
            setDeleteListSuccess(true)
            setIsLoading(false)
            setSelectedItems([])
        }) 
        .catch((error) => {
            setDeleteListError(true)
            setIsLoading(false)
        });    
        receiverList();
    };

    useEffect(() => {
        receiverList()   
    }, []);

    function receiverList() {     
        setIsLoading(true)
        getReceiversReq()
        .then((res) => {
            setReceiversFound(res)
            setIsLoading(false)
        }) 
        .catch((error) => {
            setIsLoading(false)
            setListError(true)
        });
    }

    return (
        <Container>
        {isLoading ? 'loading...' : 
        <div>
            <Menu filter={filter} setFilter={setFilter} data-testid='menuComponent'/>
            <div className='gridBox' data-testid='gridBox'>
                <section>
                <DeleteSelectedButton 
                    selectedItems={selectedItems} 
                    onDeleteSelected={handleDeleteSelected} 
                />
                </section>
                { listError ? (<SimpleSnackbar severity={statusMapping.error.severity}/> 
                ) : (
                    <>
                        <Datagrid 
                            receiversList={receiversFound.data} 
                            filter={filter} 
                            onToggleSelection={handleToggleSelection} 
                            selectedItems={selectedItems}
                            reloadItems={receiverList}  
                            setSuccess={setSuccess}                           
                            setError={setError}            
                            setDeleteError={setDeleteError}
                            setDeleteSuccess={setDeleteSuccess}                         
                        /> 
                        <div className="image-container">
                            <img src={transfeera_logo} alt="Transfeera Logo" />
                        </div>
                    </>            
                )} 
                {deleteListError && (
                    <SimpleSnackbar severity={statusMapping.deleteListError.severity}/>
                )}
                {deleteListSuccess && (
                    <SimpleSnackbar severity={statusMapping.deleteListSuccess.severity}/>
                )}    
                {deleteError && (
                    <SimpleSnackbar severity={statusMapping.deleteError.severity}/>
                )}
                {deleteSuccess && (
                    <SimpleSnackbar severity={statusMapping.deleteSuccess.severity}/>
		        )} 
                {error && (
                    <SimpleSnackbar severity={statusMapping.error.severity}/>
                )}
                {success && (
                    <SimpleSnackbar severity={statusMapping.success.severity}/>
		        )} 
            </div>
        </div>
        }      
        </Container>
    );
}
