import React, { Component } from 'react'
import Card from './Card'
import Footer from './Footer';

export default class MainBody extends Component {

  constructor() {
    super();
    this.state = {
      products: this.products,
    }
  }

  async componentDidMount() {

    let url = "https://dummyjson.com/products";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ products: parsedData.products })


  }
  render() {
    return (
      <div>
        {this.state.products ? (
          <div class="container">
            <div class="fs-3 fw-bolder mt-5"> Great products for you!</div>

            <div className="row">
              {this.state.products?.map((products) => {
                return <div className="col-md-3" key={products.url}>
                  <Card title={products.title.slice(0, 11)} price={products.price} imgUrl={products.thumbnail}
                    rating={products.rating} id={products.id} />
                </div>
              })}
            </div>

          </div>
        ) : (
          <h3 class='container my-3'>
            Loading... Please wait...
          </h3>
        )}

        <div class='mt-5'>
          <Footer />
        </div>
      </div>

    )
  }
}
