import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils'; 
import ReceiversDatagrid from './receiversDatagrid';
import * as receiversService from '../../service/receivers';
import { MemoryRouter } from 'react-router-dom';
import { waitFor } from '@testing-library/react';

jest.mock('../../service/receivers');

describe('ReceiversDatagrid', () => {
	it('should display data when loading is complete', async () => {
		const mockReceiversData = {
			data: [                 
				{
				"id": "0accb825-db24-4288-9f29-c88b9ec656da",
				"name": "Julia Silva",
				"email": "julia.silva@exemplo.com",
				"tax_id": "59738860000170",
				"branch": null,
				"account": null,
				"account_type": null,
				"bank_name": null,
				"bank_code": null,
				"pix_key": "9afe6a96-6b27-4acc-acf0-59159076c578",
				"pix_key_type": "aleatoria",
				"status": "rascunho",
				"created_at": "2023-10-25 16:00:10-03",
				"updated_at": "2023-10-25 16:00:10-03"
				},
				{
				"id": "37f7e55c-b2a9-4cc6-a8fd-8062925f86c8",
				"name": "Rafael Costa",
				"email": "rafael.costa@exemplo.com",
				"tax_id": "79915139000115",
				"branch": "3402",
				"account": "517638",
				"account_type": "Conta Poupança",
				"bank_name": "Santander",
				"bank_code": "033",
				"pix_key": "79915139000115",
				"pix_key_type": "cnpj",
				"status": "validado",
				"created_at": "2023-10-25 16:01:10-03",
				"updated_at": "2023-10-25 16:01:10-03"
				},
			]
		};
		receiversService.getReceiversReq.mockResolvedValue(mockReceiversData);
		
		let getByText;

		await act(async () => {
			({ getByText } = render(
				<MemoryRouter initialEntries={['/']} initialIndex={0}>
					<ReceiversDatagrid />
				</MemoryRouter>
			));
		});
			
		expect(getByText('Julia Silva')).toBeTruthy();
		expect(getByText('Rafael Costa')).toBeTruthy();
	});
	it('should display 2 pages when data is greater than 8', async () => {
		const mockReceiversData = {
			data: [                 
				{
					"id": "0accb825-db24-4288-9f29-c88b9ec656da",
					"name": "Julia Silva",
					"email": "julia.silva@exemplo.com",
					"tax_id": "59738860000170",
					"branch": null,
					"account": null,
					"account_type": null,
					"bank_name": null,
					"bank_code": null,
					"pix_key": "9afe6a96-6b27-4acc-acf0-59159076c578",
					"pix_key_type": "aleatoria",
					"status": "rascunho",
					"created_at": "2023-10-25 16:00:10-03",
					"updated_at": "2023-10-25 16:00:10-03"
				},
				{
					"id": "37f7e55c-b2a9-4cc6-a8fd-8062925f86c8",
					"name": "Rafael Costa",
					"email": "rafael.costa@exemplo.com",
					"tax_id": "79915139000115",
					"branch": "3402",
					"account": "517638",
					"account_type": "Conta Poupança",
					"bank_name": "Santander",
					"bank_code": "033",
					"pix_key": "79915139000115",
					"pix_key_type": "cnpj",
					"status": "validado",
					"created_at": "2023-10-25 16:01:10-03",
					"updated_at": "2023-10-25 16:01:10-03"
				},
				{
					"id": "7605691a-ba29-4729-b0c6-0b455f069e58",
					"name": "Luana Oliveira",
					"email": "luana.oliveira@exemplo.com",
					"tax_id": "54373819050",
					"branch": "4169",
					"account": "924333",
					"account_type": "Conta Corrente",
					"bank_name": "Itaú",
					"bank_code": "341",
					"status": "validado",
					"created_at": "2023-10-25 16:05:10-03",
					"updated_at": "2023-10-25 16:05:10-03"
				},
				{
					"id": "15c7117f-72aa-4651-82fb-a3c2e0b848a5",
					"name": "Luana Oliveira",
					"email": "luana.oliveira@exemplo.com",
					"tax_id": "59738860000170",
					"branch": null,
					"account": null,
					"account_type": null,
					"bank_name": null,
					"bank_code": null,
					"pix_key": "05a4861a-e2e6-4169-a79c-1292faa2e893",
					"pix_key_type": "aleatoria",
					"status": "rascunho",
					"created_at": "2023-10-25 16:06:10-03",
					"updated_at": "2023-10-25 16:06:10-03"
				},
				{
					"id": "ceadc953-5f89-43b3-8f00-05a1b24997dc",
					"name": "Guilherme Santos",
					"email": "guilherme.santos@exemplo.com",
					"tax_id": "24334548000136",
					"branch": "1492",
					"account": "219307",
					"account_type": "Conta Corrente",
					"bank_name": "Banco do Brasil",
					"bank_code": "001",
					"status": "validado",
					"created_at": "2023-10-25 16:07:10-03",
					"updated_at": "2023-10-25 16:07:10-03"
				},
				{
					"id": "4220607f-b5e2-4bff-85d8-0030d638cfc1",
					"name": "Lucas Pereira",
					"email": "lucas.pereira@exemplo.com",
					"tax_id": "79915139000115",
					"branch": null,
					"account": null,
					"account_type": null,
					"bank_name": null,
					"bank_code": null,
					"pix_key": "79915139000115",
					"pix_key_type": "cnpj",
					"status": "rascunho",
					"created_at": "2023-10-25 16:08:10-03",
					"updated_at": "2023-10-25 16:08:10-03"
				},
				{
					"id": "037d4eab-b001-4b1f-b629-88d347f83a7c",
					"name": "Luana Pereira",
					"email": "luana.pereira@exemplo.com",
					"tax_id": "24334548000136",
					"branch": null,
					"account": null,
					"account_type": null,
					"bank_name": null,
					"bank_code": null,
					"status": "rascunho",
					"created_at": "2023-10-25 16:09:10-03",
					"updated_at": "2023-10-25 16:09:10-03"
				},
				{
					"id": "12028b9c-bbf3-4fea-b1ff-189dc2852e7f",
					"name": "Lucas Santos",
					"email": "lucas.santos@exemplo.com",
					"tax_id": "32857141076",
					"branch": "7404",
					"account": "161961",
					"account_type": "Conta Poupança",
					"bank_name": "Santander",
					"bank_code": "033",
					"pix_key": "6f94f686-d3cd-41f8-a4fa-b409662aca10",
					"pix_key_type": "aleatoria",
					"status": "validado",
					"created_at": "2023-10-25 16:11:10-03",
					"updated_at": "2023-10-25 16:11:10-03"
				},
				{
					"id": "6c954d4f-23c6-4d2d-b042-cdbe45155991",
					"name": "Lucas Costa",
					"email": "lucas.costa@exemplo.com",
					"tax_id": "95845839000137",
					"branch": "3531",
					"account": "865083",
					"account_type": "Conta Poupança",
					"bank_name": "Santander",
					"bank_code": "033",
					"pix_key": "lucas.costa@exemplo.com",
					"pix_key_type": "email",
					"status": "validado",
					"created_at": "2023-10-25 16:12:10-03",
					"updated_at": "2023-10-25 16:12:10-03"
				},
			]
		};
		receiversService.getReceiversReq.mockResolvedValue(mockReceiversData);
		
		let getByText;

		await act(async () => {
			({ getByText } = render(
				<MemoryRouter initialEntries={['/']} initialIndex={0}>
					<ReceiversDatagrid />
				</MemoryRouter>
			));
		});		

		const button1 = screen.getByText('1');
		const button2 = screen.getByText('2');
	
		expect(button1).toBeTruthy();
		expect(button2).toBeTruthy();
	});
	it('should open a modal when a name is clicked', async () => {
		const mockReceiversData = {
			data: [                 
				{
				"id": "0accb825-db24-4288-9f29-c88b9ec656da",
				"name": "Julia Silva",
				"email": "julia.silva@exemplo.com",
				"tax_id": "59738860000170",
				"branch": null,
				"account": null,
				"account_type": null,
				"bank_name": null,
				"bank_code": null,
				"pix_key": "9afe6a96-6b27-4acc-acf0-59159076c578",
				"pix_key_type": "aleatoria",
				"status": "rascunho",
				"created_at": "2023-10-25 16:00:10-03",
				"updated_at": "2023-10-25 16:00:10-03"
				},
				{
				"id": "37f7e55c-b2a9-4cc6-a8fd-8062925f86c8",
				"name": "Rafael Costa",
				"email": "rafael.costa@exemplo.com",
				"tax_id": "79915139000115",
				"branch": "3402",
				"account": "517638",
				"account_type": "Conta Poupança",
				"bank_name": "Santander",
				"bank_code": "033",
				"pix_key": "79915139000115",
				"pix_key_type": "cnpj",
				"status": "validado",
				"created_at": "2023-10-25 16:01:10-03",
				"updated_at": "2023-10-25 16:01:10-03"
				},
			]
		};
		receiversService.getReceiversReq.mockResolvedValue(mockReceiversData);
		
		let getByText;

		await act(async () => {
			({ getByText } = render(
				<MemoryRouter initialEntries={['/']} initialIndex={0}>
					<ReceiversDatagrid />
				</MemoryRouter>
			));
		});
				
		const juliaSilvaElement = getByText('Julia Silva');
		act(() => {
			fireEvent.click(juliaSilvaElement);
		});

		const backButton = screen.getByText('Voltar');	
		expect(backButton).toBeTruthy();
	});
	it('should show a form dialog when the user has "rascunho" status', async () => {
		const mockReceiversData = {
			data: [                 
				{
				"id": "0accb825-db24-4288-9f29-c88b9ec656da",
				"name": "Julia Silva",
				"email": "julia.silva@exemplo.com",
				"tax_id": "59738860000170",
				"branch": null,
				"account": null,
				"account_type": null,
				"bank_name": null,
				"bank_code": null,
				"pix_key": "9afe6a96-6b27-4acc-acf0-59159076c578",
				"pix_key_type": "aleatoria",
				"status": "rascunho",
				"created_at": "2023-10-25 16:00:10-03",
				"updated_at": "2023-10-25 16:00:10-03"
				},
				{
				"id": "37f7e55c-b2a9-4cc6-a8fd-8062925f86c8",
				"name": "Rafael Costa",
				"email": "rafael.costa@exemplo.com",
				"tax_id": "79915139000115",
				"branch": "3402",
				"account": "517638",
				"account_type": "Conta Poupança",
				"bank_name": "Santander",
				"bank_code": "033",
				"pix_key": "79915139000115",
				"pix_key_type": "cnpj",
				"status": "validado",
				"created_at": "2023-10-25 16:01:10-03",
				"updated_at": "2023-10-25 16:01:10-03"
				},
			]
		};
		receiversService.getReceiversReq.mockResolvedValue(mockReceiversData);
		
		let getByText;

		await act(async () => {
			({ getByText } = render(
				<MemoryRouter initialEntries={['/']} initialIndex={0}>
					<ReceiversDatagrid />
				</MemoryRouter>
			));
		});
				
		const juliaSilvaElement = getByText('Julia Silva');
		act(() => {
			fireEvent.click(juliaSilvaElement);
		});

		const formText = screen.getByText('Quais os dados bancários do favorecido?');	
		expect(formText).toBeTruthy();
	});
	it('should show a details dialog when the user has "validado" status', async () => {
		const mockReceiversData = {
			data: [                 
				{
				"id": "0accb825-db24-4288-9f29-c88b9ec656da",
				"name": "Julia Silva",
				"email": "julia.silva@exemplo.com",
				"tax_id": "59738860000170",
				"branch": null,
				"account": null,
				"account_type": null,
				"bank_name": null,
				"bank_code": null,
				"pix_key": "9afe6a96-6b27-4acc-acf0-59159076c578",
				"pix_key_type": "aleatoria",
				"status": "rascunho",
				"created_at": "2023-10-25 16:00:10-03",
				"updated_at": "2023-10-25 16:00:10-03"
				},
				{
				"id": "37f7e55c-b2a9-4cc6-a8fd-8062925f86c8",
				"name": "Rafael Costa",
				"email": "rafael.costa@exemplo.com",
				"tax_id": "79915139000115",
				"branch": "3402",
				"account": "517638",
				"account_type": "Conta Poupança",
				"bank_name": "Santander",
				"bank_code": "033",
				"pix_key": "79915139000115",
				"pix_key_type": "cnpj",
				"status": "validado",
				"created_at": "2023-10-25 16:01:10-03",
				"updated_at": "2023-10-25 16:01:10-03"
				},
			]
		};
		receiversService.getReceiversReq.mockResolvedValue(mockReceiversData);
		
		let getByText;

		await act(async () => {
			({ getByText } = render(
				<MemoryRouter initialEntries={['/']} initialIndex={0}>
					<ReceiversDatagrid />
				</MemoryRouter>
			));
		});
				
		const rafaelCostaElement = getByText('Rafael Costa');
		act(() => {
			fireEvent.click(rafaelCostaElement)
		});

		const detailsText = screen.getByText('Conta poupança');	
		expect(detailsText).toBeTruthy();
	});
	it('should show a delete dialog when delete button is click ', async () => {
		const mockReceiversData = {
			data: [                 
				{
				"id": "0accb825-db24-4288-9f29-c88b9ec656da",
				"name": "Julia Silva",
				"email": "julia.silva@exemplo.com",
				"tax_id": "59738860000170",
				"branch": null,
				"account": null,
				"account_type": null,
				"bank_name": null,
				"bank_code": null,
				"pix_key": "9afe6a96-6b27-4acc-acf0-59159076c578",
				"pix_key_type": "aleatoria",
				"status": "rascunho",
				"created_at": "2023-10-25 16:00:10-03",
				"updated_at": "2023-10-25 16:00:10-03"
				},
				{
				"id": "37f7e55c-b2a9-4cc6-a8fd-8062925f86c8",
				"name": "Rafael Costa",
				"email": "rafael.costa@exemplo.com",
				"tax_id": "79915139000115",
				"branch": "3402",
				"account": "517638",
				"account_type": "Conta Poupança",
				"bank_name": "Santander",
				"bank_code": "033",
				"pix_key": "79915139000115",
				"pix_key_type": "cnpj",
				"status": "validado",
				"created_at": "2023-10-25 16:01:10-03",
				"updated_at": "2023-10-25 16:01:10-03"
				},
			]
		};
		receiversService.getReceiversReq.mockResolvedValue(mockReceiversData);
		
		let getByText;

		await act(async () => {
			({ getByText } = render(
				<MemoryRouter initialEntries={['/']} initialIndex={0}>
					<ReceiversDatagrid />
				</MemoryRouter>
			));
		});
				
		const rafaelCostaElement = getByText('Rafael Costa');
		act(() => {
			fireEvent.click(rafaelCostaElement);
		});

		const deleteButton = screen.getByTestId('delete-button')
		act(() => {
			fireEvent.click(deleteButton);
		});

		const deleteModalText = screen.getByText('Excluir favorecido');
		expect(deleteModalText).toBeTruthy();
	});
});

describe('Delete dialog', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	it('should close delete dialog when cancel-button is click ', async () => {
		const mockReceiversData = {
			data: [                 
				{
				"id": "0accb825-db24-4288-9f29-c88b9ec656da",
				"name": "Julia Silva",
				"email": "julia.silva@exemplo.com",
				"tax_id": "59738860000170",
				"branch": null,
				"account": null,
				"account_type": null,
				"bank_name": null,
				"bank_code": null,
				"pix_key": "9afe6a96-6b27-4acc-acf0-59159076c578",
				"pix_key_type": "aleatoria",
				"status": "rascunho",
				"created_at": "2023-10-25 16:00:10-03",
				"updated_at": "2023-10-25 16:00:10-03"
				},
				{
				"id": "37f7e55c-b2a9-4cc6-a8fd-8062925f86c8",
				"name": "Rafael Costa",
				"email": "rafael.costa@exemplo.com",
				"tax_id": "79915139000115",
				"branch": "3402",
				"account": "517638",
				"account_type": "Conta Poupança",
				"bank_name": "Santander",
				"bank_code": "033",
				"pix_key": "79915139000115",
				"pix_key_type": "cnpj",
				"status": "validado",
				"created_at": "2023-10-25 16:01:10-03",
				"updated_at": "2023-10-25 16:01:10-03"
				},
			]
		};
		receiversService.getReceiversReq.mockResolvedValue(mockReceiversData);
		
		let getByText;

		await act(async () => {
			({ getByText } = render(
				<MemoryRouter initialEntries={['/']} initialIndex={0}>
					<ReceiversDatagrid />
				</MemoryRouter>
			));
		});
				
		const rafaelCostaElement = getByText('Rafael Costa');
		act(() => {
			fireEvent.click(rafaelCostaElement);
		});
		
		const deleteButton = screen.getByTestId('delete-button');
		act(() => {
			fireEvent.click(deleteButton);
		});
		
		const cancelButton = screen.getByTestId('cancel-button');
		act(() => {
			fireEvent.click(cancelButton);
		});
		
		const deleteModalText = screen.queryByText('Excluir favorecido');
		expect(deleteModalText).toBeNull();
	});
	it('should call the delete API after click confirm-deletion button', async () => {
		const mockReceiversData = {
			data: [                 
				{
				"id": "0accb825-db24-4288-9f29-c88b9ec656da",
				"name": "Julia Silva",
				"email": "julia.silva@exemplo.com",
				"tax_id": "59738860000170",
				"branch": null,
				"account": null,
				"account_type": null,
				"bank_name": null,
				"bank_code": null,
				"pix_key": "9afe6a96-6b27-4acc-acf0-59159076c578",
				"pix_key_type": "aleatoria",
				"status": "rascunho",
				"created_at": "2023-10-25 16:00:10-03",
				"updated_at": "2023-10-25 16:00:10-03"
				},
				{
				"id": "37f7e55c-b2a9-4cc6-a8fd-8062925f86c8",
				"name": "Rafael Costa",
				"email": "rafael.costa@exemplo.com",
				"tax_id": "79915139000115",
				"branch": "3402",
				"account": "517638",
				"account_type": "Conta Poupança",
				"bank_name": "Santander",
				"bank_code": "033",
				"pix_key": "79915139000115",
				"pix_key_type": "cnpj",
				"status": "validado",
				"created_at": "2023-10-25 16:01:10-03",
				"updated_at": "2023-10-25 16:01:10-03"
				},
			]
		};
		receiversService.getReceiversReq.mockResolvedValue(mockReceiversData);
		jest.spyOn(receiversService, 'deleteReceiverReq').mockResolvedValueOnce();
		
		let getByText;

		await act(async () => {
			({ getByText } = render(
				<MemoryRouter initialEntries={['/']} initialIndex={0}>
					<ReceiversDatagrid />
				</MemoryRouter>
			));
		});
				
		const rafaelCostaElement = getByText('Rafael Costa');
		act(() => {
			fireEvent.click(rafaelCostaElement);
		});

		const deleteButton = screen.getByTestId('delete-button');
		
		act(() => {
			fireEvent.click(deleteButton);
		});

		const confirmDeleteButton = screen.getByTestId('confirm-deletion');
		act(() => {
			fireEvent.click(confirmDeleteButton);
		});
		
		expect(receiversService.deleteReceiverReq).toHaveBeenCalledWith('37f7e55c-b2a9-4cc6-a8fd-8062925f86c8');
		expect(receiversService.deleteReceiverReq).toHaveBeenCalledTimes(1);
	});
	it('user should not be displayed in the datagrid after successful deletion', async () => {
		const mockReceiversData = {
			data: [                 
				{
				"id": "0accb825-db24-4288-9f29-c88b9ec656da",
				"name": "Julia Silva",
				"email": "julia.silva@exemplo.com",
				"tax_id": "59738860000170",
				"branch": null,
				"account": null,
				"account_type": null,
				"bank_name": null,
				"bank_code": null,
				"pix_key": "9afe6a96-6b27-4acc-acf0-59159076c578",
				"pix_key_type": "aleatoria",
				"status": "rascunho",
				"created_at": "2023-10-25 16:00:10-03",
				"updated_at": "2023-10-25 16:00:10-03"
				},
				{
				"id": "37f7e55c-b2a9-4cc6-a8fd-8062925f86c8",
				"name": "Rafael Costa",
				"email": "rafael.costa@exemplo.com",
				"tax_id": "79915139000115",
				"branch": "3402",
				"account": "517638",
				"account_type": "Conta Poupança",
				"bank_name": "Santander",
				"bank_code": "033",
				"pix_key": "79915139000115",
				"pix_key_type": "cnpj",
				"status": "validado",
				"created_at": "2023-10-25 16:01:10-03",
				"updated_at": "2023-10-25 16:01:10-03"
				},
			]
		};
		receiversService.getReceiversReq.mockResolvedValue(mockReceiversData);
		const deleteReceiverMock = jest.spyOn(receiversService, 'deleteReceiverReq').mockResolvedValueOnce();
		
		let getByText;

		await act(async () => {
			({ getByText } = render(
				<MemoryRouter initialEntries={['/']} initialIndex={0}>
					<ReceiversDatagrid />
				</MemoryRouter>
			));
		});
				
		const rafaelCostaElement = getByText('Rafael Costa');
		act(() => {
			fireEvent.click(rafaelCostaElement);
		});
		

		const deleteButton = screen.getByTestId('delete-button');
		act(() => {
			fireEvent.click(deleteButton);
		});

		const confirmDeleteButton = screen.getByTestId('confirm-deletion');
		act(() => {
			fireEvent.click(confirmDeleteButton);
		});		

		deleteReceiverMock.mockResolvedValueOnce();

		await waitFor(() => {
			const deletedUser = screen.queryByText('Rafael Costa');
			expect(deletedUser).toBeNull();
		});
	});
	it('should show success message after successful deletion', async () => {
		const mockReceiversData = {
			data: [                 
				{
				"id": "0accb825-db24-4288-9f29-c88b9ec656da",
				"name": "Julia Silva",
				"email": "julia.silva@exemplo.com",
				"tax_id": "59738860000170",
				"branch": null,
				"account": null,
				"account_type": null,
				"bank_name": null,
				"bank_code": null,
				"pix_key": "9afe6a96-6b27-4acc-acf0-59159076c578",
				"pix_key_type": "aleatoria",
				"status": "rascunho",
				"created_at": "2023-10-25 16:00:10-03",
				"updated_at": "2023-10-25 16:00:10-03"
				},
				{
				"id": "37f7e55c-b2a9-4cc6-a8fd-8062925f86c8",
				"name": "Rafael Costa",
				"email": "rafael.costa@exemplo.com",
				"tax_id": "79915139000115",
				"branch": "3402",
				"account": "517638",
				"account_type": "Conta Poupança",
				"bank_name": "Santander",
				"bank_code": "033",
				"pix_key": "79915139000115",
				"pix_key_type": "cnpj",
				"status": "validado",
				"created_at": "2023-10-25 16:01:10-03",
				"updated_at": "2023-10-25 16:01:10-03"
				},
			]
		};
		receiversService.getReceiversReq.mockResolvedValue(mockReceiversData);
				
		let getByText;

		await act(async () => {
			({ getByText } = render(
				<MemoryRouter initialEntries={['/']} initialIndex={0}>
					<ReceiversDatagrid />
				</MemoryRouter>
			));
		});
				
		const rafaelCostaElement = getByText('Rafael Costa');
		act(() => {
			fireEvent.click(rafaelCostaElement);
		});

		const deleteButton = screen.getByTestId('delete-button');
		act(() => {
			fireEvent.click(deleteButton);
		});

		const confirmDeleteButton = screen.getByTestId('confirm-deletion');
		act(() => {
			fireEvent.click(confirmDeleteButton);
		});

		await waitFor(() => {
			jest.spyOn(receiversService, 'deleteReceiverReq').mockResolvedValueOnce({ status: 200 });
		});
	  
		await waitFor(() => {
		  const successMessage = screen.queryByText('Favorecido deletado com sucesso');
		  expect(successMessage).toBeTruthy();
		});
	});
});

describe('Form dialog', () => {
	it('should call the update API after click save button', async () => {
		const mockReceiversData = {
			data: [                 
				{
				"id": "0accb825-db24-4288-9f29-c88b9ec656da",
				"name": "Julia Silva",
				"email": "julia.silva@exemplo.com",
				"tax_id": "59738860000170",
				"branch": null,
				"account": null,
				"account_type": null,
				"bank_name": null,
				"bank_code": null,
				"pix_key": "9afe6a96-6b27-4acc-acf0-59159076c578",
				"pix_key_type": "aleatoria",
				"status": "rascunho",
				"created_at": "2023-10-25 16:00:10-03",
				"updated_at": "2023-10-25 16:00:10-03"
				},
				{
				"id": "37f7e55c-b2a9-4cc6-a8fd-8062925f86c8",
				"name": "Rafael Costa",
				"email": "rafael.costa@exemplo.com",
				"tax_id": "79915139000115",
				"branch": "3402",
				"account": "517638",
				"account_type": "Conta Poupança",
				"bank_name": "Santander",
				"bank_code": "033",
				"pix_key": "79915139000115",
				"pix_key_type": "cnpj",
				"status": "validado",
				"created_at": "2023-10-25 16:01:10-03",
				"updated_at": "2023-10-25 16:01:10-03"
				},
			]
		};
		receiversService.getReceiversReq.mockResolvedValue(mockReceiversData);
		jest.spyOn(receiversService, 'updateReceiversReq').mockResolvedValueOnce();
		
		let getByText;

		await act(async () => {
			({ getByText } = render(
				<MemoryRouter initialEntries={['/']} initialIndex={0}>
					<ReceiversDatagrid />
				</MemoryRouter>
			));
		});
				
		const juliaSilvaElement = getByText('Julia Silva');
		act(() => {
			fireEvent.click(juliaSilvaElement);
		});

		const saveButton = screen.getByTestId('save-button');
		act(() => {
			fireEvent.click(saveButton)
		});
				
		const id = "0accb825-db24-4288-9f29-c88b9ec656da"
		const body = {
			name:  "Julia Silva",
			email: "julia.silva@exemplo.com",
			tax_id: "59738860000170",
			pix_key: "9afe6a96-6b27-4acc-acf0-59159076c578",
			pix_key_type: "aleatoria",
			status: 'rascunho',
		};

		expect(receiversService.updateReceiversReq).toHaveBeenCalledWith(id, body);
		expect(receiversService.updateReceiversReq).toHaveBeenCalledTimes(1);
	});	
	it('should contain in the body of the request the change made to the form', async () => {
		const mockReceiversData = {
			data: [                 
				{
				"id": "0accb825-db24-4288-9f29-c88b9ec656da",
				"name": "Julia Silva",
				"email": "julia.silva@exemplo.com",
				"tax_id": "59738860000170",
				"branch": null,
				"account": null,
				"account_type": null,
				"bank_name": null,
				"bank_code": null,
				"pix_key": "9afe6a96-6b27-4acc-acf0-59159076c578",
				"pix_key_type": "aleatoria",
				"status": "rascunho",
				"created_at": "2023-10-25 16:00:10-03",
				"updated_at": "2023-10-25 16:00:10-03"
				},
				{
				"id": "37f7e55c-b2a9-4cc6-a8fd-8062925f86c8",
				"name": "Rafael Costa",
				"email": "rafael.costa@exemplo.com",
				"tax_id": "79915139000115",
				"branch": "3402",
				"account": "517638",
				"account_type": "Conta Poupança",
				"bank_name": "Santander",
				"bank_code": "033",
				"pix_key": "79915139000115",
				"pix_key_type": "cnpj",
				"status": "validado",
				"created_at": "2023-10-25 16:01:10-03",
				"updated_at": "2023-10-25 16:01:10-03"
				},
			]
		};
		receiversService.getReceiversReq.mockResolvedValue(mockReceiversData);
		jest.spyOn(receiversService, 'updateReceiversReq').mockResolvedValueOnce();
		
		let getByText;

		await act(async () => {
			({ getByText } = render(
				<MemoryRouter initialEntries={['/']} initialIndex={0}>
					<ReceiversDatagrid />
				</MemoryRouter>
			));
		});
				
		const juliaSilvaElement = getByText('Julia Silva');
		act(() => {
			fireEvent.click(juliaSilvaElement);
		});

		const newName = 'Julia Silva Novo';
		const nameInput = screen.getByTestId('Name');
		act(() => {
			fireEvent.change(nameInput, { target: { value: newName } });
		});

		const saveButton = screen.getByTestId('save-button');
		act(() => {
			fireEvent.click(saveButton);
		});

		const id = "0accb825-db24-4288-9f29-c88b9ec656da"
		const editedBody = {
			name:  newName,
			email: "julia.silva@exemplo.com",
			tax_id: "59738860000170",
			pix_key: "9afe6a96-6b27-4acc-acf0-59159076c578",
			pix_key_type: "aleatoria",
			status: 'rascunho',
		};

		await waitFor(() => {
			expect(receiversService.updateReceiversReq).toHaveBeenCalledWith(id, editedBody);
		});
	});
	it('should show success message after successful update', async () => {
		const mockReceiversData = {
			data: [                 
				{
				"id": "0accb825-db24-4288-9f29-c88b9ec656da",
				"name": "Julia Silva",
				"email": "julia.silva@exemplo.com",
				"tax_id": "59738860000170",
				"branch": null,
				"account": null,
				"account_type": null,
				"bank_name": null,
				"bank_code": null,
				"pix_key": "9afe6a96-6b27-4acc-acf0-59159076c578",
				"pix_key_type": "aleatoria",
				"status": "rascunho",
				"created_at": "2023-10-25 16:00:10-03",
				"updated_at": "2023-10-25 16:00:10-03"
				},
				{
				"id": "37f7e55c-b2a9-4cc6-a8fd-8062925f86c8",
				"name": "Rafael Costa",
				"email": "rafael.costa@exemplo.com",
				"tax_id": "79915139000115",
				"branch": "3402",
				"account": "517638",
				"account_type": "Conta Poupança",
				"bank_name": "Santander",
				"bank_code": "033",
				"pix_key": "79915139000115",
				"pix_key_type": "cnpj",
				"status": "validado",
				"created_at": "2023-10-25 16:01:10-03",
				"updated_at": "2023-10-25 16:01:10-03"
				},
			]
		};
		receiversService.getReceiversReq.mockResolvedValue(mockReceiversData);
		jest.spyOn(receiversService, 'updateReceiversReq').mockResolvedValueOnce();
		
		let getByText;

		await act(async () => {
			({ getByText } = render(
				<MemoryRouter initialEntries={['/']} initialIndex={0}>
					<ReceiversDatagrid />
				</MemoryRouter>
			));
		});
				
		const juliaSilvaElement = getByText('Julia Silva');
		act(() => {
			fireEvent.click(juliaSilvaElement);
		});

		const newName = 'Julia Silva Novo';
		const nameInput = screen.getByTestId('Name');
		act(() => {
			fireEvent.change(nameInput, { target: { value: newName } });
		});

		const saveButton = screen.getByTestId('save-button');
		act(() => {
			fireEvent.click(saveButton);
		});

		const id = "0accb825-db24-4288-9f29-c88b9ec656da"
		const editedBody = {
			name:  newName,
			email: "julia.silva@exemplo.com",
			tax_id: "59738860000170",
			pix_key: "9afe6a96-6b27-4acc-acf0-59159076c578",
			pix_key_type: "aleatoria",
			status: 'rascunho',
		};

		await waitFor(() => {
			jest.spyOn(receiversService, 'updateReceiversReq').mockResolvedValueOnce();
		});	
	  
		await waitFor(() => {
		  const successMessage = screen.queryByText('Favorecido alterado com sucesso');
		  expect(successMessage).toBeTruthy();
		});
	});
})

describe('Details dialog', () => {
	it('should call the patch API after click save button', async () => {
		const mockReceiversData = {
			data: [                 
				{
				"id": "0accb825-db24-4288-9f29-c88b9ec656da",
				"name": "Julia Silva",
				"email": "julia.silva@exemplo.com",
				"tax_id": "59738860000170",
				"branch": null,
				"account": null,
				"account_type": null,
				"bank_name": null,
				"bank_code": null,
				"pix_key": "9afe6a96-6b27-4acc-acf0-59159076c578",
				"pix_key_type": "aleatoria",
				"status": "rascunho",
				"created_at": "2023-10-25 16:00:10-03",
				"updated_at": "2023-10-25 16:00:10-03"
				},
				{
				"id": "37f7e55c-b2a9-4cc6-a8fd-8062925f86c8",
				"name": "Rafael Costa",
				"email": "rafael.costa@exemplo.com",
				"tax_id": "79915139000115",
				"branch": "3402",
				"account": "517638",
				"account_type": "Conta Poupança",
				"bank_name": "Santander",
				"bank_code": "033",
				"pix_key": "79915139000115",
				"pix_key_type": "cnpj",
				"status": "validado",
				"created_at": "2023-10-25 16:01:10-03",
				"updated_at": "2023-10-25 16:01:10-03"
				},
			]
		};
		receiversService.getReceiversReq.mockResolvedValue(mockReceiversData);
		jest.spyOn(receiversService, 'patchReceiverReq').mockResolvedValueOnce();
		
		let getByText;

		await act(async () => {
			({ getByText } = render(
				<MemoryRouter initialEntries={['/']} initialIndex={0}>
					<ReceiversDatagrid />
				</MemoryRouter>
			));
		});
				
		const rafaelCostaElement = getByText('Rafael Costa');
		act(() => {
			fireEvent.click(rafaelCostaElement);
		});

		const saveButton = screen.getByTestId('save-button');
		act(() => {
			fireEvent.click(saveButton)
		});
				
		const id = "37f7e55c-b2a9-4cc6-a8fd-8062925f86c8";	
		const email = "rafael.costa@exemplo.com";

		expect(receiversService.patchReceiverReq).toHaveBeenCalledWith(id, email);
		expect(receiversService.patchReceiverReq).toHaveBeenCalledTimes(1);
	});		
	it('should show success message after successful update', async () => {
		const mockReceiversData = {
			data: [                 
				{
				"id": "0accb825-db24-4288-9f29-c88b9ec656da",
				"name": "Julia Silva",
				"email": "julia.silva@exemplo.com",
				"tax_id": "59738860000170",
				"branch": null,
				"account": null,
				"account_type": null,
				"bank_name": null,
				"bank_code": null,
				"pix_key": "9afe6a96-6b27-4acc-acf0-59159076c578",
				"pix_key_type": "aleatoria",
				"status": "rascunho",
				"created_at": "2023-10-25 16:00:10-03",
				"updated_at": "2023-10-25 16:00:10-03"
				},
				{
				"id": "37f7e55c-b2a9-4cc6-a8fd-8062925f86c8",
				"name": "Rafael Costa",
				"email": "rafael.costa@exemplo.com",
				"tax_id": "79915139000115",
				"branch": "3402",
				"account": "517638",
				"account_type": "Conta Poupança",
				"bank_name": "Santander",
				"bank_code": "033",
				"pix_key": "79915139000115",
				"pix_key_type": "cnpj",
				"status": "validado",
				"created_at": "2023-10-25 16:01:10-03",
				"updated_at": "2023-10-25 16:01:10-03"
				},
			]
		};
		receiversService.getReceiversReq.mockResolvedValue(mockReceiversData);
		jest.spyOn(receiversService, 'patchReceiverReq').mockResolvedValueOnce();
		
		let getByText;

		await act(async () => {
			({ getByText } = render(
				<MemoryRouter initialEntries={['/']} initialIndex={0}>
					<ReceiversDatagrid />
				</MemoryRouter>
			));
		});
				
		const rafaelCostElement = getByText('Rafael Costa');
		act(() => {
			fireEvent.click(rafaelCostElement);
		});

		const newEmail = 'rafael.costa.novo@exemplo.com'
		const emailInput = screen.getByTestId('E-mail');
		act(() => {
			fireEvent.change(emailInput, { target: { value: newEmail } });
		});

		const saveButton = screen.getByTestId('save-button');
		act(() => {
			fireEvent.click(saveButton);
		});

		await waitFor(() => {
			jest.spyOn(receiversService, 'patchReceiverReq').mockResolvedValueOnce();
		});	
	  
		await waitFor(() => {
		  const successMessage = screen.queryByText('Favorecido alterado com sucesso');
		  expect(successMessage).toBeTruthy();
		});
	});
})
