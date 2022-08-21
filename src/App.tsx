import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import MachineTypes from './features/machineTypes/MachineTypes';
import Machines from './features/machineTypes/Machines';
import MachineTypesList from './features/machineTypes/MachineTypesList';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/types' element={<MachineTypes />}>
        <Route path='' element={<MachineTypesList />} />
        <Route path='manage' element={<Machines />} />
        <Route path=':id' element={<Machines />} />
      </Route>
      <Route path='/' element={<Navigate to="/types" />} />
    </Routes>
  )
}

export default AppRoutes;
