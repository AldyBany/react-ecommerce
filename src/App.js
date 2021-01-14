
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  let [counter, setCounter] = useState(0)

  const fectData = () =>{
    axios.get('https://jsonplaceholder.typicode.com/')
    .then(res => {
      // handle success
      console.log(res);
      return res
    })
    .catch(err =>{
      // handle error
      console.error(err);
    })
  }

  
  
  
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

      <button onClick={()=>fectData}>Get Data</button>
     
    </>
  );
}

export default App;
