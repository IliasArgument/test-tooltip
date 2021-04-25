
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Tooltip from '../Tooltip/Tooltip';
import Collection from '../Collection/Collection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
          <Tooltip/>
          </Route>
          <Route path='/collection'>
         <Collection/>
          </Route>
          <Route>
          <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
