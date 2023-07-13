import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';



export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-Full Name"
          label="Full Name"
          defaultValue="Full Name"
        />
        <TextField
          required
          id="outlined-Email"
          label="Email Address"
          defaultValue="Email"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success" endIcon={<SendIcon />}>
        Submit
      </Button>
      <Button variant="contained" color="error">
        Clear
      </Button>
      </Stack>
    </Box>
  );
}