import './components/styles/styles.css';

// Need to import react-router

import Header from './components/Header';
import Home from './components/home-page/Home';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
