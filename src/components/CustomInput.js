import React from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
// import styles from './CustomInput.module.css';

export default function CustomInput(prop) {
  const handleInsert = (event) => {
    if (event.key === 'Enter') {
      console.log(event.target.value);
      axios({
        url: 'http://localhost:8000/api/add',
        method: 'POST',
        data: {
          id: prop.myName,
          name: [event.target.value],
        },
      })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    }
  };
  const handleDelete = (event) => {
    if (event.key === 'Enter') {
      console.log(event.target.value);
      axios({
        url: 'http://localhost:8000/api/delete',
        method: 'POST',
        data: {
          id: prop.myName,
          name: [event.target.value],
        },
      })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    }
  };

  return (
    <div>
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
    </div>
  );
}
