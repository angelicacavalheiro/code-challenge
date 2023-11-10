import styled from 'styled-components';
import theme from '../../shared-styles/theme';

const Container = styled.div`
    font-family: Roboto;

    input, select {
        width: 349px;
        height: 34px;
        border-radius: 4px;
        border: 2px solid #EEE;
        background: ${theme.colors.white};
        outline: none;
        padding-left: 11px;
        color: ${theme.colors.gray};
        font-size: 14px;
        font-weight: 300;
        display: flex;        
    }

    select {
        height: 39px;
        width: 366px;
    }

    section {
        display: flex;

        .nome {
            margin-right: 33px;
        }        

        .cpfCnpj {
            width: 174px;
        }        
    }

    label {
        color: ${theme.colors.gray};
        font-size: 14px;
        font-weight: 300;    
    }

    div {
        margin-bottom: 8px;
        margin-top: 30px;
    }

    p {
        color: ${theme.colors.grayDark2};
        font-size: 28px;
        font-weight: 300;
        margin: 0px;
        margin-top: 30px;
    }    
`;

export {
    Container,
} 