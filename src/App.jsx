// @ts-nocheck
import React, { useState, Component } from 'react'

import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: 'Wilfred'
    }
  }

  render() {
    return (
      <div className='App'>
        <header className='header'>
          <h2>Hi, {this.state.name}!</h2>
          <p>hi, {this.state.name}</p>
          <button
            onClick={() => {
              this.setState({
                name: 'Rowena'
              })
            }}
          >
            change name
          </button>
        </header>
      </div>
    )
  }
}

export default App
