import React from 'react';
import './App.css';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Dashboard from './features/machineTypes/Pages/Dashboard';
import Machines from './features/machineTypes/Machines';
import MachineTypesList from './features/machineTypes/Pages/MachineTypesList';
import AllMachines from './features/machineTypes/Pages/AllMachines';
import EditExercise from './features/machineTypes/Pages/EditExercise';
import Exercises from './features/machineTypes/Pages/Exercises';
import AllExerciseList from './features/machineTypes/components/AllExercisesList';
import ViewExercise from './features/machineTypes/components/ViewExercise';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/exercises' element={<Exercises />}>
        <Route path='' element={<AllExerciseList />} />
        <Route path=':id' element={<ViewExercise />} />
      </Route>
      <Route path='/types' element={<Dashboard />}>
        <Route path='' element={<MachineTypesList />} />
        <Route path='all' element={<AllMachines />} />
        <Route path=':id' element={<Machines />} />
        <Route path='exercise/:machineId/:id' element={<EditExercise />} />
      </Route>
      <Route path='/' element={<Navigate to="/types" />} />
    </Routes>
  )
}

export default AppRoutes;
