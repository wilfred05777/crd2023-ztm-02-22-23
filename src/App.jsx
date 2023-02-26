// @ts-nocheck
import React, { useState, Component } from 'react'

import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: []
    }

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
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={(event) => {
            console.log(event.target.value)

            const searchString = event.target.value.toLocaleLowerCase()
            //  [ { name: 'Leanne}, [{name: 'Yiuha'}]]
            const filterMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(
                // event.target.value
                searchString
              )
            })
            /// set
            this.setState(() => {
              return { monsters: filterMonsters }
            })
          }}
        />
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
