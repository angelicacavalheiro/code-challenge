import React from "react";
import { render, fireEvent } from '@testing-library/react'
import Menu from './navbar'
import { MemoryRouter } from 'react-router-dom';

describe('Menu Options', () => {
    it('should redirect to the prop route when clicking the closeButton', async () => {
        const { getByTestId } = render(
			<MemoryRouter initialEntries={['/favorecido/novo']} initialIndex={0}>
				<Menu route={'/'} isBack={true} />
			</MemoryRouter>
        );    
        fireEvent.click(getByTestId('closeButton'));
        expect(window.location.pathname).toBe('/');
      });

      it('should display "Seus favorecidos" when isBack is false', () => {
		const { getByText } = render (
			<MemoryRouter initialEntries={['/favorecido/novo']} initialIndex={0}>
				<Menu route={'/'} isBack={false} />
			</MemoryRouter>
		);
        expect(getByText('Seus favorecidos')).toBeTruthy();
      });
})


