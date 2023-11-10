
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Container from './styled';

export default function Filter({ filter, setFilter }) {
  const handleInputChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Container>
      <div className="input-container">
        <input
			placeholder='Nome, CPF, agência ou conta'
			value={filter} 
			onChange={handleInputChange}
        />
        <AiOutlineSearch size={16} color='697680' className="search-icon" />
      </div>
    </Container>
  );
}
