import React, { Component } from 'react'

class CardList extends Component {
  render() {
    console.log(this.props.monsters)
    console.log('render from CardList')
    const { monsters } = this.props

    return (
      <div className='card-list'>
        {monsters.map((monster) => (
          <h2 key={monster.id}>{monster.name}</h2>
        ))}

        {/* <h5>Card list component</h5> */}
      </div>
    )
  }
}

export default CardList
