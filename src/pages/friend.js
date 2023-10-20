// Sidebar.js
import React from 'react';
import Ic from './images/friends.svg'
import { FiSearch, FiSettings } from 'react-icons/fi';

import { FaBirthdayCake, FaHome, FaUserFriends, FaUserPlus, FaUsers } from 'react-icons/fa';
import Navigation from '../components/Navigation/Navigation';
import './Sidebar.css'
import { Button, Card } from 'react-bootstrap';
const Sidebar = () => {
  return (
    <div className="store1">
    <div className="row">
      <div className="col-4 m-5">
        <div className="index" style={{ position: "fixed" }}>
          <h4 className="head mt-2 mb-2 ms-2">Friends<FiSettings style={{ marginLeft: "150px", fontSize: "30px" }}/></h4>
          <h6 className="h5 mb-2 mt-4"><FaHome className="fi" size={30}/>Home</h6>
          <h6 className="h5 mb-2 mt-4"><FaUserPlus className="fi" size={30}/>Friend requests</h6>
          <h6 className="h5 mb-2 mt-4"><FaUsers className="fi" size={30}/>Suggestions</h6>
          <h6 className="h5 mb-2 mt-4"><FaUserFriends className="fi" size={30}/>All Friends</h6>
          <h6 className="h5 mb-2 mt-4"><FaBirthdayCake className="fi" size={30}/>Birthdays</h6>
        </div>
      </div>
      <div className="col-8 mt-5 card1 text-center" >
  <div className="m-5">
    <Card style={{ background: '#f0f2f5', border:'none' }} className="mt-5 m-3">
      <Card.Img variant="top" style={{ width: '150px', height: '150px', marginLeft: 'auto', marginRight: 'auto' }} src={Ic} />
      <Card.Body>
        <Card.Text>
          When you have friend requests or suggestions, you'll see them here.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
</div>


      </div>
      <Navigation />
      </div>
  );
};

export default Sidebar;
