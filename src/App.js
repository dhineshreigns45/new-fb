import React from 'react';
import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import Video from './pages/video';
import Store from './pages/store';
import Friend from './pages/friend'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
return ( 
<Router>
<Routes>
<Route path="/home" element={<Home />} />
<Route path="/" element={<Login />} />
<Route path="/video" element={<Video />} />
<Route path="/store" element={<Store />} />
<Route path="/friend" element={<Friend />} />
</Routes>
</Router>
);
}
export default App;