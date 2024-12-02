import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { Button, Alert } from '@mui/material';
import { useForm } from '../hooks/useFrom';
import { postLogin } from '../server/apiService';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../reducers/session';
import icon from '../assets/undraw_access_account_re_8spm.svg'

export const SignIn = () => {

  const navigate = useNavigate()
  const [values, handleChange, reset] = useForm({ userName: '', password: '' });
  const [error, setError] = useState({ show: false, msg: '' })
  const dispatch = useDispatch()

  const handleLogIn = async () => {
    // validate before submit
    if (!values.userName || !values.password) {
      setError({ show: true, msg: 'All fields are required' })
      return
    }

    try {
      console.log('login in .........');
      console.log('this is my postLogin function ->');
      console.log(postLogin);
      const { data: { token } } = await postLogin(values);
      localStorage.setItem('token', token)
      dispatch(setToken(token))
      reset()
      setError({ show: false, msg: '' })
      navigate('home')
    } catch (error) {
      console.error(error);
      setError({ show: true, msg: error.message })
    }
  }

  return (
    <div className='app form-card'>
      <div style={{ textAlign: 'center' }}>
        <img src={icon} width={200} />
      </div>
      <h1 style={styles.h1}>Sign In</h1>
      <form >
        <div style={styles.inputs}>
          <TextField
            label="User name or Email"
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
        </div>
        <Link to='/register'>Don't have account? register here</Link>
        <Button variant="contained" sx={{ width: '100%', marginTop: '1rem' }} onClick={handleLogIn} >Log In</Button>
        <div style={styles.a}>
          <Link to='/register' >Forgot password ?</Link>
        </div>
        {
          error.show && <Alert variant="outlined" severity="error" sx={{ width: '100%', marginTop: '1rem' }}>{error.msg}</Alert>
        }
      </form>
    </div>
  );
}

const styles = {
  a: { textAlign: 'center' },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  h1: {
    textAlign: 'start',
    marginBottom: '2rem'
  },
  inputs: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  }
} 