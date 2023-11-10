import React from "react";
import Container from "./styled";
import { useNavigate } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';

export default function Menu({isBack, route}) {

	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate(route);
  	};

    return (
      <>
        <Container>			
			{isBack ? (
				<IoCloseSharp size={21} onClick={handleButtonClick} className='closeButton' data-testid="closeButton"/>
			) : (
				<section>
					<p>Seus favorecidos</p>
					<div></div>
				</section>
			)}	
        </Container>        
      </>
    );
}
