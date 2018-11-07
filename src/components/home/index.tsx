
import * as React from 'react';
import { connect } from 'react-redux';
import Landing from '../landing';
import Login from '../login';
import './index.css';


interface IAuthProps {
  login: object
}

interface IUser {
  firstname: string;
  lastname: string;
  role: string;
  username: string;
}

class Home extends React.Component<IAuthProps> {
  public render() {
    if (this.props.login !== null) {
      return (
        <Landing currentUser={this.props.login as IUser} />
      );
    } else {
      return (
        <Login />
      );
    }
  }
}
const mapStateToProps = (state: any) => {
  return {
    login: state.login.currentUser
  }
}

export default connect(mapStateToProps, null)(Home);