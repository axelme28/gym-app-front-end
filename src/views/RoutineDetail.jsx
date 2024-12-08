import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ExerciseEdit } from '../components/ui/ExerciseEdit'

export const RoutineDetail = () => {

  const { data: { routineName, exercises } } = useSelector(state => state.currentRoutine)
  const navigate = useNavigate()
  const handleClose = () => navigate('/trainings')
  return (
    <>{ }
      <header className='new-workout-header'>
        <Button variant="text" color='error' size='small' onClick={handleClose}>Close</Button>
      </header>
      <div className='app_2'>
        <h3 style={{ textAlign: 'center' }}>{routineName}</h3>
        <br />
        <h4>Exercises:</h4>
        {
          exercises.map(({ from, to, sets, exerciseDetails }) => {
            return (
              <ExerciseEdit name={exerciseDetails.name} sets={sets} from={from} to={to} img={exerciseDetails.gifUrl} disableInputs={true} key={exerciseDetails.id} />
            )
          })
        }
      </div>
    </>
  )
}