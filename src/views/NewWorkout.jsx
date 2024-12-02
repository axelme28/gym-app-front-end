import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from '../reducers/newWorkOut';
import { ExerciseEdit } from '../components/ui/ExerciseEdit';


export const NewWorkout = () => {
  const navigate = useNavigate();
  const cancel = () => navigate('/trainings')
  const addExercise = () => navigate('/addExercise')
  const { exercises, title } = useSelector(state => state.newWorkout)
  const dispatch = useDispatch()
  const handleChangeTitle = (e) => {
    dispatch(setTitle(e.target.value))
  }
  return (
    <>
      <header className='new-workout-header'>
        <Button variant="text" color='error' size='small' onClick={cancel} >Cancel</Button>
        <p>New Workout</p>
        <Button variant="contained" size='small'>Save</Button>
      </header>
      <div className='app'>
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
                  repsRange={exercise.repsRange}
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
