import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';

export const App = () => {
  return (
    <Router>
      <Navbar />
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
