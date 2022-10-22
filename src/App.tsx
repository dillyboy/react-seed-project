import React from 'react';
import './App.scss';
import Nav from './Components/Nav/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Users from './Pages/Users/Users';
import Profile from './Pages/Profile/Profile';
import EditUser from './Pages/EditUser/EditUser';

function App() {
  return (
    <div>
      <header>
        <h1 className="tw-text-3xl tw-font-bold tw-underline">React Router v6</h1>
      </header>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users"  element={<Users />}>
          <Route path=":id" element={<EditUser />} />
          <Route path="me" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
