import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResumeContext } from '../context/ResumeContext';

import PersonalDetailsForm from '../components/Forms/PersonalDetailsForm';
import QualificationForm from '../components/Forms/QualificationForm';
import SkillsForm from '../components/Forms/SkillsForm';
import ExperienceForm from '../components/Forms/ExperienceForm';
import ProjectsForm from '../components/Forms/ProjectsForm';
import StrengthsWeaknessesForm from '../components/Forms/StrengthsWeaknessesForm';
import LivePreview from '../components/Preview/LivePreview';

const BuilderPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const { resumeData, submitResume, isSubmitting, submitError, resetData } = useResumeContext();

  const handleNextOrFinish = async () => {
    if (currentStep < 6) {
      setCurrentStep(prev => prev + 1);
    } else {
      const result = await submitResume();
      if (result.success) {
        alert('Resume saved successfully!');
        resetData();
        navigate('/');
      } else {
        alert(`Failed to save: ${result.error}`);
      }
    }
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1: return <PersonalDetailsForm />;
      case 2: return <QualificationForm />;
      case 3: return <SkillsForm />;
      case 4: return <ExperienceForm />;
      case 5: return <ProjectsForm />;
      case 6: return <StrengthsWeaknessesForm />;
      default: return <PersonalDetailsForm />;
    }
  };

  return (
    <div style={styles.container}>
      {/* Left side: Forms */}
      <div className="glass-panel" style={styles.formSection}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2>Resume Builder</h2>
          <div style={styles.stepIndicator}>
            Step {currentStep} of 6
          </div>
        </div>
        
        {/* Progress Bar */}
        <div style={styles.progressBarContainer}>
          <div style={{ ...styles.progressBar, width: `${(currentStep / 6) * 100}%` }}></div>
        </div>
        
        <div style={styles.formContent}>
          {renderForm()}
        </div>
        
        <div style={styles.navigation}>
          <button 
            className="btn btn-secondary" 
            disabled={currentStep === 1}
            onClick={() => setCurrentStep(prev => prev - 1)}
          >
            Previous
          </button>
          <button 
            className="btn btn-primary" 
            onClick={handleNextOrFinish}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : (currentStep === 6 ? 'Finish' : 'Next')}
          </button>
        </div>
      </div>

      {/* Right side: Live Preview */}
      <div className="glass-panel" style={styles.previewSection}>
        <LivePreview />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    padding: '2rem',
    height: 'calc(100vh - 80px)',
  },
  formSection: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
  },
  previewSection: {
    padding: '0',
    backgroundColor: 'var(--bg-secondary)',
    overflowY: 'auto',
  },
  stepIndicator: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
    fontWeight: '500',
  },
  progressBarContainer: {
    height: '4px',
    backgroundColor: 'var(--bg-primary)',
    borderRadius: '2px',
    marginBottom: '2rem',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'var(--accent-primary)',
    transition: 'width 0.3s ease',
  },
  formContent: {
    flex: 1,
    marginBottom: '2rem',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 'auto',
    paddingTop: '2rem',
    borderTop: '1px solid var(--border-color)'
  }
};

export default BuilderPage;
