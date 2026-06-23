import React from 'react';
import { useResumeContext } from '../../context/ResumeContext';

const PersonalDetailsForm = () => {
  const { resumeData, updatePersonalDetails } = useResumeContext();
  const { personalDetails } = resumeData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updatePersonalDetails({ ...personalDetails, [name]: value });
  };

  return (
    <div className="animate-fade-in">
      <h3 style={{ marginBottom: '1.5rem' }}>Personal Details</h3>
      
      <div style={styles.grid}>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input 
            type="text" 
            name="name"
            className="form-control" 
            placeholder="John Doe"
            value={personalDetails.name}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input 
            type="email" 
            name="email"
            className="form-control" 
            placeholder="john@example.com"
            value={personalDetails.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input 
            type="tel" 
            name="phone"
            className="form-control" 
            placeholder="+1 234 567 8900"
            value={personalDetails.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Address</label>
          <input 
            type="text" 
            name="address"
            className="form-control" 
            placeholder="City, Country"
            value={personalDetails.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">LinkedIn Profile</label>
          <input 
            type="url" 
            name="linkedin"
            className="form-control" 
            placeholder="https://linkedin.com/in/johndoe"
            value={personalDetails.linkedin}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">GitHub Profile</label>
          <input 
            type="url" 
            name="github"
            className="form-control" 
            placeholder="https://github.com/johndoe"
            value={personalDetails.github}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
  }
};

export default PersonalDetailsForm;
