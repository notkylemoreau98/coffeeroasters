import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './components/styles/styles.css';

// Need to import react-router

import Header from './components/Header';
import Home from './components/home-page/Home';
import Footer from './components/Footer';

import About from "./components/about/About";
import Plan from './components/plan/Plan';

import scrollToTop from './components/scrollToTop';

function App() {
  return (
    <Router>

    <scrollToTop />
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
