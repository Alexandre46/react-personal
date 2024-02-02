import React from 'react';

const Logo = () => {
  return (
    <div className="font-weight-bolder my-auto py-2">
      <a
        href="/"
        style={{
          textDecoration: 'none',
          color: 'white',
          fontSize: '40px',
          WebkitTextStroke: '1px black'
        }}>
        <span> Alexandre Abreu</span>
      </a>
    </div>
  );
};

export default Logo;
