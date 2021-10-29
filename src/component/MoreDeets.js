import React from "react";
import "./Box.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {BsTelephoneFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md"
import { Link } from "react-router-dom";
const MoreDeets = () => {
  const cardInfo = [
   
    {
      image:
        "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
      title: "NGO Name",
      address: "Dhaleshwar Road Number 2, Agartala",
      phone:"1234567890",
      email:"xyz@gmail.com"
    },

    {
      image:
        "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
      title: "NGO Name",
      address: "Dhaleshwar Road Number 2, Agartala",
      phone:"1234567890",
      email:"xyz@gmail.com"
    },
    {
      image:
        "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
      title: "NGO Name",
      address: "Dhaleshwar Road Number 2, Agartala",
      phone:"1234567890",
      email:"xyz@gmail.com"
    }
    
   
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top"  src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.address}</Card.Text>
          <Card.Text><BsTelephoneFill/> {card.phone}</Card.Text>
          <Card.Text><MdEmail/> {card.email}</Card.Text>
        </Card.Body>
        <Link to ="/contact">
        <Button style ={{marginBottom :10}} variant="primary">Contact</Button>
        </Link>
      </Card>
    );
  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default MoreDeets;
