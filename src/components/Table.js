import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expencieDel, edit } from '../redux/actions';

class Table extends Component {
  handleClick = (id) => {
    const { dispatch, expenses } = this.props;
    const data = expenses.filter((expense) => expense.id !== id);
    dispatch(expencieDel(data));
  };

  handleEdit = (element) => {
    const { dispatch } = this.props;
    dispatch(edit(element.target.id));
  };

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
          {expenses.map((i) => (
            <tr key={ i.id }>
              <td>{i.description}</td>
              <td>{i.tag}</td>
              <td>{i.method}</td>
              <td>{((+i.value)).toFixed(2)}</td>
              <td>{i.exchangeRates[i.currency].name}</td>
              <td>{((+i.exchangeRates[i.currency].ask)).toFixed(2)}</td>
              <td>{((+i.value) * (+i.exchangeRates[i.currency].ask)).toFixed(2)}</td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.handleClick(i.id) }
                >
                  Deletar
                </button>
                <button
                  type="button"
                  data-testid="edit-btn"
                  id={ i.id }
                  onClick={ (element) => this.handleEdit(element) }
                >
                  Editar
                </button>
              </td>
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
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
