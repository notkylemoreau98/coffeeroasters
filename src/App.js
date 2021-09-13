import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './components/styles/styles.css';

import Header from './components/Header';
import Home from './components/home-page/Home';
import Footer from './components/Footer';
import About from "./components/about/About";
import Plan from './components/plan/Plan';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>

    <ScrollToTop />
    <div className="app">
      <Switch>

        <Route path="/plan">
          <Header />
          <Plan />
          <Footer />
        </Route>

        <Route path="/about">
          <Header />
          <About />
          <Footer />
        </Route>

        <Route path="/">
          <Header />
          <Home />
          <Footer />
        </Route>

      </Switch>
    </div>

    </Router>
  );
}

export default App;
