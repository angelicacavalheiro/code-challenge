import styled from 'styled-components';
import theme from '../../shared-styles/theme';

const Container = styled.div`
	width: 100vw;
	background: ${theme.colors.white};

    .menu {
        background: ${theme.colors.grayLight1};
        height: 112px;
        display: flex;
        justify-content: space-between;
      
        section {            
            display: flex;
            margin-left: 50px;
            align-items: center;

    
            p {
                margin-right: 10px;                  
                color: ${theme.colors.gray};
                font-family: Roboto;
                font-size: 28px;        
                font-weight: 300;
            }
        }

        .filterBox {
            margin-right: 50px;
            display: flex;
            align-items: center;        
        }
    }

    .gridBox {
        margin: 39px 50px 5px 50px;
      
        section {
          margin-bottom: 39px;
        }
      
        .image-container {
          text-align: center;
        }
      }
`;


const ContentContainer = styled.div`
	h4 {
		color: ${theme.colors.gray};
		font-family: Roboto;
		font-size: 16px;
		font-weight: 300;
		margin: 30px 0 14px 0; 
	}

	h5 {
		color:  ${theme.colors.grayDark2};
		font-family: Roboto;
		font-size: 24px;
		font-weight: 300;
		margin: 0px; 
	}

	h6 {
		color:  ${theme.colors.grayDark2};
		font-family: Roboto;
		font-size: 14px;
		font-weight: 300;
		margin: 30px 0 8px 0; 
	}

	input {
		width: 314px;
		height: 34px;
		border-radius: 4px;
		border: 2px solid ${theme.colors.grayLight1};
		background: ${theme.colors.white};

		color: ${theme.colors.gray};
		font-family: Roboto;
		font-size: 14px;
		font-weight: 300;
		padding-left: 11px;
	}

	section {
		display: flex;

		.firstElement {
			width: 195px;
			margin-right: 130px;
		}
	}    
`;

const ContentDeleteContainer = styled.div`
	h4 {
		color:  ${theme.colors.grayDark2};
		font-family: Roboto;
		font-size: 22px;
		font-weight: 400;
		margin: 0px;
		margin-top: 20px;
	}

	h5 {
		color:  ${theme.colors.grayDark2};
		font-family: Roboto;
		font-size: 18px;
		font-weight: 400;
		line-height: 25px; 
		margin: 0px;
	}

	h6 {
		color:  ${theme.colors.grayDark2};
		font-family: Roboto;
		font-size: 18px;
		font-weight: 300;
		line-height: 25px; 
		margin: 0px 0px 20px 0px;
	}
`;

const ButtonsDeleteContainer = styled.div`
	width: 100%;
	padding: 20px; 24px;
	display: flex;

	div {
		width: 100%;
		display: flex;
		justify-content: space-between;		
	}
	
`;

const ButtonsDetailsContainer = styled.div`
	width: 100%;
	padding: 20px; 24px;
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
	}	
`;

export {
  Container,
  ContentContainer,
  ContentDeleteContainer,
  ButtonsDeleteContainer,
  ButtonsDetailsContainer
}
