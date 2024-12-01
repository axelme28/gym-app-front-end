import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { Button, Alert } from '@mui/material';
import { useForm } from '../hooks/useFrom';
import helpers from '../helpers/global'
import { postRegister } from '../server/apiService'
import Swal from 'sweetalert2';

export const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({ show: false, msg: '' })
  const [values, handleChange, reset] = useForm({ email: '', userName: '', password: '', password2: '' })

  const handleRegister = async () => {
    const { email, userName, password, password2 } = values

    if (helpers.isEmptyOrNull(email) || helpers.isEmptyOrNull(userName) || helpers.isEmptyOrNull(password) || helpers.isEmptyOrNull(password2)) {
      setError({ show: true, msg: 'Please fill all fields' })
      return
    }
    if (password !== password2) {
      setError({ show: true, msg: 'Passwords do not match' })
      return
    }
    try {
      await postRegister({ email, userName, password })
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Registration successful",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/')
    } catch (error) {
      console.log(error);
      setError({ show: true, msg: error.response.data.message })
    }

  }
  return (
    <div className='app'>
      <h2>Register</h2>
      <form className='form-card'>
        <div style={styles.inputs}>
          <TextField
            label="Email"
            type='email'
            placeholder='axel_me@host.com'
            name='email'
            required
            onChange={handleChange}
          />
          <TextField
            label="User name"
            type='email'
            placeholder='axel8282'
            name='userName'
            required
            onChange={handleChange}
          />
          <TextField
            label="Password"
            type='password'
            name='password'
            required
            onChange={handleChange}
          />
          <TextField
            label="Repeat your Password"
            type='password'
            name='password2'
            required
            onChange={handleChange}
          />
        </div>
        <Button variant="contained" sx={{ width: '100%', marginTop: '1rem' }} onClick={handleRegister} >Register</Button>
        {
          error.show && <Alert variant="outlined" severity="error" sx={{ width: '100%', marginTop: '1rem' }}>{error.msg}</Alert>
        }
      </form>
    </div>
  )
}


const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  h1: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  inputs: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  }
} 
