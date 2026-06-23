import React from 'react';
import { useResumeContext } from '../../context/ResumeContext';

const QualificationForm = () => {
  const { resumeData, updateQualifications } = useResumeContext();
  const { qualifications } = resumeData;

  const handleAdd = () => {
    updateQualifications([...qualifications, { degree: '', college: '', department: '', cgpa: '', year: '' }]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newQuals = [...qualifications];
    newQuals[index][name] = value;
    updateQualifications(newQuals);
  };

  const handleRemove = (index) => {
    const newQuals = qualifications.filter((_, i) => i !== index);
    updateQualifications(newQuals);
  };

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h3>Qualifications</h3>
        <button onClick={handleAdd} className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>+ Add Education</button>
      </div>

      {qualifications.length === 0 ? (
        <p className="text-muted" style={{ textAlign: 'center', padding: '2rem 0' }}>No qualifications added yet. Click 'Add Education' to start.</p>
      ) : (
        qualifications.map((qual, index) => (
          <div key={index} style={styles.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '1rem' }}>Education #{index + 1}</h4>
              <button onClick={() => handleRemove(index)} style={styles.removeBtn}>Remove</button>
            </div>
            
            <div style={styles.grid}>
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Degree</label>
                <input type="text" name="degree" className="form-control" placeholder="B.Tech, B.Sc, etc." value={qual.degree} onChange={(e) => handleChange(index, e)} />
              </div>
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">College / University</label>
                <input type="text" name="college" className="form-control" placeholder="University Name" value={qual.college} onChange={(e) => handleChange(index, e)} />
              </div>
              <div className="form-group">
                <label className="form-label">Department</label>
                <input type="text" name="department" className="form-control" placeholder="Computer Science" value={qual.department} onChange={(e) => handleChange(index, e)} />
              </div>
              <div className="form-group">
                <label className="form-label">Graduation Year</label>
                <input type="text" name="year" className="form-control" placeholder="2024" value={qual.year} onChange={(e) => handleChange(index, e)} />
              </div>
              <div className="form-group">
                <label className="form-label">CGPA / Percentage</label>
                <input type="text" name="cgpa" className="form-control" placeholder="8.5 or 85%" value={qual.cgpa} onChange={(e) => handleChange(index, e)} />
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

export default QualificationForm;
