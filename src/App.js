import { Route, Redirect, Switch } from 'react-router';

import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/details/:id'} component={DetailsPage}/>
        <Route path={'*'}>
          <Redirect to={'/'}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
