import React, {useEffect, useState} from 'react';



import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// function Form(props) {
// Now you'd use props.thing
// props is an object, so you can also deconstruct it ...
// this lets you just use thing
function TestForm({title, username, background, weather, go}) {

  // Initial state: values is going to be an object
  // setValues is a function that we use to change "values"
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleChange = (e) => {
    // ...values = makes a "copy" of values
    // , [key]:value = adds or updates "key" in that object with value
    setValues( {...values, [e.target.name]: e.target.value});
  };

  useEffect( () => {
    if( Object.keys(values).length) {
      console.log('values has something in it');
    }
  }, [values]);

  return (
    <>
      
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control name="food" placeholder="Name a food" onChange={handleChange} />
        </Form.Group>

        <Form.Group>
          <Form.Control name="calories" type="number" onChange={handleChange} />
        </Form.Group>
        
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default TestForm;