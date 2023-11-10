import styled from 'styled-components';
import theme from '../../shared-styles/theme';

const Container = styled.div`
    .input-container {
        display: flex;
        align-items: center;
        border-radius: 8px;
        background: ${theme.colors.white};
    }

    .search-icon {
        margin-right: 8px;
    }

    input {
        width: 226px;
        height: 31px;
        border-radius: 8px;
        border: none; 
        outline: none;
        color: ${theme.colors.grayDark2};
        font-family: Roboto;
        font-size: 14px;
        font-weight: 300;
        padding-left: 11px;
     }

    input::placeholder {
        color: ${theme.colors.grayDark1};
        font-family: Roboto;
        font-size: 14px;
        font-weight: 300;
    }
`;

export default Container;