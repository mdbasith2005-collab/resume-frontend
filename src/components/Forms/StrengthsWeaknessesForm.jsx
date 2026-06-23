import React, { useState } from 'react';
import { useResumeContext } from '../../context/ResumeContext';

const StrengthsWeaknessesForm = () => {
  const { resumeData, updateStrengthsWeaknesses } = useResumeContext();
  const { strengths, weaknesses } = resumeData;

  const [inputs, setInputs] = useState({
    strength: '',
    weakness: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleKeyDown = (e, type) => {
    if (e.key === 'Enter' && inputs[type].trim()) {
      e.preventDefault();
      const newItem = inputs[type].trim();
      
      if (type === 'strength' && !strengths.includes(newItem)) {
        updateStrengthsWeaknesses([...strengths, newItem], weaknesses);
      } else if (type === 'weakness' && !weaknesses.includes(newItem)) {
        updateStrengthsWeaknesses(strengths, [...weaknesses, newItem]);
      }
      
      setInputs({ ...inputs, [type]: '' });
    }
  };

  const removeItem = (type, index) => {
    if (type === 'strength') {
      const newItems = strengths.filter((_, i) => i !== index);
      updateStrengthsWeaknesses(newItems, weaknesses);
    } else {
      const newItems = weaknesses.filter((_, i) => i !== index);
      updateStrengthsWeaknesses(strengths, newItems);
    }
  };

  const renderSection = (title, type, items, placeholder) => (
    <div className="form-group" style={{ marginBottom: '2.5rem' }}>
      <label className="form-label">{title}</label>
      <div style={styles.inputWrapper}>
        <input
          type="text"
          name={type}
          className="form-control"
          placeholder={placeholder}
          value={inputs[type]}
          onChange={handleInputChange}
          onKeyDown={(e) => handleKeyDown(e, type)}
        />
        <small className="text-muted" style={{ display: 'block', marginTop: '0.5rem' }}>Press Enter to add</small>
      </div>
      
      <div style={styles.tagsContainer}>
        {items.map((item, index) => (
          <span key={index} style={styles.tag}>
            {item}
            <button onClick={() => removeItem(type, index)} style={styles.tagRemove}>&times;</button>
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="animate-fade-in">
      <h3 style={{ marginBottom: '1.5rem' }}>Strengths & Weaknesses</h3>
      
      {renderSection('Strengths', 'strength', strengths, 'e.g., Quick Learner, Problem Solving, Leadership...')}
      {renderSection('Weaknesses', 'weakness', weaknesses, 'e.g., Perfectionism, Public Speaking Anxiety...')}
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
    padding: '0.5rem 1rem',
    backgroundColor: 'var(--bg-tertiary)',
    border: '1px solid var(--border-color)',
    color: 'var(--text-primary)',
    borderRadius: 'var(--border-radius-sm)',
    fontSize: '0.875rem',
  },
  tagRemove: {
    background: 'none',
    border: 'none',
    color: '#ef4444',
    cursor: 'pointer',
    fontSize: '1.25rem',
    lineHeight: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '0.5rem',
  }
};

export default StrengthsWeaknessesForm;
