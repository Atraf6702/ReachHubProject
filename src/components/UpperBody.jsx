import React from 'react'
import Logo from '../assests/bgImage.png'

export default function UpperBody() {
  return (
    <div className='m-5'>
      <div class="container text-center urgent shadow-lg">

        <div class="row">
          <div class="col ms-md-5">
            <div class="fs-1 text-start my-5 fw-bolder">Grab upto 50% off on selected Headphones
              <div>
                <button type="button" class="btn btn-success myButton rounded-pill text-center p-2">Buy Now</button>
              </div>
            </div>

          </div>
          <div class="col">

            <div class=""><img class="h-100 w-75" src={Logo} alt="add image please" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
