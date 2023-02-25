// @ts-nocheck
import React, { useState, Component } from 'react'

import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      // 37. Monsters Rolodex - Lifecycle Method: componentDidMount start
      monsters: []
    }
  }

  componentDidMount() {
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
    // .then((users) => console.log(users))
  }
  // 37. Monsters Rolodex - Lifecycle Method: componentDidMount end

  handleClick() {
    console.log('handleClick')
  }

  render() {
    return (
      <div className='App'>
        {/* 33. Monsters Rolodex - Mapping Arrays to Elements start */}

        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h2>{monster.name}</h2>
            </div>
          )
        })}

        {/* <h2>{this.state.monster1.name}</h2>
        <h2>{this.state.monster2.name}</h2>
        <h2>{this.state.monster3.name}</h2> */}
        {/* 33. Monsters Rolodex - Mapping Arrays to Elements end*/}

        {/* <header className='header'>
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
        </header> */}
      </div>
    )
  }
}

export default App
