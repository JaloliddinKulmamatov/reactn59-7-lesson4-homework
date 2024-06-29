import React from 'react'
import Post from './Post';

const Home = () => {
  return (
    <div className="container">
      <div className="home__main">
        <h2>
          Let's make your <br /> home beautiful together
        </h2>
        <p>
          There are many variations of the passages of <br /> lorem Ipsum
          fromavailable, majority.
        </p>
        <button>Get Started -> </button>
      </div>
      <div className="home__main__end">
        <Post>
          <h3>Project Plan</h3>
        </Post>
        <Post>
          <h3>Interior Work</h3>
        </Post>
        <Post>
          <h3>Realization</h3>
        </Post>
      </div>
    </div>
  );
}

export default Home