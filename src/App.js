import './App.css';
import Navigation from './components/index';
import {BrowserRouter as Router} from "react-router-dom"


function App() {
  return (
    <Router> 
      <Navigation />
    </Router>
  );
}

export default App;
