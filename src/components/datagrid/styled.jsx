import styled from 'styled-components';
import theme from '../../shared-styles/theme';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: ${theme.colors.grayDark2};

    table {
        margin-bottom: 20px
    }

    thead {
        th {
            text-align: start;
            color: ${theme.colors.grayDark1};
            font-family: Roboto;
            font-size: 16px;          
            font-weight: 700;    
            padding-bottom: 12px;      
        }

        .receiverInput {
            margin-right: 23px;
        }
    }

    tbody {
        color: ${theme.colors.grayDark2};
        font-family: Roboto;
        font-size: 16px;
        font-weight: 300;   

        td{
            padding-bottom: 10px;
        }
    }

    .pagination{
        margin: 0 auto 30px auto;
        display: flex;

        button, h1{
            width: 9px;
            height: 19px;
            color: #3D8CD8;
            font-family: Roboto;
            font-size: 16px;
            font-weight: 400;
            background: transparent;
            border: none;
            outline: none;
            
        }
        
    }

    .clickable-name {
        background: transparent;
        border: none;
        outline: none;
        color: ${theme.colors.grayDark2};
        font-weight: 300;
    }

`;

export {
    Container,
}