import { Button } from '@mui/material'
import React from 'react'

export const ExerciseInfo = ({ close, data }) => {
  return (
    <div className='animate__animated animate__fadeIn'>
      <header className='new-workout-header'>
        <Button variant="text" color='error' size='small' onClick={close}>Close</Button>
      </header>
      <div className='exercise__info__body app_2'>
        <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>{data.name}</h3>
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#fdfdfa' }}>
          <img src={data.gifUrl} style={{ width: '60%' }} />
        </div>
        <br />
        <h4>Equipment: <span style={styles.span}>{data.equipment}</span></h4>
        <br />
        <h4>Target: <span style={styles.span}>{data.target}</span></h4>
        <br />
        <h4>Secondary Muscles: <span style={styles.span}>{data.secondaryMuscles.join(', ')}</span></h4>
        <br />
        <h4>Instructions:</h4>
        {
          data.instructions.map((instruction, index) => {
            return (
              <li key={index} className='exercise__info__body_list'> {instruction}</li>
            )
          })
        }

      </div>
    </div>
  )
}

const styles = {
  span: {
    fontWeight: 'normal'
  }
}