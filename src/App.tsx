import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './features/machineTypes/Pages/Dashboard';
import Machines from './features/machineTypes/Machines';
import MachineTypesList from './features/machineTypes/Pages/MachineTypesList';
import AllMachines from './features/machineTypes/Pages/AllMachines';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/types' element={<Dashboard />}>
        <Route path='' element={<MachineTypesList />} />
        <Route path='all' element={<AllMachines />} />
        <Route path=':id' element={<Machines />} />
      </Route>
      <Route path='/' element={<Navigate to="/types" />} />
    </Routes>
  )
}

export default AppRoutes;
