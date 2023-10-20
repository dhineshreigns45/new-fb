import React from "react";
import Navigation from "../components/Navigation/Navigation";
import './store.css';
import { FiSearch, FiSettings } from 'react-icons/fi';
import { AiOutlineShop, AiOutlineInbox, AiTwotoneShopping } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { CiShoppingTag } from 'react-icons/ci';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';

const Store = () => {
  return (
    <div className="store">
      <div className="row">
        <div className="col-4">
          <div className="index" style={{ position: "fixed" }}>
            <h4 className="head">F-Market<FiSettings style={{ marginLeft: "10px", fontSize: "30px" }}/></h4>
            <div className="searchbar mb-4 mt-4">< FiSearch className="m-2"/>Search products</div>
            <h6 className="h5 mb-4"><AiOutlineShop className="fi" size={30}/>Browse all</h6>
            <h6 className="h5 mb-4"><IoMdNotificationsOutline className="fi" size={30}/>Notification</h6>
            <h6 className="h5 mb-4"><AiOutlineInbox className="fi" size={30}/>Inbox</h6>
            <h6 className="h5 mb-4"><AiTwotoneShopping className="fi" size={30}/>Buying</h6>
            <h6 className="h5 mb-4"><CiShoppingTag className="fi" size={30}/>Selling</h6>
          </div>
        </div>
        
        <div className="col-8 mt-5"><div className="m-3"><h3>FB Store</h3></div>
          <div className="market">
            <CardGroup>
              <Card className="mt-5 m-3">
                <Card.Img variant="top"  src='https://supplyleader.com/preview_files/179952.jpg' />
                <Card.Body>
                  <Card.Text>
                    Mobile phone
                  </Card.Text>
                  <Button variant="primary" style={{ width: "150px" }}>₹15,000</Button>
                </Card.Body>
              </Card>
              <Card className="mt-5 m-3">
                <Card.Img variant="top" src='https://stirmas.com/wp-content/uploads/2019/08/Unique-Design-Square-Men-Wristwatch-Wide-Big-Dial-Quartz-Male-Sport-Watch-Stirmas-1.jpg' />
                <Card.Body>
                  <Card.Text>
                    Watch
                  </Card.Text>
                  <Button variant="primary" style={{ width: "150px" }}>₹6,000</Button>
                </Card.Body>
              </Card>
              <Card className="mt-5 m-3">
                <Card.Img variant="top"  src='https://www.tennisnuts.com/images/product/full/g_599395-011-PHSRH000-2000.jpg' />
                <Card.Body>
                  <Card.Text>
                      Shoes 
                  </Card.Text>
                  <Button variant="primary" style={{ width: "150px" }}>₹500</Button>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default Store;
