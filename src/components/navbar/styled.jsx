import styled from 'styled-components';
import theme from '../../shared-styles/theme';

const Container = styled.div`
	width: 100vw;
	height: 50px;
	background: ${theme.colors.green};
    display: flex;
    position: relative;

    section {
        margin-left: 50px;        
    }
	
	p {
        color: ${theme.colors.white};
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
	}
    
    div {
        width: 122px;
	    height: 3px;
        background: ${theme.colors.white};
        position: absolute;
        z-index: 2;
        top: 47px;
    }

    .closeButton {
        color: ${theme.colors.white};
        margin: 15px 30px 0 auto;
        cursor: pointer;
    }
`;

export default Container;