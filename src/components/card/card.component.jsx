import React from 'react'
import './card.styles.css'

/// demo 1: you can use this kind of destructuring
const Card = ({ monsterCard }) => {
  //
  /// demo 2: you can use this, harder to read says the instructor
  // const Card = ({ monster: { id, name, email } }) => {
  // const { id, name, email } = this.props.monsterCardLink

  //// demo 1 - deconstruction
  const { id, name, email } = monsterCard

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

export default Card

// import React, { Component } from 'react'
// import './card.styles.css'

// class Card extends Component {
//   render() {
//     // test
//     // const { monsters } = this.props
//     const { id, name, email } = this.props.monsterCardLink

//     return (
//       <div className='card-container' key={id}>
//         {/* robohash.org */}
//         <img
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           alt={`monster ${name}`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     )
//   }
// }

// export default Card
