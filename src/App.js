import React from 'react'

import './App.scss';

import GradientButton from './components/util/GradientButton'
import GradientLink from './components/util/GradientLink'
import Header from './components/header/Header'
import SideNav from './components/sidenav/SideNav'
import Main from './components/main/Main'
import Home from './components/main/page/Home'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


const App = () => {


  return (
    <Router>
      <div id='App' >
        <Header >
          <SideNav />
        </Header>
        <Main >
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </Main>
      </div>
    </Router>
  )
}

export default App;
