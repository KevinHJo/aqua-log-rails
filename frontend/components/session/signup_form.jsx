import React from 'react';
import {withRouter} from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.removeSessionErrors();
  }

  componentDidUpdate(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
      this.setState({errors: nextProps.errors})
    }
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.password === this.state.password2) {
      let user = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2,
      };

      this.props.signup(user, this.props.history);
    } else {
      // let errors = {...this.state.errors};
      // errors.passwordMatch = 'Passwords don\'t match'
      // this.setState({errors: errors})
      this.props.receiveErrors({password: 'Passwords don\'t match'})
    }
    
  }

  renderErrors() {
    
    return (
      <ul id='session-errors'>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`} className='session-error'>
            {`${this.props.errors[error]}`}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div id='signup-page'>
        <img src="https://raw.githubusercontent.com/KevinHJo/aqua-log/main/frontend/public/assets/images/q-u-i-0G01UI1MQhg-unsplash.jpg" alt="" />
        <form onSubmit={this.handleSubmit} id='session-form'>
          <h1>Signup</h1>

          {this.renderErrors()}

          <div className='form-input'>
            <label htmlFor='username'>Username: </label>
            <input type="text"
              name='username'
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
            />
          </div>

          <div className='form-input'>
            <label htmlFor="email">Email: </label>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
          </div>
            
          <div className='form-input'>
            <label htmlFor="password">Password: </label>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
          </div>
          
          <div className='form-input'>
            <label htmlFor="password2">Confirm Password: </label>
            <input type="password"
              value={this.state.password2}
              onChange={this.update('password2')}
              placeholder="Confirm Password"
            />
          </div>

          <input id='session-form-submit' type="submit" value="Signup"/>
        </form>
      </div>
      
    );
  }
}

export default withRouter(SignupForm);