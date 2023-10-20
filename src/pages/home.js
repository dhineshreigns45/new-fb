import React from "react";
import Navigation from "../components/Navigation/Navigation";
import './home.css';
import { FaAngleDown, FaUserFriends, FaSearch, FaGrin} from 'react-icons/fa'
import {MdVideoCall, MdMoreHoriz,MdGroups2,MdOndemandVideo,MdEventAvailable} from
'react-icons/md'
import {AiFillFileImage,AiOutlineShop} from 'react-icons/ai'
import{FcClock}from'react-icons/fc'
import{BsFillBookmarkFill,BsFlag,BsFillBarChartLineFill} from'react-icons/bs'
import St from './images/mas.jpg'
const Home = () => {
return(
<div className="homepage">
<div className="row">
<div className="col-3">
<div className="Leftside">
<div className="myProfile my-3">
<img src="https://i.pinimg.com/originals/17/19/51/171951d999e44effcdbdd22a01f5a41c.jpg" style={{height:"40px", 
width:"50px",borderRadius:"40%", marginRight:'10px'}}/>
<b>MS Dhinesh</b>
</div>
<div className="mainlogo mb-3">
<FaUserFriends color="blue" className="log" fontSize="20px" />
<div style={{marginLeft:'10px'}}>Find friends</div>
</div>
<div className="mainlogo mb-3">
<MdGroups2 color="blue" fontSize="20px"/>
<div style={{marginLeft:'10px'}}>Groups</div>
</div>
<div className="mainlogo mb-3">
<AiOutlineShop color="blue" fontSize="20px"/>
<div  style={{marginLeft:'10px'}}>Market Place</div>
</div>
<div className="mainlogo mb-3">
<MdOndemandVideo color="blue"fontSize="20px"/>
<div  style={{marginLeft:'10px'}}>Video</div>
</div>
<div className="mainlogo mb-3">
< FcClock fontSize="20px"/>
<div style={{marginLeft:'10px'}}>Memories</div>
</div>
<div className="mainlogo mb-3">
< BsFillBookmarkFill color="violet" fontSize="20px"/>
<div style={{marginLeft:'10px'}}>Saved</div>
</div>
<div className="mainlogo mb-3">
< BsFlag fontSize="20px" color="blue"className="log"/>
<div style={{marginLeft:'10px'}}>pages</div>
</div>
<div className="mainlogo mb-3">
< MdEventAvailable fontSize="20px" color="blue"
className="log"/>
<div style={{marginLeft:'10px'}}>Events</div>
</div>
<div className="mainlogo mb-3">
< BsFillBarChartLineFill fontSize="20px" color="blue"
className="log"/>
<div style={{marginLeft:'10px'}}>Ads Manager</div>
</div>
<div className="Pro">
<FaAngleDown fontSize="1rem" style={{marginLeft:'3px'}}/>see more

</div>
<br></br>
{/* <div className="Profiles">
<img src="/images/1.jpeg"style={{height:"35px", 
padding:"1rem"}}/>
Frontend 
</div>
<div className="Profiles">
<img src="/images/2.jpeg"style={{height:"35px", 
padding:"1rem"}}/>
MEAN STACK
</div>
 */}</div></div>
<div className="col-6 ">
<div className="MainArea mt-4 ms-4">
<div className="center ">
<div className="addStory">
<div className="Story"><div className="img2">
<img src="https://1.bp.blogspot.com/-jKQKjzKXBFY/XSA2bi8wZaI/AAAAAAAAAyA/yORT6KI0kH024FGMsbeRkMP-2acB1NX7QCLcBGAs/s1600/IMG_20190706_111524.jpg" alt="IMG"
style={{height:"60px", width:"50px",borderRadius:"60%",border:"3px solid blue"}}/>
</div>
</div>
<div className="Story"><div className="img1">
<img src="https://i.pinimg.com/originals/17/19/51/171951d999e44effcdbdd22a01f5a41c.jpg" alt="IMG"
style={{height:"60px", width:"50px",borderRadius:"60%",border:"3px solid blue"}}/>
</div>
</div><div className="Story"><div className="img3">
<img src="https://www.aljazeera.com/wp-content/uploads/2022/07/2022-07-08T163429Z_1748155903_RC2R7V96982Q_RTRMADP_3_ELON-MUSK-CHILDCARE.jpg?resize=1920%2C1440" alt="IMG"
style={{height:"60px", width:"50px",borderRadius:"60%",border:"3px solid blue"}}/>
</div>
</div>
<div className="Story"><div className="img4">
<img src={St} alt="IMG"
style={{height:"60px", width:"50px",borderRadius:"60%",border:"3px solid  blue"}}/>
</div>
</div>
</div>
<div className="message">
<div className="text">
<div className="Post">
<img src="https://i.pinimg.com/originals/17/19/51/171951d999e44effcdbdd22a01f5a41c.jpg" alt="PIC"/>
<input style={{width:'50ch'}} type="text" placeholder="What's on your 
mind, MS Dhinesh?"/>
</div>
<div className="Call">
<div className="ico">
<div className="icone">
<MdVideoCall fontSize="2rem"
color="red"/>
<div>LiveVideo</div>
</div>
<div className="icone">
<AiFillFileImage fontSize="2rem"
color="green"/>
<div>Photo/Video</div>
</div>
<div className="icone">
<FaGrin fontSize="2rem" color="orange"/>
<div>Felling/activity</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div></div>
<div className="col-3">
<div className ="Rightside">
<div className="Contact">
<div className="Contact-heading mb-3">
Contacts
</div>
<div className="contact-icons">
<div className="contact-svg">
<MdVideoCall fontSize="1.8rem"/>
</div>
<div className="contact-svg">
<FaSearch fontSize="1.6rem"/>
</div>
<div className="contact-svg">
<MdMoreHoriz fontSize="1.6rem"/>
</div>
</div>
</div>
<div className="list mb-3 m-3">
<div className="contact-list">
<img src="https://www.imageshine.in/uploads/gallery/hd-Images-of-modi-ji.jpg" style={{height:"35px",width:"35px"
,borderRadius:"50%", margin:'5px'}}/>
    Modi ji
</div>
<div className="contact-list mb-2">
<img src="https://images.statusfacebook.com/profile_pictures/gandhi-jayanti/gandhi-jayanti-13.jpg" style={{height:"35px",width:"35px", margin:'5px'
,borderRadius:"50%"}}/>
Gandhi
</div>
<div className="contact-list mb-2">
<img src="https://www.abc.net.au/reslib/201105/r760131_6380092.jpg" style={{height:"35px",width:"35px"
,borderRadius:"50%", margin:'5px'}}/>
Laden
</div>
<div className="contact-list mb-2">
<img src="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg" style={{height:"35px",width:"35px"
,borderRadius:"50%", margin:'5px'}}/>
MS Dhoni
</div>
<div className="contact-list mb-2">
<img src="https://www.gettysburgmuseumofhistory.com/wp-content/uploads/2020/09/C2893506-2219-43A3-96B5-A9E06F937C16-scaled.jpeg" style={{height:"30px", 
width:"30px" ,borderRadius:"50%", margin:'5px'}}/>
Hitman
</div>
</div>
</div>
<Navigation/></div>
</div>
</div>
);
}
export default Home;