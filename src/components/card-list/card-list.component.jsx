import React, { Component } from 'react'
import './cart-list.styles.css'
import Card from '../card/card.component'

class CardList extends Component {
  render() {
    console.log(this.props.monsters)
    console.log('render from CardList')
    const { monsters } = this.props

    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          // deconstruction for optimization
          const { email, id, name } = monster
          return (
            <Card monsterCardLink={monster} />
            // <div className='card-container' key={id}>
            //   {/* robohash.org */}
            //   <img
            //     src={`https://robohash.org/${id}?set=set2&size=180x180`}
            //     alt={`monster ${name}`}
            //   />
            //   <h2>{name}</h2>
            //   <p>{email}</p>
            // </div>
          )
        })}

        {/* <h5>Card list component</h5> */}
      </div>
    )
  }
}

export default CardList
