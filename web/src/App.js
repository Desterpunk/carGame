import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { Navbar } from './components/NavBar';
import Home from './pages/Home';
import '../src/styles/App.css'
import Footer from './components/Footer';
import Game from './pages/Game';
import Games from './pages/Games';
import GameRunning from './pages/GameRunning';

const App = ({dispatch}) => {
  return(
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/games" component={Games} />
            <Route exact path="/gamerunning" component={GameRunning} />
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
