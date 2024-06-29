import React from 'react'

const MinBedroom = ({children}) => {
  return (
    <div className='min-badrom'>
      <div className="bedroom-top">{children}</div>
      <div className="bedroom-bottom">
        <span>
          <h3>Minimal Bedroom</h3>
          <p>Decor / Artchitecture</p>
        </span>
        <span>
          <button>-></button>
        </span>
      </div>
    </div>
  );
}

export default MinBedroom