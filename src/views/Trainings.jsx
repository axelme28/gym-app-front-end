import React, { useEffect, useState } from 'react'
import WithAuth from '../routes/WithAuth'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { RoutineCard } from '../components/ui/RoutineCard';
import { useNavigate } from 'react-router-dom';
import { deleteRoutine, getRoutines } from '../server/apiService';
import ModalConfirm from '../components/ui/ModalConfirm';
import { useDispatch } from 'react-redux';
import { setCurrentRoutine } from '../reducers/currentRoutine';
import { Bars } from 'react-loader-spinner';

const Trainings = () => {
  const navigate = useNavigate();
  const [routines, setRoutines] = useState([])
  const [loading, setLoading] = useState(false)
  const [openModal, setOpenModal] = useState({ show: false, id: '' })
  const dispatch = useDispatch()

  const handleClickCard = (routine) => {
    dispatch(setCurrentRoutine(routine))
    navigate('/routine-detail')
  }

  const handleDeleteRoutine = async () => {
    try {
      await deleteRoutine(openModal.id)
      setOpenModal({ show: false, id: '' })
      setRoutines(routines.filter(routine => routine.id !== openModal.id))
    } catch (error) {
      console.error(error)
    }
  }

  const handleClickDelete = (id) => {
    console.log('click delete');
    console.log(id);
    setOpenModal({
      show: true,
      id: id
    })
  }
  const newWorkout = () => navigate('/newWorkout')

  // useEffect(() => {
  //   getRoutines().then(({ data }) => {
  //     console.log(data);
  //     if (data.length > 0) setRoutines(data)
  //   }).catch((err) => {
  //     console.log(err);
  //   });

  // }, [])
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await getRoutines();
        if (data.length > 0) setRoutines(data)
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {

      }
      <button className='btn-new-workout' onClick={newWorkout}>
        <PlaylistAddIcon />
        <p>New Workout</p>
      </button>
      <p className='my-workouts'>My Workouts ({routines.length})</p>
      <div className='container-routines'>
        {loading ?
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Bars
              height="80"
              width="80"
              color="#4a90e2"
              ariaLabel="bars-loading"
              visible={true}
            />
          </div> :
          routines.length === 0 ? <>No data </> :
            routines.map((routine, index) => {
              return (
                <RoutineCard
                  name={routine.routineName}
                  exercises={routine.exercises}
                  handleDelete={() => handleClickDelete(routine.id)}
                  onClickCard={() => handleClickCard(routine)}
                  key={index} />
              )
            })
        }
      </div>
      <ModalConfirm
        open={openModal.show}
        handleClose={() => setOpenModal({ show: false, id: 0 })}
        msg={'This action will delete permanently this routine'}
        onAccept={() => handleDeleteRoutine()}
        onCancel={() => setOpenModal(false)} />
    </>
  )
}

export default WithAuth(Trainings)