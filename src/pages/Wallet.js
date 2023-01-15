import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import currAPI from '../redux/services/currAPI';
import { getRequestCurr } from '../redux/actions/index';

class Wallet extends React.Component {
  state = {
    currencies: [],
  };

  componentDidMount() {
    this.fetch();
  }

  saveCoins = () => {
    const { dispatch } = this.props;
    const { currencies } = this.state;
    dispatch(getRequestCurr(currencies));
  };

  fetch = async () => {
    const currencies = await currAPI.fetchCurr();
    this.setState({
      currencies,
    }, this.saveCoins);
  };

  render() {
    return (
      <div>
        <Header />
        <WalletForm />
      </div>
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Wallet);
