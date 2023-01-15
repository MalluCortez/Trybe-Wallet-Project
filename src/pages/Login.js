import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../redux/actions';
import 'bulma/css/bulma.min.css';

const passwordNumberMin = 6;

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { dispatch, history } = this.props;
    dispatch(userLogin(email));
    history.push('/carteira');
  };

  render() {
    const { email, password } = this.state;
    return (
      <main>
        <form>
          <input
            className="input is-info is-medium"
            data-testid="email-input"
            type="email"
            name="email"
            value={ email }
            placeholder="Digite seu email"
            onChange={ this.handleChange }
          />
          <input
            className="input is-info is-medium"
            data-testid="password-input"
            type="password"
            name="password"
            value={ password }
            placeholder="Digite sua senha"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            onClick={ this.handleSubmit }
            className="button is-info"
            disabled={ password.length < passwordNumberMin || !email.match(
              /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm,
            ) }
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
