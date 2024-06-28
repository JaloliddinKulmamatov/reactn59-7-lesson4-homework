import React from 'react'
import Post from "./Post"


const Sevice = () => {
  return (
    <>
      <div className="service__main">
        <h1>Services</h1>
      </div>
      <div className="serive__card container">
        <Post>
          <h3>Project Plan</h3>
        </Post>
        <Post>
          <h3>Interior Work</h3>
        </Post>
        <Post>
          <h3>Retail Design</h3>
        </Post>
        <Post>
          <h3>2d/3d Art Work</h3>
        </Post>
        <Post>
          <h3>Interior Work</h3>
        </Post>
        <Post>
          <h3>Decoration Work</h3>
        </Post>
      </div>
    </>
  );
};

export default Sevice;