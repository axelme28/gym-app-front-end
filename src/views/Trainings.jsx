import React, { useEffect } from 'react'
import WithAuth from '../routes/WithAuth'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { RoutineCard } from '../components/ui/RoutineCard';
import { useNavigate } from 'react-router-dom';

const Trainings = () => {
  const navigate = useNavigate();
  const newWorkout = () => {
    navigate('/newWorkout')
  }
  return (
    <div>
      <button className='btn-new-workout' onClick={newWorkout}>
        <PlaylistAddIcon />
        <p>New Workout</p>
      </button>
      <p className='my-workouts'>My Workouts (1)</p>
      <div className='container-routines'>
        <RoutineCard name="Leg day" exercises={['exercise 1', 'exercise 2', 'exercise 3', 'exercise 4', 'exercise 2', 'exercise 2']} />
      </div>
    </div>
  )
}

export default WithAuth(Trainings)