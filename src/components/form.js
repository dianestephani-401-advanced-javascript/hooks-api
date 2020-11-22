import React, {useEffect, useState} from 'react';

//Boostrap Stuff
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function TaskForm( {task, assigned, difficulty} ) {
  

  const [ values, setValues] = useState( [] );

  // let listArray = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit Values Values', values);
    // listArray.push(values);
    // console.log('listArray', listArray);
  };

  const handleChange = (e) => {
    setValues( {...values, [e.target.name]: e.target.value});
    // console.log('Handle Change Values', values);
  };

  
  useEffect( () => {
    if(Object.keys(values).length){
      console.log('values is not empty', values);
    }
  });

  return(
    
    <Form onSubmit = {handleSubmit}>
      <Card>
        <Card.Body>
          <Card.Title>
             Add To Do Item
          </Card.Title>

          <Form.Group>
            <Form.Label>To Do Item</Form.Label>
            <Form.Control name="task" type="text" placeholder="Item Details" onChange = {handleChange}/>
          </Form.Group>

          <Form.Group>
            <Form.Label>Assigned To</Form.Label>
            <Form.Control name="assigned" type="text" placeholder="Assignee Name" onChange = {handleChange}/>
          </Form.Group>

          <Form.Group>
            <input min="1" max="5" name="difficulty" 
              type="range" id="formBasicCheckbox" class="form-control-range" value="3" onChange = {handleChange}/>
            <label class="form-label" for="formBasicCheckbox">Difficulty</label>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>

        </Card.Body>

      </Card>
    </Form>
  );
}


export default TaskForm;