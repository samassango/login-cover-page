import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/home';
class Routes extends React.Component<{}> {
  public render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/home" component={Home as any} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}
export default Routes;