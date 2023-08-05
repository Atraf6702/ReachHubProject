import React, { Component } from 'react'
import Dropdowns from './Dropdowns'
export default class FilterSection extends Component {
  render() {
    return (
      <div class='container'>

        <div class="row">
          <div class="col-8">

            <div class="row">
              <div class="col"><Dropdowns title="Category" /></div>
              <div class="col text-center"><Dropdowns title="price" /></div>
              <div class="col text-center"><Dropdowns title="reviews" /></div>
              <div class="col text-center"><Dropdowns title="color" /></div>
              <div class="col text-center"><Dropdowns title="material" /></div>
              <div class="col text-center"><Dropdowns title="offer" /></div>
              <div class="col text-center"><Dropdowns title="All filters" /></div>
            </div>
          </div>


          <div class="col-4 text-end">
            <div class="dropdown">
              <button class="btn btn-secondary btn-sm dropdown-toggle text-start rounded-pill bg-white  text-black " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

                Sort by
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Price, High to low.</a></li>
                <li><a class="dropdown-item" href="#">Price, Low to high.</a></li>
                <li><a class="dropdown-item" href="#">Launch date.</a></li>
              </ul>
            </div></div>
        </div>

      </div>
    )
  }
}

