import React, { Component } from 'react'
import loading from '../loading.gif'
export class Spinner extends Component {
  render() {
    return (
        <div className="flex items-center justify-center ">
            <img src={loading} className='my-3' alt="" />
        </div>
    )
  }
}

export default Spinner
