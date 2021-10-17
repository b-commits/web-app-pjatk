import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { About } from "./components/About/About";
import { Register } from "./components/Register/Register";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
