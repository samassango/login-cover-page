
import * as React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/login';

import './index.css';

interface ILogin {
  password: string;
  username: string;
}


interface ILoginProps {
  loginUser: (params: ILogin) => void,
  login: object,
  loginError: IErrorResponse,
  attempt: number
}

interface IErrorResponse {
  message: string;
  statusCode: number;
}

interface IErrorMsg {
  errorMsg: string;
}

class Login extends React.Component<ILoginProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      errorMsg: '',
      password: '',
      username: '',
    };
    this.handlePasswordOnChange = this.handlePasswordOnChange.bind(this);
    this.handleUsernameOnChange = this.handleUsernameOnChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
  }

  public handlePasswordOnChange(event: any): void {
    this.setState({ password: event.target.value, errorMsg: '' });
  }

  public handleUsernameOnChange(event: any): void {
    this.setState({ username: event.target.value, errorMsg: '' });
  }

  public handleLogin = (): void => {
    if (this.handleInputs()) {
      return this.props.loginUser((this.state) as ILogin);
    }
  }

  public handleInputs(): boolean {
    const login = (this.state) as ILogin;
    if (login.username === '') {
      this.setState({ errorMsg: 'Email address cannot be empty.' });
      return false;
    } else {
      if (login.password === '') {
        this.setState({ errorMsg: 'Password cannot be empty.' });
        return false;
      } else {
        return true;
      }
    }

  }
  public render() {
    let errorMsg;
    if (this.props.loginError !== null) {
      if (this.props.attempt < 4) {
        if (this.props.loginError.statusCode === 404) {
          errorMsg = (<div className="alert alert-danger">
            <strong>Invalid User!</strong> Account doesn't exist.
    </div>);
        } else {
          if (this.props.loginError.statusCode === 400) {
            errorMsg = (<div className="alert alert-danger">
              <strong>Login Fail!</strong> Attempt no {this.props.attempt}  Fail to login.
    </div>);
          }
        }
      } else {
        errorMsg = (<div className="alert alert-danger">
          <strong>Account Blocked!</strong><br /> Attempted to login {this.props.attempt} times. Contact the administrator.
</div>);
      }
    }

    return (
      <div id="LoginForm">
        <div className="container">
          <h1 className="form-heading">
            <img width="200" src={require('../../images/ulogo.png')} alt="" />
          </h1>

          {errorMsg}

          {((this.state) as IErrorMsg).errorMsg !== '' &&
            <div className="alert alert-danger">
              <strong>Error!</strong><br /> {((this.state) as IErrorMsg).errorMsg}
            </div>}

          {this.props.attempt < 4 &&
            <div className="login-form">
              <div className="main-div">
                <div className="panel">
                  <h2> Admin Login</h2>
                  <p>Please enter your email and password</p>
                </div>

                <div id="Login">

                  <div className="form-group">


                    <input type="email" className="form-control" id="inputEmail" placeholder="Email Address"
                      onChange={this.handleUsernameOnChange} />

                  </div>

                  <div className="form-group">

                    <input type="password" className="form-control" id="inputPassword" placeholder="Password"
                      onChange={this.handlePasswordOnChange} />

                  </div>

                  {/* <div className="forgot">
                    <a href="#">Forgot password?</a>
                  </div> */}
                  <button onClick={this.handleLogin} className="btn btn-primary">Login</button>

                </div>
              </div>
              <p className="botto-text"> Designed by &copy; 2018 Sibusiso</p>
            </div>}
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    attempt: state.login.attempt,
    login: state.login.currentUser,
    loginError: state.login.userError
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    loginUser: (params: any) => dispatch(loginUser(params))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);