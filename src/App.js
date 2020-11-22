import React from 'react';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';


//components
import TaskForm from './components/form';
import TestForm from './components/testform';

console.log('Navbar');
export default function App() {
  return (
    <>
      <header>
        <Navbar class= "navbar navbar-expand navbar-dark" bg="primary" variant="light">
          <span>Home</span>
        </Navbar>
      </header>

      <div class="container">
        <div class="row my-3">
          <div class="col">
            <Navbar class="navbar navbar-expand navbar-dark" bg="dark" variant="dark">
              <a href="#" class="navbar-brand">To Do List Manager (5)</a>
            </Navbar>
          </div>
        </div>

        <div class="row">
          <div class="col-md-auto">
            
            <TaskForm />
            
            <hr />
            
            <TestForm />
              
          </div>

          <div class="col-md w-80">
            <ListGroup class="w-100">
              // Render list items here
              <ListGroup.Item variant="success">Never gonna give you up</ListGroup.Item>
              <ListGroup.Item variant="success">Never gonna let you down</ListGroup.Item>
              <ListGroup.Item variant="success">Never gonna run around</ListGroup.Item>
              <ListGroup.Item variant="danger">And</ListGroup.Item>
              <ListGroup.Item variant="success">Desert you</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
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
//(dynamic color / contextual classes based on pending / completed)
