import React from 'react'
import './header.css'
import { SearchFilter } from '../../Components/UI/SearchFilter'
export const Header = () => {
  return (
   <>
   <div className="Header">
    <h1>Products</h1>
    <SearchFilter/>
   </div>
   </>
  )
}