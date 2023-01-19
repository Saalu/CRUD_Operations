import { Link } from 'react-router-dom';

import React from 'react';

export default function Home() {
  return (
    <div>
      <h2>Home</h2>

      <h1>This is the home page</h1>
      <Link to="edit">view our about page</Link>
      <br />
      <Link to="create">view our contact page</Link>
    </div>
  );
}
