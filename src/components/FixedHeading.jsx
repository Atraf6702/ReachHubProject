import React from 'react'
import { IoIosCall } from 'react-icons/io'

export default function FixedHeading() {
  return (
    <div>

      <div class=" w-100 px-5 text-white bgColor">
        <div class="row">
          <div class="col text-start ms-3 p-2">
            <span class="p-1"><IoIosCall /></span>
            +918052361282
          </div>
          <div class="col text-center p-2">
            <span class="border-end border-3 pe-md-3">Get 50% off on selected Items </span><span class="ps-md-4"> shop now</span>
          </div>
          <div class="col text-end p-2">
            <div class="row">
              <span class="col-sm-8">

                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Eng
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Hindi</a></li>
                  <li><a class="dropdown-item" href="#">Arabic</a></li>
                  <li><a class="dropdown-item" href="#">Spanish</a></li>
                </ul>

              </span>
              <span class="col-sm-2">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Location
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Current Location</a></li>
                  <li><a class="dropdown-item" href="#">New Delhi</a></li>
                  <li><a class="dropdown-item" href="#">Mumbai</a></li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
