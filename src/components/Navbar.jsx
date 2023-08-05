import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { TbShoppingCartPlus } from 'react-icons/tb'
import { GoSearch } from 'react-icons/go'
import Logo from '../assests/Logo.png'

export default function Navbar() {
  return (
    <div className='mx-5'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary my-2">
        <div class="container-fluid">

          <a class="navbar-brand me-5  fs-1 fw-semibold" href="#">
            <img src={Logo} alt="" width="100" height="100" />
            ShopCart
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown mx-3">
                <a class="nav-link dropdown-toggle text-black fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Over ear headphones</a></li>
                  <li><a class="dropdown-item" href="#">On ear headphones</a></li>
                  <li><a class="dropdown-item" href="#">In ear headphones</a></li>
                </ul>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link active text-black fw-semibold" aria-current="page" href="#">Deals</a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link text-black fw-semibold" href="#">What's New</a>
              </li>

              <li class="nav-item mx-3">
                <a class="nav-link text-black fw-semibold" >Delivery</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2 rounded-pill" type="search" placeholder="Search Product" aria-label="Search" />
              <span className='mx-2'><GoSearch size={20} /></span>
            </form>
            <div className='ms-5 fw-semibold'>
              <span className='mx-2 '><AiOutlineUser size={20} /></span>
              Account
            </div>
            <div className='mx-5 fw-semibold'>
              <span className='mx-2'><TbShoppingCartPlus size={20} /></span>
              Cart
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}
