import React from 'react';
import { useResumeContext } from '../../context/ResumeContext';

const ProjectsForm = () => {
  const { resumeData, updateProjects } = useResumeContext();
  const { projects } = resumeData;

  const handleAdd = () => {
    updateProjects([...projects, { title: '', technologies: '', description: '', outcome: '' }]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newProjects = [...projects];
    newProjects[index][name] = value;
    updateProjects(newProjects);
  };

  const handleRemove = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    updateProjects(newProjects);
  };

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h3>Projects</h3>
        <button onClick={handleAdd} className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>+ Add Project</button>
      </div>

      {projects.length === 0 ? (
        <p className="text-muted" style={{ textAlign: 'center', padding: '2rem 0' }}>No projects added yet. Click 'Add Project' to start.</p>
      ) : (
        projects.map((proj, index) => (
          <div key={index} style={styles.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '1rem' }}>Project #{index + 1}</h4>
              <button onClick={() => handleRemove(index)} style={styles.removeBtn}>Remove</button>
            </div>
            
            <div style={styles.grid}>
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Project Title</label>
                <input type="text" name="title" className="form-control" placeholder="AI Resume Generator" value={proj.title} onChange={(e) => handleChange(index, e)} />
              </div>
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Technologies Used</label>
                <input type="text" name="technologies" className="form-control" placeholder="React, Node.js, MongoDB" value={proj.technologies} onChange={(e) => handleChange(index, e)} />
              </div>
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Project Description</label>
                <textarea 
                  name="description" 
                  className="form-control" 
                  placeholder="Describe what the project is and your role..." 
                  value={proj.description} 
                  onChange={(e) => handleChange(index, e)}
                  style={{ minHeight: '80px' }}
                />
              </div>
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Project Outcome / Links</label>
                <textarea 
                  name="outcome" 
                  className="form-control" 
                  placeholder="What was the result? Include links to live demo or GitHub..." 
                  value={proj.outcome} 
                  onChange={(e) => handleChange(index, e)}
                  style={{ minHeight: '80px' }}
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

export default ProjectsForm;
