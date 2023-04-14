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
import './App.css';

function App() {
  const [fields, setFields] = useState([
    { label: 'First Name', value: 'Thota' },
    { label: 'Last Name', value: 'Ritikesh' },
    { label: 'Address', value: 'Hyderabad' },
    { label: 'State', value: 'Telangana' },
    { label :'Customer-Id', value:'12345'},
    { label :'phone number', value:'98765433456'},
    { label :'Age', value:'20'}
  ]);

  const [fields1, setFields1] = useState([
    { label: 'movie 1', value: 'The Godfather' },
    { label: 'movie 2', value: 'The Matrix' },
    // { label: 'Field 3', value: 'test2' },
    // { label: 'Field 4', value: 'test3' },
  ]);

  const [fields2, setFields2] = useState([
    { label: 'placed order', value: 'yes' },
    { label: 'success', value: '' },
    // { label: 'Field 3', value: 'test2' },
    // { label: 'Field 4', value: 'test3' },
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({...fields,...fields1});
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
              // defaultValue={field.value}
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

// import React, { useState } from 'react'
// import TextField from '@material-ui/core/TextField';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Checkbox from '@material-ui/core/Checkbox';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import { top100Films } from './autoCompleteData'
// import './App.css'

// function App() {
//   const [fields, setFields] = useState([
//     { label: 'Field 1', value: 'test1' },
//     { label: 'Field 2', value: 'test2' },
//     { label: 'Field 3', value: '' },
//     { label: 'Field 4', value: '' },
//   ]);

//   const handleFieldChange = (index) => (event) => {
//     const newFields = [...fields];
//     newFields[index].value = event.target.value;
//     setFields(newFields);
//     console.log(fields);
//   };

//   return (
//     <div className='container'>
//       <div>
//         <form noValidate autoComplete="off">
//           {fields.map((field, index) => (
//             <><TextField
//               key={index}
//               id={`field-${index}`}
//               label={field.label}
//               variant="outlined"
//               className='txt'
//               value={field.value}
//               onChange={handleFieldChange(index)}
//             /><br /></>
//           ))}
//         </form>
//       </div>
//       <div style={{ width: '250px' }}>
//         {/* Map over the fields array to create Autocomplete components */}
//         {fields.map((field, index) => (
//           <Autocomplete
//             key={index}
//             id={`autocomplete-${index}`}
//             freeSolo
//             options={top100Films.map((option) => option.title)}
//             renderInput={(params) => (
//               <TextField
//                 {...params}
//                 label={`Autocomplete ${index}`}
//                 margin="normal"
//                 variant="outlined"
//               />
//             )}
//           />
//         ))}
//       </div>
//       <div>
//         <FormControl component="fieldset">
//           <FormLabel component="legend">Assign responsibility</FormLabel>
//           <FormGroup>
//             {fields.map((field, index) => (
//               <FormControlLabel
//                 key={index}
//                 control={<Checkbox checked={field.value} onChange={handleFieldChange(index)} name={`field-${index}`} />}
//                 label={field.label}
//               />
//             ))}
//           </FormGroup>
//           <FormHelperText>Be careful</FormHelperText>
//         </FormControl>
//       </div>
//     </div>
//   )
// }

// export default App;

