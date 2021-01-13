
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import {useState} from 'react'

function App() {

  let [counter, setCounter] = useState(0)
  
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact/>
        </Switch>
      </Router>

      <h4>{counter}</h4>
      <button onClick={()=>setCounter(counter + 1)}>Increment Counter</button>
     
    </>
  );
}

export default App;
