import React from 'react';
import Filter from '../../../components/filter/filter';
import PlusButton from '../../../components/buttons/plusButton/plusButton';
import { useNavigate } from 'react-router-dom';

export default function Menu({ filter, setFilter }) {

	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate('/favorecido/novo');
	};

	return (
		<div className='menu'>
			<section>
				<p>Seus favorecidos</p>
				<PlusButton handleButtonClick={handleButtonClick} />
			</section>
			<div className='filterBox'>
				<Filter filter={filter} setFilter={setFilter} />
			</div>
		</div>
	);
}
