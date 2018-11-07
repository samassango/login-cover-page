import * as React from 'react';
import './index.css';

interface ICurrentUserProps {
  currentUser: IUser
}
interface IUser {
  firstname: string;
  lastname: string;
  role: string;
  username: string;
}

class Landing extends React.Component<ICurrentUserProps> {
  public render() {
    return (<div>
      <h1>Current loggedin user is <br /><strong>{this.props.currentUser.firstname} {this.props.currentUser.lastname}</strong></h1>
    </div>
    );
  }
}

export default Landing;