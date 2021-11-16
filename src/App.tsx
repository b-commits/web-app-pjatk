/** @jsxImportSource @emotion/react */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { appStyle } from './App.style';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Profile } from './components/Profile/Profile';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App" css={appStyle}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />

        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
