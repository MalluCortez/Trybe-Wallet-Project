import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'bulma/css/bulma.min.css';

class WalletForm extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <div className="control">
        <form>
          <input
            data-testid="value-input"
            type="number"
            name="valueInput"
            placeholder="Despesa"
            className="input is-info is-medium"
          />
          <input
            data-testid="description-input"
            type="text"
            name="descriptionInput"
            placeholder="Descrição da despesa"
            className="input is-info is-medium"
          />
          <label htmlFor="paymentMethod">
            <span> Moeda: </span>
            <select
              id="currencyInput"
              data-testid="currency-input"
              className="select is light"
            >
              {
                currencies.map((value) => (
                  <option key={ value }>
                    {value}
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
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  editor: state.wallet.editor,
  idToEdit: state.wallet.idToEdit,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
