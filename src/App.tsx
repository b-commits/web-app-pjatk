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
import { Dashboard } from './components/Dashboard/Dashboard';
import { AuthContext } from './context/AuthContext';
import { useState } from 'react';

export const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
        <Navbar />
        <div className="App" css={appStyle}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
        <Footer />
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
