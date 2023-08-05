import React, { Component } from 'react'

export default class Dropdowns extends Component {
  render() {
    let { title } = this.props;
    return (
      <div>
        <div class="dropdown ">
          <button class="btn btn-secondary btn-sm dropdown-toggle text-start rounded-pill secondaryColor border-0 text-black shadow" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

            {title}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
