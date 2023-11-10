import styled from 'styled-components';
import theme from './theme';

const StatusButton = styled.button `
    width: 188px;
    height: 30px;
    border-radius: 100px;
    background: ${props => props.status == 'rascunho' ? theme.colors.grayDark1 : theme.colors.blue };
    color: ${theme.colors.white};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    cursor: default;
`

export {
    StatusButton
}