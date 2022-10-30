import { Link, Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Link to="/" className="links">
        Home
        <h2>This is my Home page</h2>
        <p>Click the Users button to go to users page</p>
      </Link>

      <Link to="/Users" className="links">
        <button className="button">Users</button>
      </Link>
      <outlet />
    </div>
  );
};

export default Home;
