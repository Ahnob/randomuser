import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h2 className="home-1">Welcome!! Glad you got here.. </h2>
      <Link to="/" className="link">
        <p>
          Click on any of the navigation bars to enable you move around the page
          seamlessly
        </p>
      </Link>
      <outlet />
    </div>
  );
};

export default Home;
