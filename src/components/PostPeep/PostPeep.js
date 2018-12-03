import React from 'react'
import PropTypes from 'prop-types'

export default class PostPeep extends React.Component {
  constructor(props) {
    super(props)
    const { postPeep } = this.props
    this.updatePeepText = event => {
      this.setState({ peepText: event.target.value })
    }
    console.log(this.props)
    this.postPeep = () => postPeep(this.props.currentUserID, this.props.currentSession, this.state.peepText)
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <h3>Post a new Peep</h3>
          <input type='text' onChange={this.updatePeepText}/>
          <button type='submit' onClick={this.postPeep}> Click to post </button>
          </div>
      </div>
    )
  }
}
