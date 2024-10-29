import React, {useState} from 'react'
import Hero from './Hero'

const Header = () => {
  return (
    <div className=" h-[100vh] bg-gradient-to-b from-purple-600 to-blue-600">
        <h1 className='text-center text-[25px] text-bold text-white pt-[150px]'>To-Do List</h1>
        <Hero/>
  </div>
  )
}

export default Header
