import React, { useState } from 'react';
import { Container } from './styled'
import { StatusButton } from '../../shared-styles/statusButton'
import DialogDetails from '../../pages/receiversDatagrid/components/dialogDetaills';
import DialogUpdate from '../../pages/receiversDatagrid/components/dialogUpdate';
import iconMapping from '../../utils/iconMapping';
import defaultBankIcon from '../../assets/defaultBankIcon.svg'

export default function Datagrid({ 
	receiversList, 
	filter, 
	onToggleSelection, 
	selectedItems, 
	reloadItems,
	setSuccess,
	setError,
	setDeleteError,
	setDeleteSuccess
}) {

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedReceiver, setSelectedReceiver] = useState(null);

    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
  
    const filteredReceivers = filter ? (
		receiversList.filter((receiver) => {
          return receiver.name.toLowerCase().includes(filter.toLowerCase());
        })
		) : ( 
		receiversList );
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredReceivers?.slice(startIndex, endIndex);
  
    const totalPages = Math.ceil(filteredReceivers?.length / itemsPerPage);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    const getBankIcon = (bankName) => {
      if (iconMapping[bankName]) {
        return (iconMapping[bankName])        
      }
      return defaultBankIcon;
    };
  
    return (
      <Container>
        <table>
            <thead>
                <tr>
                    <th>
                    <input 
                      type="checkbox" 
                      className='receiverInput'
                    />
                    Favorecido
                    </th>
                    <th>CPF / CNPJ</th>
                    <th>Banco</th>
                    <th>Agência</th>
                    <th>CC</th>
                    <th>Status do favorecido</th>
                </tr>
            </thead>
            <tbody>
            {currentItems?.map((receiver) => (
                <tr key={receiver.id}>
                <td>
                <input
                    type="checkbox"
                    checked={selectedItems.includes(receiver.id)}
                    onChange={() => onToggleSelection(receiver.id)}
                />
				<button
					className="clickable-name" 
          			id="clickable-name" 
					onClick={() => {
						setIsModalOpen(true);
						setSelectedReceiver(receiver);
					}}
				>
					{receiver.name}
				</button>
                </td>
                <td>{receiver.tax_id}</td>
                <td>
                <img
                  src={getBankIcon(receiver.bank_name)}
                  alt={receiver.bank_name}
                />
                </td>                
                <td>{receiver.branch}</td>
                <td>{receiver.account}</td>
                <td>
                    <StatusButton status={receiver.status}>
						{receiver.status.charAt(0).toUpperCase() + receiver.status.slice(1)}
					</StatusButton>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        <div className="pagination">
			<h1>&lt;&lt;</h1>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
		  <h1>&gt;&gt;</h1>
        </div>
        {selectedReceiver && (
		selectedReceiver.status === 'rascunho' ? (
			<DialogUpdate
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				receiver={selectedReceiver}
				reloadItems={reloadItems}
				setSuccess={setSuccess}
				setError={setError}				
				setDeleteError={setDeleteError}
				setDeleteSuccess={setDeleteSuccess}
			/>
			) : (
			<DialogDetails
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				receiver={selectedReceiver}
				reloadItems={reloadItems}
				setSuccess={setSuccess}
				setError={setError}				
				setDeleteError={setDeleteError}
				setDeleteSuccess={setDeleteSuccess}
			/>
			)
		)}
      </Container>
    );
}  
