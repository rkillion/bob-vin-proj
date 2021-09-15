import './index.css';
import { Route, Switch } from 'react-router';
import ViewPage from './components/ViewPage';
import SubmitPage from './components/SubmitPage';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/submit">
          <SubmitPage />
        </Route>
        <Route exact path="/">
          <ViewPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
