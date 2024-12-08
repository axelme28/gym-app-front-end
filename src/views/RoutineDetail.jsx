import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ExerciseEdit } from '../components/ui/ExerciseEdit'

export const RoutineDetail = () => {

  const { data: { routineName, exercises } } = useSelector(state => state.currentRoutine)
  const [routineData, setRoutineData] = useState({ routineName: 'name', exercises: [] })
  const navigate = useNavigate()
  useEffect(() => {
    if (routineName) {
      setRoutineData({ routineName, exercises })
      console.log(routineData);
    } else {
      navigate('/trainings')
    }
  }, [])

  const handleClose = () => navigate('/trainings')
  return (
    <>{ }
      <header className='new-workout-header'>
        <Button variant="text" color='error' size='small' onClick={handleClose}>Close</Button>
      </header>
      <div className='app_2'>
        <h3 style={{ textAlign: 'center' }}>{routineData.routineName}</h3>
        <br />
        <h4>Exercises:</h4>
        {
          routineData.exercises && routineData.exercises.map(({ from, to, sets, exerciseDetails }) => {
            return (
              <ExerciseEdit name={exerciseDetails.name} sets={sets} from={from} to={to} img={exerciseDetails.gifUrl} disableInputs={true} key={exerciseDetails.id} />
            )
          })
        }
      </div>
    </>
  )
}