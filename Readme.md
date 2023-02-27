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
