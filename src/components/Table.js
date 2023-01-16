import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((i, index) => (
            <tr key={ index }>
              <td>{i.description}</td>
              <td>{i.tag}</td>
              <td>{i.method}</td>
              <td>{((+i.value)).toFixed(2)}</td>
              <td>{i.exchangeRates[i.currency].name}</td>
              <td>{((+i.exchangeRates[i.currency].ask)).toFixed(2)}</td>
              <td>{((+i.value) * (+i.exchangeRates[i.currency].ask)).toFixed(2)}</td>
              <td>Real</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (globalState) => ({
  expenses: globalState.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(Table);
