// Courses.js

import React from 'react';
import './courses.css'; // Don't forget to import your CSS file
import pic from './images/gra.jpg'

const Courses = () => {
  const coursesData = [
    {
      title: 'MS Office Course',
      description: 'Learn the essentials of Microsoft Office applications.',
      image: 'ms_office_image.jpg', // Replace with the actual image filename or path
    },
    {
      title: 'Web Development',
      description: 'Master the skills to build modern web applications.',
      image: {pic},
    },
    {
      title: 'Graphic Designing',
      description: 'Explore the world of graphic design and digital art.',
      image: 'graphic_design_image.jpg',
    },
    // Add more courses as needed
  ];

  return (
    <div className="courses-container">
      <h2>Available Courses</h2>
      <div className="courses-list">
        {coursesData.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.title} />
            <div className="course-details">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
