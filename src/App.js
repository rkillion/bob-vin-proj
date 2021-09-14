import './index.css';
import { Route, Switch } from 'react-router';
import ViewPage from './components/ViewPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <ViewPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
