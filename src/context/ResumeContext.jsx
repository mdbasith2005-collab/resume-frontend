import React, { createContext, useState, useContext } from 'react';

// Create Context
const ResumeContext = createContext();

// Default empty state based on schema
const initialState = {
  personalDetails: {
    name: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    github: ''
  },
  qualifications: [],
  skills: {
    technical: [],
    languages: [],
    frameworks: [],
    soft: []
  },
  experiences: [],
  projects: [],
  strengths: [],
  weaknesses: []
};

// Provider Component
export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Helper functions to update specific sections
  const updatePersonalDetails = (data) => {
    setResumeData(prev => ({ ...prev, personalDetails: data }));
  };

  const updateQualifications = (data) => {
    setResumeData(prev => ({ ...prev, qualifications: data }));
  };

  const updateSkills = (data) => {
    setResumeData(prev => ({ ...prev, skills: data }));
  };

  const updateExperiences = (data) => {
    setResumeData(prev => ({ ...prev, experiences: data }));
  };

  const updateProjects = (data) => {
    setResumeData(prev => ({ ...prev, projects: data }));
  };

  const updateStrengthsWeaknesses = (strengths, weaknesses) => {
    setResumeData(prev => ({ ...prev, strengths, weaknesses }));
  };

  const resetData = () => {
    setResumeData(initialState);
    setSubmitError(null);
  };

  const submitResume = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/resumes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resumeData),
      });

      const responseText = await response.text();
      let data;
      try {
        data = responseText ? JSON.parse(responseText) : {};
      } catch (err) {
        throw new Error(`Server returned invalid JSON. Status: ${response.status}. Response: ${responseText.substring(0, 100)}...`);
      }

      if (!response.ok) {
        const errorMsg = data.error?.message || data.message || `Server returned ${response.status}`;
        throw new Error(errorMsg);
      }

      return { success: true, data };
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError(error.message);
      return { success: false, error: error.message };
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ResumeContext.Provider value={{
      resumeData,
      setResumeData,
      updatePersonalDetails,
      updateQualifications,
      updateSkills,
      updateExperiences,
      updateProjects,
      updateStrengthsWeaknesses,
      resetData,
      submitResume,
      isSubmitting,
      submitError
    }}>
      {children}
    </ResumeContext.Provider>
  );
};

// Custom hook to use context
export const useResumeContext = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResumeContext must be used within a ResumeProvider');
  }
  return context;
};
