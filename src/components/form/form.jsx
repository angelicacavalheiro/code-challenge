import React from 'react';
import { Container } from './styled';

export default function Form({
	firstTitle,
	secondTitle,
	formState,
	onFormChange,
}) {
  const {
    nome,
    cpfCnpj,
    email,
    tipoChave,
    chave,
  } = formState;

	const handleFormInputChange = (field, value) => {
		onFormChange(field, value);
	};

  return (
    <Container>
      	<form>
			<p>{firstTitle}</p>
			<section>
				<div>
					<label htmlFor="nome">Qual o nome completo ou razão social do favorecido?</label>
					<input
						data-testid={'Name'}
						type="text"
						id="nome"
						className="nome"
						value={nome}
						onChange={(e) => handleFormInputChange('nome', e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="cpfCnpj">Qual o CPF ou CNPJ?</label>
					<input
						type="text"
						id="cpfCnpj"
						className="cpfCnpj"
						value={cpfCnpj}
						onChange={(e) => handleFormInputChange('cpfCnpj', e.target.value)}
					/>
				</div>
			</section>
        	<div>
				<label htmlFor="email">Qual o e-mail para o envio do comprovante?</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => handleFormInputChange('email', e.target.value)}
				/>
        	</div>

			<p>{secondTitle}</p>
			<div>
			<label htmlFor="tipoChave">Tipo de Chave</label>
			<select
				id="tipoChave"
				value={tipoChave}
				onChange={(e) => handleFormInputChange('tipoChave', e.target.value)}
			>
				<option value="">Selecione o tipo de chave</option>
				<option value="cpf">CPF</option>
        		<option value="cnpj">CNPJ</option>
				<option value="email">E-mail</option>
				<option value="celular">Telefone Celular</option>
				<option value="aleatoria">Chave aleatória</option>
          	</select>
        </div>
        <div>
			<label htmlFor="chave">Chave</label>
			<input
				type="text"
				id="chave"
				value={chave}
				onChange={(e) => handleFormInputChange('chave', e.target.value)}
			/>
        </div>
      </form>
    </Container>
  );
}
