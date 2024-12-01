import React from 'react'
import InfoIcon from '@mui/icons-material/Info';

export const ExerciseListItem = ({ id = '', name = '', type = '', imgSrc = '', selected, click = () => { } }) => {
  const classStr = selected ? 'exercise-list-item active' : 'exercise-list-item'
  return (
    <>
      <div className={classStr} onClick={click}>
        <img src={imgSrc} alt={name} className='static-gif' loading="lazy" />
        <div className='exercise-list-item__info'>
          <p>{name}</p>
          <span>{type}</span>
        </div>
      </div>
      {/* <InfoIcon /> */}
    </>
  )
}
