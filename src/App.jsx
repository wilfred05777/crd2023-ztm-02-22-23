// @ts-nocheck
import React, { useState, Component } from 'react'

import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: []
    }
    // 39. Monsters Rolodex - Renders & Re-renders in React 
    // flow of react class
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users }
          },
          () => {
            console.log(this.state)
          }
        )
      )
  }

  handleClick() {
    console.log('handleClick')
  }

  render() {
    console.log('render')
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h2>{monster.name}</h2>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App
