import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import SearchBar from '../components/ui/CustomSearchInput';
import { getAllExercises, searchExercise } from '../server/apiService';
import { ExerciseListItem } from '../components/ui/ExerciseListItem';
import { Bars } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { addBatch, addExercise, removeExercise } from '../reducers/newWorkOut';

export const AddExercise = () => {
  const navigate = useNavigate();
  const cancel = () => navigate(-1);

  const [searchTerm, setSearchTerm] = useState('');
  const [exercises, setExercises] = useState({});
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()

  const handleSave = () => {
    navigate(-1)
    const data = Object.entries(exercises).map(([i, data]) => data)
    dispatch(addBatch({ exercises: data }))
  }
  const handleAddExercise = (exercise) => {
    setExercises((prevExercises) => {
      const updatedExercises = { ...prevExercises };
      if (updatedExercises[exercise.id]) {
        delete updatedExercises[exercise.id];
      } else {
        updatedExercises[exercise.id] = exercise;
      }
      return updatedExercises;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await getAllExercises();
        setSearchData(data.slice(0, 100));
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const debounceId = setTimeout(() => {
      if (searchTerm.trim() === '') return;
      setLoading(true);
      searchExercise({ name: searchTerm })
        .then(({ data }) => setSearchData(data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false)); // Ensure loading is stopped
    }, 2000);

    return () => clearTimeout(debounceId);
  }, [searchTerm]);

  return (
    <div>
      <header className='new-workout-header'>
        <Button variant="text" color='error' size='small' onClick={cancel}>Cancel</Button>
        <p>Add exercise</p>
        <Button variant="contained" size='small' onClick={handleSave}>Add ({Object.keys(exercises).length})</Button> {/* Fixed length calculation */}
      </header>
      <div className='app'>
        <SearchBar onSearch={(query) => setSearchTerm(query)} />
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Bars
              height="80"
              width="80"
              color="#4a90e2"
              ariaLabel="bars-loading"
              visible={true}
            />
          </div>
        ) : (
          <ul className='exercises-list'>
            {searchData.map((item) => (
              <ExerciseListItem
                key={item.id}
                id={item.id}
                name={item.name}
                type={item.bodyPart}
                imgSrc={item.gifUrl}
                selected={!!exercises[item.id]}
                click={() => handleAddExercise(item)}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
