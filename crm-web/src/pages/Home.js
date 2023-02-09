import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Link to="/test">
        <div style={{width:'100px',height:'100px',background:'red'}}>
        </div>
      </Link>
    </div>
  )
}

export default Home