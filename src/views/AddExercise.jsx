import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from '../components/ui/CustomSearchInput';
import { getAllExercises, searchExercise } from '../server/apiService';
import { ExerciseListItem } from '../components/ui/ExerciseListItem';
import { Bars, InfinitySpin } from 'react-loader-spinner';


export const AddExercise = () => {
  const navigate = useNavigate()
  const cancel = () => navigate(-1)
  const [searchTerm, setSearchTerm] = useState('');
  const [exercises, setExercises] = useState([]);
  const [searchData, setSearchData] = useState([])
  const [loading, setLoading] = useState(false)

  const handleAddExercise = (id) => {
    setExercises((prevExercises) =>
      prevExercises.includes(id)
        ? prevExercises.filter((exerciseId) => exerciseId !== id)
        : [...prevExercises, id]
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const { data } = await getAllExercises();
        setSearchData(data.slice(0, 100))
      } catch (err) {
        console.log(err);
      }
      setLoading(false)
    };

    fetchData();
  }, [])


  useEffect(() => {
    const debounceId = setTimeout(() => {
      if (searchTerm.trim() === '') return
      setLoading(true)
      searchExercise({ name: searchTerm }).then(({ data }) => {
        setSearchData(data)
      }).catch((err) => {
        console.log(err);
      });
      setLoading(false)
    }, 3000);

    return () => {
      clearTimeout(debounceId);
    };
  }, [searchTerm]);


  return (
    <div>
      <header className='new-workout-header'>
        <Button variant="text" color='error' size='small' onClick={cancel}>Cancel</Button>
        <p>Add exercise</p>
        <Button variant="contained" size='small'>Add ({exercises.length})</Button>
      </header>
      <div className='app'>
        <SearchBar onSearch={(query) => setSearchTerm(query)} />
        {
          loading ?
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Bars
                height="80"
                width="80"
                color="#4a90e2"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true} />
            </div> :
            <ul className='exercises-list'>
              {searchData.map(item => <ExerciseListItem id={item.id} name={item.name} type={item.bodyPart} imgSrc={item.gifUrl} selected={exercises.includes(item.id)} key={item.id} click={() => handleAddExercise(item.id)} />)}
            </ul>
        }

      </div>
    </div>
  )
}
