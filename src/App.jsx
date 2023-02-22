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

  handleClick() {
    console.log('handleClick')
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
          <button onClick={this.handleClick}>Handle Click</button>
        </header>
        <button className='pseudo-test'>Testing</button>
      </div>
    )
  }
}

export default App
