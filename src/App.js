import React from 'react'
import FixedHeading from './components/FixedHeading'
import Navbar from './components/Navbar'
import UpperBody from './components/UpperBody'
import FilterSection from './components/FilterSection'
import MainBody from './components/MainBody'


export default function App() {
  return (
    <div>
      <FixedHeading/>
      <Navbar/>
      <UpperBody/>
      <FilterSection/>
      <MainBody/>

    </div>
  )
}
