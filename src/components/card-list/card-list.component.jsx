import React, { Component } from 'react'

class CardList extends Component {
  render() {
    // console.log('render')
    console.log(this.props)

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
