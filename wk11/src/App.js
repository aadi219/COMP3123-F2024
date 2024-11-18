import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import UserDetails from './components/UserDetails';

class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList/>} />
          <Route path='/user/:userId' element={<UserDetails/>} />
        </Routes>
      </BrowserRouter>
    );
}
}

export default App;
