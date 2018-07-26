import React, { Component } from 'react'
import head from './img/headshot.jpg'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import NavMenu from './NavMenu'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div>
          <NavMenu />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
