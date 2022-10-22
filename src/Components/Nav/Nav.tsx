import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/users/123">User 123</Link>
      <Link to="/users/me">User Me</Link>
    </nav>
  )
}
