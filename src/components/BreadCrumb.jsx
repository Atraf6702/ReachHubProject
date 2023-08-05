import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class BreadCrumb extends Component {
  render() {
    let { title } = this.props;
    return (
      <div class="container">



        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active fw-semibold">

              <Link to='/'>
                Home
              </Link></li>
            <li class="breadcrumb-item active fw-semibold">
              <Link to='/'>electronics</Link></li>
            <li class="breadcrumb-item active fw-semibold" >
              <Link to='/'>smartphones</Link></li>
            <li class="breadcrumb-item fw-semibold" >{title}</li>
          </ol>
        </nav></div>
    )
  }
}
