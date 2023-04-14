import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { top100Films } from './autoCompleteData';
import { customerData } from './data1';
import './App.css';

function App() {

  const [fields, setFields] = useState(customerData);
  const [fields1, setFields1] = useState([
  { label: 'movie 1', value: 'The Godfather' },
  { label: 'movie 2', value: 'The Matrix' },
]);
const [fields2, setFields2] = useState([
  { label: 'placed order', value: 'yes' },
  { label: 'success', value: '' },
]);

const handleFieldChange = (index) => (event) => {
  const newFields = [...fields];
  newFields[index].value = event.target.value;
  setFields(newFields);
};

const handleAutocompleteChange = (index) => (_, value) => {
  const newFields1 = [...fields1];
  newFields1[index].value = value || '';
  setFields1(newFields1);
};
const fieldsObj = {};
fields.forEach(field => {
  fieldsObj[field.label] = field.value;
});

const handleSubmit = (event) => {
  event.preventDefault();
  const data = {};
  
  fields.forEach(field => {
    data[field.label] = field.value;
  });
  
  fields1.forEach((field, index) => {
    data[`Autocomplete ${index}`] = field.value;
  });
  
  fields2.forEach((field, index) => {
    data[field.label] = field.value !== '' ? 'yes' : 'no';
  });
  
  console.log(JSON.stringify(data, null, 2));
};


  return (
    <div className='container'>
        {fields.map((field, index) => (
          <div key={index} className='child'>
            <TextField
              id={`field-${index}`}
              label={field.label}
              variant="outlined"
              className='txt'
              value={field.value}
              onChange={handleFieldChange(index)}
            />          
          </div>
        ))}
        {fields1.map((field, index) => (
        <div className='child1'>
        <Autocomplete
              id={`autocomplete-${index}`}
              options={top100Films.map((option) => option.title)}
              onChange={handleAutocompleteChange(index)}
              defaultValue={field.value}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={`Autocomplete ${index}`}
                  margin="normal"
                  variant="outlined"
                />
              )}
            />
        </div>
         ))}
        <div className='child2'>
          <FormControl component="fieldset">
            <FormLabel component="legend">Assign responsibility</FormLabel>
            <FormGroup>
              {fields2.map((field, index) => (
                <FormControlLabel
                  key={index}
                  control={<Checkbox checked={field.value !== ''} name={`field-${index}`} />}
                  label={field.label}
                />
              ))}
            </FormGroup>
            <FormHelperText><button type="submit" onClick={handleSubmit}>Submit</button></FormHelperText>
          </FormControl>
        </div>
        
    </div>
  );
}

export default App;