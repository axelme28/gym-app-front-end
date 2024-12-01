
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn } from '../views/SigIn';
import { Register } from '../views/Register';
import Home from '../views/Home';
import Trainings from '../views/trainings';
import Profile from '../views/Profile';
import MainLayout from '../components/layout/MainLayout';
import { NewWorkout } from '../views/NewWorkout';
import { AddExercise } from '../views/AddExercise';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<MainLayout><Home /></MainLayout>} /> {/* Protected route */}
          <Route path="/trainings" element={<MainLayout><Trainings /></MainLayout>} /> {/* Protected route */}
          <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} /> {/* Protected route */}
          <Route path="/newWorkout" element={<NewWorkout />} />
          <Route path="/addExercise" element={<AddExercise />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;