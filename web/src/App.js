import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { Navbar } from './components/NavBar';
import Home from './pages/Home';
import '../src/styles/App.css'

const App = ({dispatch}) => {
  return(
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
