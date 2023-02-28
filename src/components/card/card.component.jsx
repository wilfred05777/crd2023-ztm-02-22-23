import React, { Component } from 'react'
import './card.styles.css'

class Card extends Component {
  render() {
    // const { monsters } = this.props
    const { id, name, email } = this.props.monsterCardLink

    return (
      <div className='card-container' key={id}>
        {/* robohash.org */}
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}

export default Card
