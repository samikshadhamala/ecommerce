import React from 'react'
import { Link } from 'react-router'

function NotFound() {
  return (
    <div>
        <h1>404 no page Found</h1>
        <Link to ='/'>Go to Home</Link>
    </div>
  );
}

export default NotFound