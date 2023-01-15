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
          <div className="select is-medium is light">
            <select
              name="currencyInput"
              data-testid="currency-input"
            >
              {
                currencies.map((value) => (
                  <option key={ value }>
                    { value }
                  </option>
                ))
              }
            </select>
          </div>
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
