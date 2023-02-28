import React, { Component } from 'react'

class SearchBox extends Component {
  render() {
    return (
      <div>
        {/* <h2>Search box</h2> */}
        <input
          className={this.props.className}
          type='search'
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    )
  }
}

export default SearchBox
