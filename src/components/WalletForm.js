import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAPItotal } from '../redux/actions';
import 'bulma/css/bulma.min.css';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { expenses, dispatch } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const expense = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
    };
    dispatch(getAPItotal(expense));
    this.handleClean();
  };

  handleClean = () => {
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div className="control">
        <form>
          <input
            data-testid="value-input"
            type="number"
            name="value"
            placeholder="Despesa"
            className="input is-info is-medium"
            value={ value }
            onChange={ this.handleChange }
          />
          <input
            data-testid="description-input"
            type="text"
            name="description"
            placeholder="Descrição da despesa"
            className="input is-info is-medium"
            value={ description }
            onChange={ this.handleChange }
          />
          <label htmlFor="paymentMethod">
            <span> Moeda: </span>
            <select
              id="currencyInput"
              data-testid="currency-input"
              className="select is light"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              {
                currencies.map((coin) => (
                  <option key={ coin } value={ coin }>
                    {coin}
                  </option>
                ))
              }
            </select>
          </label>

          <label htmlFor="methodInput">
            <span> Forma de Pagamento: </span>
            <select
              data-testid="method-input"
              id="methodInput"
              className="select is light"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tagInput">
            <span> Categoria: </span>
            <select
              data-testid="tag-input"
              id="tagInput"
              className="select is light"
              name="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button
            type="button"
            onClick={ this.handleSubmit }
          >
            Adicionar despesas
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
