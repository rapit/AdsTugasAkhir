import React from 'react';
import ReactDOM from 'react-dom/client';
import{
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import "./index.css";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Booklist from './Components/Booklist/Booklist';
import Bookdetails from './Components/Bookdetails/Bookdetails';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import BookCover from './Components/Bookcover/BookCover';
import { AppProvider } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="book" element={<Booklist />} />
          <Route path="/book/:id" element={<Bookdetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bookcover/:id" element={<BookCover />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);