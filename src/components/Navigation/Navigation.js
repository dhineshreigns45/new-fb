import React from "react";
import { BsFacebook, BsMessenger } from "react-icons/bs";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { IoStorefrontOutline, IoNotifications } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import{PiVideoFill} from "react-icons/pi";
import{MdGroups2,MdOutlineGroup }from "react-icons/md";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css'
import Navbar from 'react-bootstrap/Navbar';
const Navigation = () => {
return (
<Navbar bg="light" expand="lg" className="nav">
<Container>
<Navbar.Brand>
<BsFacebook className=" icon text-primary"size="40px" style={{left:"-80px",position:"relative"}} />
</Navbar.Brand><div className="searching"style={{left:"-80px",position:"relative",width:"200px"}}>
<AiOutlineSearch size="25px" />Search facebook
</div>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mx-5 align-items-center">
<Nav.Link href="/home" className="homies"><AiFillHome
className="text-primary mx-4 "size="30px" /></Nav.Link>
<Nav.Link href="/friend" className="homies"><MdOutlineGroup
size="30px" className="mx-4"/></Nav.Link>
<Nav.Link href="/video" className="homies"><PiVideoFill
className="mx-4 "size="30px" /></Nav.Link>
<Nav.Link href="/store" className="homies"><IoStorefrontOutline
size="30px" className="text-dark mx-4"/></Nav.Link>
</Nav>
</Navbar.Collapse>
<div className=" icon gap-4" >
<div className="icon_wrapper text-[28px]"style={{marginLeft:'30%'}}>
<CgMenuGridO size="30px"/>
</div>
<div className="icon_wrapper text-[20px]">
<BsMessenger size="30px" />
</div>
<div className="icon_wrapper text-[20px]">
<IoNotifications size="30px" />
</div>
<img src="https://i.pinimg.com/originals/17/19/51/171951d999e44effcdbdd22a01f5a41c.jpg" style={{height:"30px", 
width:"40px",borderRadius:"60%"}}/>
</div>
</Container>
</Navbar>
);
};
export default Navigation;