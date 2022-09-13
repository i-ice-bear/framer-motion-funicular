import React from 'react';
import Link from 'next/link'

const Home = () => {
  return (
    <div className="home container">
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link href="./components/Base">
        <button>
          Create Your Pizza
        </button>
      </Link>
    </div>
  )
}

export default Home;