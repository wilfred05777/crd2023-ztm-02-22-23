// @ts-nocheck
import React, { useState } from 'react'

import CardList from './components/card-list/card-list.component'

import './App.css'
import SearchBox from './components/search-box/search-box.component'

const App = () => {
  console.log('render')
  const [searchField, setSearchField] = useState('') // [value, setValue]
  console.log(searchField)
  // console.log({ searchField })

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
    // setSearchField(searchField)
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monster'
      />

      {/* <CardList monsters={filteredMonsters} /> */}
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       monsters: [],
//       searchField: ''
//     }

//     // console.log('constructor')
//   }

//   componentDidMount() {
//     // console.log('componentDidMount')

//     // fetch(`https://pokeapi.co/api/v2/pokemon/ditto/name`)
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users }
//           }
//           //// example of call back function
//           //   () => {
//           //     console.log(this.state)
//           //   }
//         )
//       )
//   }

//   handleClick() {
//     console.log('handleClick')
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase()
//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   render() {
//     console.log('render from AppJS')

//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })

//     return (

//     )
//   }
// }

export default App
