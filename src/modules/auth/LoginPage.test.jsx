import { expect, test, describe } from 'vitest';
import LoginPage from './LoginPage';
import {render, screen} from '@testing-library/react'

describe('modules.auth.LoginPage', () => {
  it('it should render', async () => {
    render(<LoginPage />);
    const result = await screen.findByText('Login Page');
    expect(result).toBeDefined();
  });
});
