import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux'
import InfoIcon from '@mui/icons-material/Info';
import { removeExercise, setExerciseValue } from '../../reducers/newWorkOut'

export const ExerciseEdit = ({ name = '', img = '', sets = '', from = '', to = '', id, disableInputs = false }) => {
  const [showInfo, setShowInfo] = useState(false)
  const dispatch = useDispatch()
  const onchangeVal = (e) => {
    dispatch(setExerciseValue({ key: e.target.name, value: e.target.value, id: id }))
  }
  const handleDelete = () => {
    dispatch(removeExercise({ id: id }))
  }
  const clickInfo = () => {
    console.log('hello');
  }
  return (
    <>
      <div className='exercise-list-item' style={{ position: 'relative' }}>
        {
          !disableInputs ? (
            <Button color='error' sx={{ position: 'absolute', top: 10, right: 0 }} onClick={handleDelete}>
              <DeleteIcon />
            </Button>) : (<InfoIcon className='exercise-list-item__info-icon' onClick={clickInfo} />)

        }

        <div className='img_avatar'>
          <img src={img} alt={name} className='static-gif ' loading="lazy" />
        </div>
        <div className='exercise-list-item__info'>
          <p>{name}</p>
          <TextField fullWidth label="No of sets" type='number' variant='standard' placeholder='1' size='small' value={sets} onChange={onchangeVal} name='sets' disabled={disableInputs} />
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <TextField fullWidth label="From" variant='standard' type='number' size='small' placeholder='8' value={from} onChange={onchangeVal} name='from' disabled={disableInputs} />
            <div>&nbsp; - &nbsp;</div>
            <TextField fullWidth label="To" variant='standard' type='number' size='small' placeholder='10' value={to} onChange={onchangeVal} name='to' disabled={disableInputs} />
          </div>
        </div>
      </div>
    </>
  )
}
