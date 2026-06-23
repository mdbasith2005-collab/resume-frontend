import React from 'react';
import { useResumeContext } from '../../context/ResumeContext';

const ExperienceForm = () => {
  const { resumeData, updateExperiences } = useResumeContext();
  const { experiences } = resumeData;

  const handleAdd = () => {
    updateExperiences([...experiences, { company: '', role: '', duration: '', responsibilities: '' }]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newExps = [...experiences];
    newExps[index][name] = value;
    updateExperiences(newExps);
  };

  const handleRemove = (index) => {
    const newExps = experiences.filter((_, i) => i !== index);
    updateExperiences(newExps);
  };

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h3>Work Experience</h3>
        <button onClick={handleAdd} className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>+ Add Experience</button>
      </div>

      {experiences.length === 0 ? (
        <p className="text-muted" style={{ textAlign: 'center', padding: '2rem 0' }}>No experience added yet. Click 'Add Experience' to start.</p>
      ) : (
        experiences.map((exp, index) => (
          <div key={index} style={styles.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '1rem' }}>Experience #{index + 1}</h4>
              <button onClick={() => handleRemove(index)} style={styles.removeBtn}>Remove</button>
            </div>
            
            <div style={styles.grid}>
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Company Name</label>
                <input type="text" name="company" className="form-control" placeholder="Google, Amazon, etc." value={exp.company} onChange={(e) => handleChange(index, e)} />
              </div>
              <div className="form-group">
                <label className="form-label">Job Role</label>
                <input type="text" name="role" className="form-control" placeholder="Software Engineer" value={exp.role} onChange={(e) => handleChange(index, e)} />
              </div>
              <div className="form-group">
                <label className="form-label">Duration</label>
                <input type="text" name="duration" className="form-control" placeholder="Jan 2020 - Present" value={exp.duration} onChange={(e) => handleChange(index, e)} />
              </div>
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Responsibilities / Achievements</label>
                <textarea 
                  name="responsibilities" 
                  className="form-control" 
                  placeholder="Describe your key responsibilities and achievements..." 
                  value={exp.responsibilities} 
                  onChange={(e) => handleChange(index, e)}
                  style={{ minHeight: '120px' }}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
  },
  card: {
    padding: '1.5rem',
    backgroundColor: 'var(--bg-tertiary)',
    borderRadius: 'var(--border-radius-md)',
    marginBottom: '1.5rem',
    border: '1px solid var(--border-color)',
  },
  removeBtn: {
    background: 'none',
    border: 'none',
    color: '#ef4444',
    cursor: 'pointer',
    fontSize: '0.875rem',
  }
};

export default ExperienceForm;
