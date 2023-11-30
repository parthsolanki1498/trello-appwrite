import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event';

import LoginPage from '@/components/LoginPage';

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));



describe('Login Page', () => {
    const onSubmit = jest.fn()

    it('Should render Login Page', () => {
        render(<LoginPage/>);

        const header = screen.getByRole('heading');
        const headerText = 'Login';
        expect(header).toHaveTextContent(headerText);
    });

    it('Login functionality', async () => {

        render(<LoginPage/>);
        const emailTest = screen.getByTestId('emailTest');
        const passwordTest = screen.getByTestId('passwordTest');

        userEvent.type(emailTest, "admin");
        userEvent.type(passwordTest, "admin");

        userEvent.click(screen.getByTestId('loginButtonTest'));

        await waitFor(() => {
            expect(onSubmit);
        })
    })
})
