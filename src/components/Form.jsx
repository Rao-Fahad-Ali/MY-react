import React, { useState , } from 'react';
import './Form.css';
// import {links ,usehistory} from 'react-router-dom'

const courses = ["DOM", "Graphic Designing", "Web Development", "AIMZ First Anniversary session", "Others"];

const AdmissionForm = () => {
  // const history=usehistory();
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    cnic: '',
    email: '',
    phone: '',
    course: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate CNIC
    if (!/^\d{13}$/.test(formData.cnic)) {
      newErrors.cnic = 'CNIC must be 13 digits';
      valid = false;
    }

    // Validate Phone Number
    if (!/^\d{11}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 11 digits';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('/api/admissions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Admission form submitted successfully!');
        } else {
          console.error('Failed to submit admission form');
        }
      } catch (error) {
        console.error('Error submitting admission form:', error);
      }
    }
  };
  return (
    <div className="form-container">
      <h1>AIMZ TECHNICAL INSTITUTE</h1>
      <h2>REGISTRATION FORM</h2>
      <form className='for' onSubmit={handleSubmit} method='post'>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange}  />
        </label>
        <label>
          Father's Name:
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange}  />
        </label>
        <label>
          CNIC:
          <input type="text" name="cnic" value={formData.cnic} onChange={handleChange}  />
          {errors.cnic && <span className="error">{errors.cnic}</span>}
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange}  />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange}  />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>
        <label>
          Desired Course:
          <select name="course" value={formData.course} onChange={handleChange} >
            <option value="" disabled>Select a course</option>
            {courses.map((course) => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdmissionForm;
