import React from 'react'

const Post = ({children}) => {
  return (
    <div>
        {children}
      <p>
        There are many variations of <br /> the passages of lorem Ipsum from <br /> available,
        majority.
      </p>
      <a href="#">Read More - </a>
    </div>
  );
}

export default Post