import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function CustomInput() {
  const handleInsert = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
      console.log(event.target.value);
    }
  };
  const handleDelete = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
      console.log(event.target.value);
    }
  };

  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          id="insert"
          label="Insert Name"
          variant="filled"
          onKeyPress={handleInsert}
        />
        <TextField
          id="delete"
          label="Delete Name"
          variant="filled"
          onKeyPress={handleDelete}
        />
      </form>
    </div>
  );
}
