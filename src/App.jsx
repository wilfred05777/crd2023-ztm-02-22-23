// @ts-nocheck
import React, { useState, useEffect } from 'react'

import CardList from './components/card-list/card-list.component'

import './App.css'
import SearchBox from './components/search-box/search-box.component'

const App = () => {
  // Hook start initialization/ declaration useState

  // A
  const [searchField, setSearchField] = useState('') // [value, setValue]

  // B
  const [monsters, setMonsters] = useState([])
  // D -
  const [filteredMonsters, setFilterMonsters] = useState(monsters)

  // C
  const [stringField, setStringField] = useState('')

  // console.log('render')
  console.log('rendered')
  /// the rendered that run twice and blurred in console react-developer tools 

  // B-useEffect
  useEffect(() => {
    console.log('fetches monsters useEffect firing')

    // B-2.) we move it here
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])

  // D-useEffect -
  useEffect(() => {
    // D-1: renaming  filteredMonsters to newFilteredMonsters
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    //  setFilterMonsters is from
    setFilterMonsters(newFilteredMonsters)

    console.log('newFilteredMonsters effect Fired')

    // filter whenever  monsters and searchFiled changes
  }, [monsters, searchField])

  // B-1.) in react functional component creates without the useEffect hooks it creates infinite re-rendering, that is why to avoid this we need to use the useEffect hooks which will avoid disabled the trigger of infinite loop we move this fetch Api inside the call callback
  //// fetch(`https://jsonplaceholder.typicode.com/users`)
  ////   .then((response) => response.json())
  ////   .then((users) => setMonsters(users))

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
    // setSearchField(searchField)
  }

  const onStringChange = (event) => {
    setStringField(event.target.value)
  }

  // C-3.) also for this filteredMonsters call in order for it, not to rerender each time you make a search we move it to a D-useEffect to become more efficient
  //  renaming it to
  // const filteredMonsters = monsters.filter((monster) => {
  //   return monster.name.toLocaleLowerCase().includes(searchField)
  // })

  // console.log(filteredMonsters)
  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monster'
      />

      {/* C */}
      {/* <SearchBox
        className=''
        onChangeHandler={onStringChange}
        placeholder='set String'
      /> */}

      <CardList monsters={filteredMonsters} />
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
