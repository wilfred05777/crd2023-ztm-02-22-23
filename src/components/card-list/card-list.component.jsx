import React, { Component } from 'react'
import './cart-list.styles.css'
import Card from '../card/card.component'

class CardList extends Component {
  render() {
    // test
    // console.log(this.props.monsters)
    // console.log('render from CardList')
    const { monsters } = this.props

    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          // deconstruction for optimization
          const { email, id, name } = monster
          return <Card monsterCardLink={monster} />
        })}
      </div>
    )
  }
}

export default CardList
