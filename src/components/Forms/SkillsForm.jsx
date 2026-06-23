import React, { useState } from 'react';
import { useResumeContext } from '../../context/ResumeContext';

const SkillsForm = () => {
  const { resumeData, updateSkills } = useResumeContext();
  const { skills } = resumeData;

  const [inputs, setInputs] = useState({
    technical: '',
    languages: '',
    frameworks: '',
    soft: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleKeyDown = (e, category) => {
    if (e.key === 'Enter' && inputs[category].trim()) {
      e.preventDefault();
      const newSkill = inputs[category].trim();
      if (!skills[category].includes(newSkill)) {
        updateSkills({
          ...skills,
          [category]: [...skills[category], newSkill]
        });
      }
      setInputs({ ...inputs, [category]: '' });
    }
  };

  const removeSkill = (category, index) => {
    const newCategorySkills = skills[category].filter((_, i) => i !== index);
    updateSkills({
      ...skills,
      [category]: newCategorySkills
    });
  };

  const renderSkillCategory = (title, category, placeholder) => (
    <div className="form-group" style={{ marginBottom: '2rem' }}>
      <label className="form-label">{title}</label>
      <div style={styles.inputWrapper}>
        <input
          type="text"
          name={category}
          className="form-control"
          placeholder={placeholder}
          value={inputs[category]}
          onChange={handleInputChange}
          onKeyDown={(e) => handleKeyDown(e, category)}
        />
        <small className="text-muted" style={{ display: 'block', marginTop: '0.5rem' }}>Press Enter to add</small>
      </div>
      
      <div style={styles.tagsContainer}>
        {skills[category].map((skill, index) => (
          <span key={index} style={styles.tag}>
            {skill}
            <button onClick={() => removeSkill(category, index)} style={styles.tagRemove}>&times;</button>
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="animate-fade-in">
      <h3 style={{ marginBottom: '1.5rem' }}>Skills</h3>
      
      {renderSkillCategory('Technical Skills', 'technical', 'e.g., Data Analysis, System Design')}
      {renderSkillCategory('Programming Languages', 'languages', 'e.g., JavaScript, Python, C++')}
      {renderSkillCategory('Frameworks & Libraries', 'frameworks', 'e.g., React, Node.js, Django')}
      {renderSkillCategory('Soft Skills', 'soft', 'e.g., Communication, Leadership')}
    </div>
  );
};

const styles = {
  inputWrapper: {
    marginBottom: '1rem',
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  tag: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.25rem 0.75rem',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    color: 'var(--accent-primary)',
    borderRadius: 'full',
    fontSize: '0.875rem',
  },
  tagRemove: {
    background: 'none',
    border: 'none',
    color: 'var(--accent-primary)',
    cursor: 'pointer',
    fontSize: '1.25rem',
    lineHeight: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default SkillsForm;
