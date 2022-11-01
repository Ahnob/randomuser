import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loader from './Loader';
import Profile from './Profile';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setLoading(true);
    fetch('https://randomuser.me/api/?results=100')
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.results);
        setLoading(false);
      });
  }, []);

  const numberPerPage = 10;
  const totalUsers = users.length;
  const pages = Math.ceil(totalUsers / numberPerPage);
  const skip = page * numberPerPage - numberPerPage;

  if (loading) return <Loader />;

  return (
    <div className="users">
      <div>
        {users.slice(skip, skip + numberPerPage).map((user) => {
          return <Profile user={user} />;
        })}
      </div>
      {
        <button
          className="prev"
          disabled={page <= 1}
          aria-disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </button>
      }
      {Array.from({ length: pages }, (value, index) => index + 1).map(
        (each) => (
          <button onClick={() => setPage(each)}>{each}</button>
        )
      )}
      {
        <button
          className="next"
          disabled={page >= pages}
          aria-disabled={page >= pages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      }
      <Link className="link" to="/users/female">
        Female
      </Link>
      <Outlet />
    </div>
  );
}
