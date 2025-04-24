import React from 'react'
import './header.css'

export const Header = ({ search, setSearch }) => {
  return (
    <header className="header">
      <h1>Product Store</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
    </header>
  )
}