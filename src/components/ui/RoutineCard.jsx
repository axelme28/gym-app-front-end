export const RoutineCard = ({ name, exercises }) => {
  const exercisesStr = exercises.join(', ')
  return (
    <div className="routine-card">
      <div>
        <p className="routine-card-title">{name}</p>
        <span className="routine-card-exercises">{exercisesStr}</span>
      </div>
      <div className="routine-options"><span>...</span></div>
    </div>
  )
}
