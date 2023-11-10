import { useState } from 'react';
import Navbar from '../../components/header/header';
import { Container, ButtonsContainer} from './styled';
import Menu from '../../components/navbar/navbar';
import Form from '../../components/form/form';
import { useNavigate } from 'react-router-dom';
import { postReceiversReq } from '../../service/receivers';
import SimpleSnackbar from '../../components/snackbar/snackbar'
import statusMapping from '../../utils/alertMapping'
import DialogButtons from '../../components/buttons/dialogButtons/dialogButtons';

export default function ReceiverNew() {
	const navigate = useNavigate();
	const firstTitle = 'Quais os dados favorecido?';
	const secondTitle = 'Qual a chave pix?';
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const [formState, setFormState] = useState({
		nome: '',
		cpfCnpj: '',
		email: '',
		tipoChave: '',
		chave: '',
	});

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

		postReceiversReq(body)
		.then((res) => {
			setSuccess(true)
		})
		.catch((error) => {
			setError(true)
		});
	}

	function handleCancel() {
		navigate('/');
	}

	const formButtons = [
		{ label: 'Cancelar', onClick: handleCancel },
		{ label: 'Salvar', onClick: handleSave },
	];

	return (
		<Container>
			<Navbar />
			<Menu route={'/'} isBack={true} />
			<div className='formBox'>
				<Form
					firstTitle={firstTitle}
					secondTitle={secondTitle}
					formState={formState}
					onFormChange={handleFormChange}
				/>
			<div>
				<ButtonsContainer>
					<DialogButtons buttons={formButtons} />
				</ButtonsContainer>
			</div>
			</div>			
			{error && (
				<SimpleSnackbar severity={statusMapping.error.severity}/>
			)} 
			{success && (
				<SimpleSnackbar severity={statusMapping.success.severity}/>
			)} 
		</Container>
	);
}
