import React from 'react';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';


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
            <Form>
              <Card>
                <Card.Body>
                  <Card.Title>
                    Add To Do Item
                  </Card.Title>

                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Label>To Do Item</Form.Label>
                    <Form.Control type="input" placeholder="Item Details" />
                    <Form.Text className="text-muted">
                      Please enter your social security number and bank acccount information.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Assigned To</Form.Label>
                    <Form.Control type="input" placeholder="Assignee Name" />
                  </Form.Group>
          
                  <Form.Group>
                    <input min="1" max="5" name="difficulty" 
                      type="range" id="formBasicCheckbox" class="form-control-range" value="3" />
                    <label class="form-label" for="formBasicCheckbox">Difficulty</label>
                  </Form.Group>
              
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>

                </Card.Body>

              </Card>
            </Form>
          </div>
          <div class="col-md w-80">
            <ListGroup class="w-100">
              // Render list items here
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
