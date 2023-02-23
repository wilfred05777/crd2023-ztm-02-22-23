// @ts-nocheck
import React, { useState, Component } from 'react'

import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: { firstName: 'Wilfred', lastName: 'Bancairen' },
      company: 'JM Corp. Inc.'
    }
  }

  handleClick() {
    console.log('handleClick')
  }

  render() {
    return (
      <div className='App'>
        <header className='header'>
          <h2>
            Hi, {this.state.name.firstName} {this.state.name.lastName}, I work
            at {this.state.company}!
          </h2>

          <button
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: { firstName: 'Julian Manuel', lastName: 'Bancairen' }
                  }
                },
                // callback in class function
                () => {
                  console.log(this.state)
                }
              )
              // this.setState({
              //   // state and shallow Merge
              //   name: { firstName: 'Rowena', lastName: 'Alicando' }
              // })
              // console.log(this.state)
            }}
          >
            change name
          </button>
        </header>
        <button className='pseudo-test'>Testing</button>
      </div>
    )
  }
}

export default App
