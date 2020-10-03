import React from 'react';
import { Link, navigate } from 'gatsby';

export default function Nav() {
  const handleSliceMasters = (e) => {
    setTimeout(() => {
      console.log(e);
      navigate('/slicemasters');
    }, 1000);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">Logo</Link>
        </li>
        <li>
          <Link to="/slicemasters">Slice Masters</Link>
          {/* <button type="button" onClick={handleSliceMasters}>
            Click me to see slice master after 2 seconds
          </button> */}
        </li>
        <li>
          <Link to="/order">Orders</Link>
        </li>
      </ul>
    </nav>
  );
}
