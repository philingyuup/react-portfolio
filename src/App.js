import React from 'react'
import './App.scss';
import GradientButton from './components/util/GradientButton'
import GradientLink from './components/util/GradientLink'
import Header from './components/header/Header'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {


  return (
    <Router>
      <div id='App' >
        <Header />
          <GradientButton > Hello </GradientButton>

          <GradientLink >
            Hello
          </GradientLink>
        <Switch>

        </Switch>
      </div>
    </Router>
  )
}

export default App;
