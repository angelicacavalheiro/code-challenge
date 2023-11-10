import styled from 'styled-components';
import theme from '../../../shared-styles/theme';

const Container = styled.div`
	.save-button {
        width: 158px;
        height: 50px;
        border-radius: 4px;
        background: ${theme.colors.blueLight1};
        outline: none;

        color: ${theme.colors.white};
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        &:hover {
            background: ${theme.colors.blueDark1}; 
        }
    }

    .delete-button {
        width: 62px;
        height: 50px;   
        border-radius: 4px;
        background: ${theme.colors.redDark1};
        outline: none;
    }

    .cancel-button {
        width: 158px;
        height: 50px;     
        border-radius: 4px;
        border: 1px solid ${theme.colors.green};
        outline: none;
        
        color: ${theme.colors.green};
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
    }

    .back-button {
        width: 158px;
        height: 50px;     
        border-radius: 4px;
        border: 1px solid ${theme.colors.green};
        outline: none;
        
        color: ${theme.colors.green};
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
    }

    .default-button {
        width: 158px;
        height: 50px;
        border-radius: 4px;
        background: ${theme.colors.blue};
        outline: none;

        color: ${theme.colors.white};
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;

        &:hover {
            background:${theme.colors.blueDark1};
        }
    }   

    .confirm-deletion {
        width: 158px;
        height: 50px;
        border-radius: 4px;
        background: ${theme.colors.redDark1};
        outline: none;

        color: ${theme.colors.white};
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
    }
`;

export {
  Container,
}
