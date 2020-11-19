import React from 'react';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
console.log('Navbar');
export default function App() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <span>Home</span>
        </Navbar>
      </header>

      <div>
        <h1>Testing Testing, 1..2..3!</h1>
        Navbar should be dark
      </div>

    </>
  );
}

//Header
// Nav
// Home link
// form (login)
// Parent Container
// div (row)
// header element
// link (to home)
// Counter (dynamic based on how many items in list)
// Form
// form heading
//-2 labels / inputs
// slider
//submit button
//List Group
//(dynamic color / contextual classes based on pening / completed)
