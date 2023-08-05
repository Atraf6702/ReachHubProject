import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Star from './Star';





export default class Card extends Component {

  state = {
    hover: false,
  };

  handleMouseEnter = () => {
    this.setState({ hover: true });
  };

  handleMouseLeave = () => {
    this.setState({ hover: false });
  };
  render() {

    let { title, price, imgUrl, rating, id } = this.props;



    const { hover } = this.state;
    const defaultStyle = {
      backgroundColor: 'white',
    };
    const hoverStyle = {
      backgroundColor: 'rgb(13,82,18)',
    };
    const elementStyle = hover ? { ...defaultStyle, ...hoverStyle } : defaultStyle;



    return (
      <div class="container my-5">

        <div class="card shadow-lg" style={{ width: "18rem" }}>
          <img src={imgUrl} class="box" alt="image not available" />
          <div class="card-body  ">
            <h5 class="card-title d-inline me-5">{title}</h5><span class="ps-5 d-inline me-0 fw-bolder">${price}.00</span>
            <p class="card-text fw-semibold"><Star stars={rating} /></p>

            <Link to="/productPage" state={{ id: id }}>
              <button class="btn border-black border-2 rounded-pill"
                style={elementStyle}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}

              >Add to cart</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}


