import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';
import Male from './components/Male';
import PageNotFound from './components/PageNotFound';
import Profile from './components/Profile';
import Loader from './components/Loader';

import './App.css';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // logErrorToMyService(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
const Layout = () => {
  return (
    <div className="nav-bar">
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/about" className="link">
        About
      </NavLink>
      <NavLink to="/users" className="link">
        Users
      </NavLink>
      <NavLink to="/users/female" className="link">
        Female
      </NavLink>
      <NavLink to="/male" className="link">
        Male
      </NavLink>
    </div>
  );
};

export const Female = () => {
  const [femaleUsers, setFemaleUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&gender=female')
      .then((res) => res.json())
      .then((res) => {
        setFemaleUsers(res.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      {femaleUsers.map((femaleUser) => (
        <Profile user={femaleUser} />
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="routes">
      <Layout />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />}>
          <Route path="female" element={<Female />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
