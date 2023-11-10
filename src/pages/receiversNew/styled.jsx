import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	height: 100vh;

	.formBox {	
    	margin-left: 234px;
		width: 731px;
	}
`;

const ButtonsContainer = styled.div`
	width: 100%;
	padding-top: 80px;
	display: flex;

	div {
		width: 100%;
		display: flex;
		justify-content: end;		
		
		.delete-button {
			margin-right: 30px;
		}

		.back-button {
			margin-right: 273px;
		}

        .cancel-button {
            margin-right: 414px;

        }
	}	
`;

export {
	Container,
	ButtonsContainer
}