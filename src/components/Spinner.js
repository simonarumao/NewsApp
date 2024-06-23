import React, { Component } from 'react'
import loading from '../loading.gif'
export class Spinner extends Component {
  render() {
    return (
        <div class="flex items-center justify-center ">
            <img src={loading} alt="" />
        </div>
    )
  }
}

export default Spinner
