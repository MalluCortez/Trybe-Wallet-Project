import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, totalExpenses } = this.props;
    return (
      <header>
        <h1> Trybe Wallet </h1>
        <h3 data-testid="email-field">{ email }</h3>
        <h4 data-testid="total-field">
          { totalExpenses.toFixed(2) }
        </h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpenses: state.wallet.expenses
    .reduce((total, curr) => (
      total + (+curr.value * curr.exchangeRates[curr.currency].ask)
    ), 0),
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
