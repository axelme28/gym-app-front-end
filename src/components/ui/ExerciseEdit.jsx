import React from 'react'

export const ExerciseEdit = ({ name, img, sets, repsRange }) => {
  return (
    <div>
      <>
        <div className='exercise-list-item'>
          <img src={img} alt={name} className='static-gif' loading="lazy" />
          <div className='exercise-list-item__info'>
            <p>{name}</p>
            <p>No of sets: {sets}</p>
            <p>Reps: {repsRange}</p>
          </div>
        </div>
      </>
    </div>
  )
}
