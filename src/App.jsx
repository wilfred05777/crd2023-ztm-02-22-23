// @ts-nocheck
import React, { useState, Component } from 'react'

import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],

      searchField: ''
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

    // const searchString = event.target.value.toLocaleLowerCase()

    const filteredMonsters = this.state.monsters.filter((monster) => {
      // return monster.name.toLocaleLowerCase().includes(searchString)
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    })

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={(event) => {
            // console.log({ startingArray: this.state.monsters })
            const searchField = event.target.value.toLocaleLowerCase()

            this.setState(
              () => {
                // return { monsters: filterMonsters }
                // return { searchField: filteredMonsters }
                return { searchField }
              },
              () => {
                // console.log({ endingArray: this.state.monsters })
              }
            )
          }}
        />
        {/* {this.state.monsters.map((monster) => { */}
        {filteredMonsters.map((monster) => {
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
