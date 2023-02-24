// @ts-nocheck
import React, { useState, Component } from 'react'

import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      // // 33. Monsters Rolodex - Mapping Arrays to Elements starts
      monsters: [
        {
          name: 'Linda'
        },
        {
          name: 'Frank'
        },
        {
          name: 'Jacky'
        },
        {
          name: 'Marley'
        }
      ]

      // // 33. Monsters Rolodex - Mapping Arrays to Elements ends

      // monster1: {
      //   name: 'Linda'
      // },
      // monster2: {
      //   name: 'Frank'
      // },
      // monster3: {
      //   name: 'Jacky'
      // }
      //// ======================
      //   name: { firstName: 'Wilfred', lastName: 'Bancairen' },
      //   company: 'JM Corp. Inc.'
    }
  }

  handleClick() {
    console.log('handleClick')
  }

  render() {
    return (
      <div className='App'>
        {/* 33. Monsters Rolodex - Mapping Arrays to Elements start */}

        {this.state.monsters.map((monster) => {
          return <h2>{monster.name}</h2>
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
