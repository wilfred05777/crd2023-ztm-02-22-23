// @ts-nocheck
import React, { useState, Component } from 'react'

import CardList from './components/card-list/card-list.component'

import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }

    // console.log('constructor')
  }

  componentDidMount() {
    // console.log('componentDidMount')

    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users }
          }
          //   () => {
          //     console.log(this.state)
          //   }
        )
      )
  }

  handleClick() {
    console.log('handleClick')
  }

  //  move the anonymous function and in to the class it will be initialize once
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    console.log('render from AppJS')

    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      // return monster.name.toLocaleLowerCase().includes(searchField) /// error , strange error CONFUSE why it was error
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={onSearchChange}
          // onChange={this.onSearchChange}
        />

        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h2>{monster.name}</h2>
            </div>
          )
        })} */}
        <CardList monsters={filteredMonsters} />
        {/* <CardList
          monsters={'I am a monster'}
          anything={['a', 'b', 1]}
          // monster={filteredMonsters}
        /> */}
      </div>
    )
  }
}

export default App
