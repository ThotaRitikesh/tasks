import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogActions from '@material-ui/core/DialogActions';
// import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete 
// { createFilterOptions } 
from '@material-ui/lab/Autocomplete';
import { top100Films } from './autoCompleteData'
import './App.css'

// const filter = createFilterOptions();

function App() {
  // const [value, setValue] = useState(null);
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  // const [open, toggleOpen] = React.useState(false);
  // const handleClose = () => {
  //   setDialogValue({
  //     title: '',
  //     year: '',
  //   });

  //   toggleOpen(false);
  // };

  // const [dialogValue, setDialogValue] = React.useState({
  //   title: '',
  //   year: '',
  // });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setValue({
  //     title: dialogValue.title,
  //     year: parseInt(dialogValue.year, 10),
  //   });

  //   handleClose();
  // };
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const { gilad, jason, antoine } = state;
  return (
<div className='container'>
  <div>
  <form  noValidate autoComplete="off">
  <TextField id="outlined-basic" label="Outlined" variant="outlined" className='txt'/> <br />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" className='txt'/> <br />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" className='txt'/> <br />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" className='txt'/> <br />
  </form>
  </div>
  {/* <Autocomplete
        value={value}
        // onChange={(event, newValue) => {
        //   if (typeof newValue === 'string') {
        //     // timeout to avoid instant validation of the dialog's form.
        //     setTimeout(() => {
        //       // toggleOpen(true);
        //       setDialogValue({
        //         title: newValue,
        //         year: '',
        //       });
        //     });
        //   } else if (newValue && newValue.inputValue) {
        //     toggleOpen(true);
        //     setDialogValue({
        //       title: newValue.inputValue,
        //       year: '',
        //     });
        //   } else {
        //     setValue(newValue);
        //   }
        // }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              title: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={top100Films}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.title;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(option) => option.title}
        style={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Free solo dialog" variant="outlined" />
        )}
      /> */}
      <div style={{width: '250px' }}>
       <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
        )}
      />
             <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
        )}
      />
             <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
        )}
      />
             <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
        )}
      />
      </div>
      <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      </div>
      <div>
  <form  noValidate autoComplete="off">
  <TextField id="outlined-basic" label="Outlined" variant="outlined" className='txt'/> <br /> <br />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" className='txt'/> <br /> <br />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" className='txt'/> <br />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" className='txt'/> <br />
  </form>
  </div>
</div>
  )
}

export default App
