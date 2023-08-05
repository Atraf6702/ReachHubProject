import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import FixedHeading from './FixedHeading';
import Navbar from './Navbar';
import BreadCrumb from './BreadCrumb';
import Counter from './Counter';
import { FiTruck } from 'react-icons/fi'
import { MdOutlineContentPaste } from 'react-icons/md'
import Footer from './Footer';
import Star from './Star';

export default function ProductsPage() {


  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const location = useLocation();
  const id = location.state.id;


  console.log("this is my data", id);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div>
      <FixedHeading />
      <Navbar />

      <div>
        {data ? (
          <div class='container'>
            <BreadCrumb title={data.title} />
            <div class='container'>
              <div class='row'>
                <div class='col mt-5'>
                  <div class='shadow-lg'><img class='h-100 w-100' src={data.thumbnail} /></div>
                  <div class='row'>
                    <div class='col'><img class='h-100 w-100 mt-3 me-2' alt="not available" src={data.images[0]} /></div>
                    <div class='col'><img class='h-100 w-100 mt-3 me-2' alt="not available" src={data.images[1]} /></div>
                    <div class='col'><img class='h-100 w-100 mt-3 me-2' alt="not available" src={data.images[2]} /></div>
                    <div class='col'><img class='h-100 w-100 mt-3 me-2' alt="not available" src={data.images[3]} /></div>
                  </div>



                </div>
                <div class='col mt-5'>
                  <h2 class='ms-5 d-inline mb-3'>{data.title}</h2>
                  <p class='ms-5 text-light-emphasis mt-3'>{data.description}</p>
                  <p class='ms-5'><Star stars={data.rating} /> </p>
                  <div class='border ms-5 p-3'>
                    <h3 class=' fw-bolder  '>${data.price}.00 or ${data.price / 5}/month</h3>
                    <p class='text-light-emphasis'>Suggested payments with 6 months special financing.</p>

                  </div>
                  <div class='mt-5'>

                    <div class='d-inline ms-5 p-3'><Counter /></div>
                    <span class=' w-25 d-inline'>only <span class='text-warning'>{data.stock} items </span>are left dont miss</span>
                  </div>

                  <div class=' m-5 container w-25 mb-2'>
                <button type="button" class="btn btn-success myButton rounded-pill text-center p-2">Buy Now</button>
              </div>
                  <div class=' ms-5 container w-25'>
                <button type="button" class="btn btn-none border rounded-pill text-center p-2">Add to Cart</button>
              </div>

                  <div class='ms-5 mt-5'>
                    <div class=' border p-2 fw-semibold'><span class='p-2 text-warning'> <FiTruck /></span>  Return Delivery

                      <div class='text-decoration-underline fw-normal p-2 text-secondary'>Enter your postal code for delivery availabilty  </div>
                    </div>
                    <div class=' border p-2 fw-semibold'> <span class='p-2 text-warning'> <MdOutlineContentPaste /></span>  Free Delivery

                      <div class=' fw-normal p-2 text-secondary'>Free 30 days delivery return. <span class='text-decoration-underline'>Details </span></div> </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ) : (
          <h3 class='container my-3'>
            Loading... Please wait...
          </h3>
        )}
      </div>
      <div class='mt-5'>
        <Footer />
      </div>
    </div>
  )
}



/*...*/
