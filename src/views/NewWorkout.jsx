import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from '../reducers/newWorkOut';
import { ExerciseEdit } from '../components/ui/ExerciseEdit';
import { Alert, Snackbar } from '@mui/material';
import { addRoutine } from '../server/apiService';


export const NewWorkout = () => {

  const [errorMsg, setErrorMsg] = useState({ open: false, msg: '' })
  const navigate = useNavigate();
  const cancel = () => navigate('/trainings')
  const addExercise = () => navigate('/addExercise')
  const { exercises, title } = useSelector(state => state.newWorkout)

  const dispatch = useDispatch()

  const handleChangeTitle = (e) => dispatch(setTitle(e.target.value))

  const handleSave = async () => {
    if (exercises.length === 0) {
      setErrorMsg(
        { open: true, msg: 'Please add at least one exercise', type: 'warning' }
      )
      return
    }
    if (title.trim() === '') {
      setErrorMsg({ open: true, msg: 'Please enter a title', type: 'warning' })
      return
    }
    try {
      await addRoutine({ name: title, exercises: exercises })
      setErrorMsg({ open: true, msg: 'success', type: 'success' })
      navigate('/trainings')
    } catch (error) {
      setErrorMsg({ open: true, msg: error.message, type: 'error' })
    }
  }

  const handleClose = () => {
    setErrorMsg({ open: false, msg: '' })
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={errorMsg.open}
        onClose={handleClose}
        message={errorMsg.msg}
        autoHideDuration={1200}
      >
        <Alert
          onClose={handleClose}
          severity={errorMsg.type}
          sx={{ width: '100%' }}
        >
          {errorMsg.msg}
        </Alert>
      </Snackbar>
      <header className='new-workout-header'>
        <Button variant="text" color='error' size='small' onClick={cancel} >Cancel</Button>
        <p>New Workout</p>
        <Button variant="contained" size='small' onClick={handleSave}>Save</Button>
      </header>
      <div className='app_2'>
        <TextField fullWidth label="Title" variant='standard' placeholder='leg day' value={title} onChange={handleChangeTitle} />
        {
          exercises.length >= 1 ? (
            <>{
              exercises.map((exercise, index) => (
                <ExerciseEdit
                  key={index}
                  img={exercise.gifUrl}
                  name={exercise.name}
                  sets={exercise.sets}
                  from={exercise.from}
                  to={exercise.to}
                  id={exercise.id}
                />
              ))
            }</>
          ) : (
            <div className='new-workout-advice'>
              <FitnessCenterIcon />
              <p>Start adding a new exercise to your workout</p>
            </div>
          )
        }
        <Button variant='contained' startIcon={<AddIcon />} sx={{ width: '100%' }} onClick={addExercise}>Add Exercise</Button>
      </div>
    </>
  )
}
