import styled from 'styled-components';
import theme from '../../shared-styles/theme';

const Container = styled.div`
	width: 100vw;
	height: 50px;
	background: ${theme.colors.white};
	
	img {
        margin-top: 10px;
        margin-left: 50px;		
	}
`;

export default Container;
