import styled from 'styled-components';
import theme from '../../../../shared-styles/theme';

const DeleteButtonStyle = styled.button`
	width: 161px;
	height: 50px;
    border-radius: 4px;
	background: ${theme.colors.redDark1};
    color: ${theme.colors.white};;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    border: none; 
    outline: none;
    opacity: ${props => props.selected.length > 0 ? 1 : 0.5};
    pointer-events: ${props => (props.selected.length > 0 ? 'auto' : 'none')};
`;

export default DeleteButtonStyle;