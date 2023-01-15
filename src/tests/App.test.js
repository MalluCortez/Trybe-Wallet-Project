import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('testa a página de Login', () => {
  test('Verifica se os inputs e os botões estão na tela', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByPlaceholderText(/digite sua senha/i);
    const btnLogin = screen.getByRole('button', {
      name: /entrar/i,
    });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(btnLogin).toBeInTheDocument();
  });
  test('Verifica se é possivel digitar nos inputs e se o botão de Login está funcionando', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByPlaceholderText(/digite sua senha/i);
    const btnLogin = screen.getByRole('button', {
      name: /entrar/i,
    });
    const email = 'teste@teste.com.br';

    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, 'password');

    expect(emailInput.value).toEqual(email);
    expect(emailInput.value).toEqual('password');

    userEvent.click(btnLogin);

    expect(history.location.pathname).tobe('/carteira');
  });
});

describe('testa o componente Header', () => {
  test('Verifica se todos os componentes estão sendo renderizados na página', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByPlaceholderText(/digite sua senha/i);
    const btnLogin = screen.getByRole('button', {
      name: /entrar/i,
    });
    const email1 = 'teste@teste.com';
    userEvent.type(emailInput, email1);
    userEvent.type(passwordInput, 'password');
    userEvent.click(btnLogin);

    const titleHeader = screen.getByRole('heading', {
      name: /trybe wallet/i,
    });
    const emailHeader = screen.getByRole('heading', {
      name: /maria\.santana@outlook\.com\.br/i,
    });
    const totalValue = screen.getByRole('heading', {
      name: /0\.00/i,
    });
    const coinBRL = screen.getByRole('heading', {
      name: /brl/i,
    });

    expect(titleHeader).toBeInTheDocument();
    expect(emailHeader).toBeInTheDocument();
    expect(totalValue).toBeInTheDocument();
    expect(coinBRL).toBeInTheDocument();
  });
});

describe('Testa o componente WalletForm', () => {
  test('Verifica se todos os componentes estão sendo renderizados na tela', () => {
    renderWithRouterAndRedux(<App />);
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByPlaceholderText(/digite sua senha/i);
    const btnLogin = screen.getByRole('button', {
      name: /entrar/i,
    });
    const email2 = 'teste@teste.com';
    userEvent.type(emailInput, email2);
    userEvent.type(passwordInput, 'password');
    userEvent.click(btnLogin);

    expect(global.fetch).toHaveBeenCalledWith('https://economia.awesomeapi.com.br/json/all');
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
