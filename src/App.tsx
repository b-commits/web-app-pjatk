import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './components/About/About';
import { Home } from './components/Home/Home';

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
