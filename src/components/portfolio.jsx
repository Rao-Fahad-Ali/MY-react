import React from 'react';
import { useParams } from 'react-router-dom';
import './portfolio.css';
import Ali from './images/gulu.jpg'
import Zakia from './images/zaku.jpg'

const IndividualPortfolio = () => {
  const { person } = useParams();

  // Simulated data, replace with actual details
  const personDetails = {
    'mr-ali-ahmad': {
      name: 'Mr. Ali Ahmad',
      role: 'CEO',
      description: 'CEO of AIMZ Technical Institute Depalpur',
      image: {Ali}, // Replace with the actual image filename
    },
    'rao-fahad-ali': {
      name: 'Rao Fahad Ali',
      role: 'Section Head / IT Instructor and Web Developer',
      description: 'Section Head, IT Instructor, and Web Developer at AIMZ Tech',
      image: ({Ali}), // Replace with the actual image filename
    },
    'zakia-maharvi': {
      name: 'Zakia Maharvi',
      role: 'Section Head of Academy Section',
      description: 'Section Head of Academy Section at AIMZ Tech',
      image: {Zakia}, // Replace with the actual image filename
    },
  };

  const details = personDetails[person];

  return (
    <div className="portfolio" >
        <div className="port">
      <img src={Ali} alt={details.name} />
      
      <h2>{details.name}</h2>
      <p>{details.role}</p>
      <p>{details.description}</p>
      </div>
    </div>
  );
};

export default IndividualPortfolio;
