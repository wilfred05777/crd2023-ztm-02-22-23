# Learning or ReLearning

<!-- ES6  Promises-->

```js
const MyPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve('I have succeded!')
    }, 1000)
  } else {
    reject('I have failed')
  }
})

MyPromise.then((value) => console.log(value)).catch((rejectedValue) =>
  console.log(rejectedValue)
)

//
const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      return resolve('Resolved')
    }, 100)
  } else {
    return reject('Rejected')
  }
})

myPromise
  .then((value) => console.log(value))
  .then((value) => console.log(value))
  .catch((value) => console.log(value))
```

```js
class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users }
        })
      )
  }

  render() {
    const filterMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    })
    return (
      <div className='App'>
        <input
          type='search'
          placeholder='search monsters'
          onChange={(e) => {
            const searchField = e.target.value.toLocaleLowerCase()
            this.setState(() => {
              return { searchField }
            })
          }}
        />

        {filterMonsters.map((monster) => {
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
```

```js
// 44. Monsters Rolodex - Optimizations start
<input
  type='search'
  placeholder='search monsters'
  //And an anonymous function is a function that is not stored anywhere in a variable.
  // What this means is that when JavaScript runs this code and it comes across this line, what it sees
  onChange={(e) => {
    const searchField = e.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }}
/>
```

```js
// Optimization moving out the anonymous function and making it a variable
onSearchChange = (event) => {
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
}
```

```js
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

  //  move the anonymous function and in to the class it will be initialize once
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    console.log('render')

    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
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
// 44. Monsters Rolodex - Optimizations end
```

```js
// 49. Monsters Rolodex - SearchBox Component

// App.jsx
// @ts-nocheck
import React, { useState, Component } from 'react'

import CardList from './components/card-list/card-list.component'

import './App.css'
import SearchBox from './components/search-box/search-box.component'

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
        {/* <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={onSearchChange}
          // onChange={this.onSearchChange}
        /> */}
        <SearchBox
          className='search-box'
          onChangeHandler={onSearchChange}
          placeholder='search monster'
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



// card-list.component.js
import React, { Component } from 'react'

class CardList extends Component {
  render() {
    console.log(this.props.monsters)
    console.log('render from CardList')
    const { monsters } = this.props

    return (
      <div>
        {monsters.map((monster) => (
          <h2 key={monster.id}>{monster.name}</h2>
        ))}

        {/* <h5>Card list component</h5> */}
      </div>
    )
  }
}

export default CardList

// 49. Monsters Rolodex - SearchBox Component end
```
