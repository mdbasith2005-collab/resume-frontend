import React from 'react';
import { useResumeContext } from '../../context/ResumeContext';

const LivePreview = () => {
  const { resumeData } = useResumeContext();
  const { personalDetails, qualifications, skills, experiences, projects, strengths, weaknesses } = resumeData;

  const hasContent = (arr) => arr && arr.length > 0;
  const hasSkill = (category) => skills[category] && skills[category].length > 0;

  return (
    <div style={styles.previewContainer}>
      <div style={styles.page}>
        
        {/* Header - Personal Details */}
        <div style={styles.header}>
          <h1 style={styles.name}>{personalDetails.name || 'Your Name'}</h1>
          <div style={styles.contactInfo}>
            {personalDetails.email && <span>{personalDetails.email}</span>}
            {personalDetails.phone && <span> | {personalDetails.phone}</span>}
            {personalDetails.address && <span> | {personalDetails.address}</span>}
          </div>
          <div style={styles.links}>
            {personalDetails.linkedin && <a href={personalDetails.linkedin} style={styles.link}>{personalDetails.linkedin}</a>}
            {personalDetails.linkedin && personalDetails.github && <span> | </span>}
            {personalDetails.github && <a href={personalDetails.github} style={styles.link}>{personalDetails.github}</a>}
          </div>
        </div>

        {/* Experience */}
        {hasContent(experiences) && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Experience</h2>
            <div style={styles.sectionContent}>
              {experiences.map((exp, idx) => (
                <div key={idx} style={styles.item}>
                  <div style={styles.itemHeader}>
                    <span style={styles.itemTitle}>{exp.role}</span>
                    <span style={styles.itemDate}>{exp.duration}</span>
                  </div>
                  <div style={styles.itemSubtitle}>{exp.company}</div>
                  {exp.responsibilities && <p style={styles.itemDesc}>{exp.responsibilities}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {hasContent(qualifications) && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Education</h2>
            <div style={styles.sectionContent}>
              {qualifications.map((edu, idx) => (
                <div key={idx} style={styles.item}>
                  <div style={styles.itemHeader}>
                    <span style={styles.itemTitle}>{edu.degree} in {edu.department}</span>
                    <span style={styles.itemDate}>{edu.year}</span>
                  </div>
                  <div style={styles.itemSubtitle}>{edu.college}</div>
                  {edu.cgpa && <div style={styles.itemDesc}>CGPA/Percentage: {edu.cgpa}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {hasContent(projects) && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Projects</h2>
            <div style={styles.sectionContent}>
              {projects.map((proj, idx) => (
                <div key={idx} style={styles.item}>
                  <div style={styles.itemHeader}>
                    <span style={styles.itemTitle}>{proj.title}</span>
                  </div>
                  {proj.technologies && <div style={styles.itemSubtitle}>Technologies: {proj.technologies}</div>}
                  {proj.description && <p style={styles.itemDesc}>{proj.description}</p>}
                  {proj.outcome && <p style={styles.itemDesc}>{proj.outcome}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {(hasSkill('technical') || hasSkill('languages') || hasSkill('frameworks') || hasSkill('soft')) && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Skills</h2>
            <div style={styles.sectionContent}>
              {hasSkill('languages') && <div style={styles.skillRow}><strong>Languages:</strong> {skills.languages.join(', ')}</div>}
              {hasSkill('frameworks') && <div style={styles.skillRow}><strong>Frameworks:</strong> {skills.frameworks.join(', ')}</div>}
              {hasSkill('technical') && <div style={styles.skillRow}><strong>Technical:</strong> {skills.technical.join(', ')}</div>}
              {hasSkill('soft') && <div style={styles.skillRow}><strong>Soft Skills:</strong> {skills.soft.join(', ')}</div>}
            </div>
          </div>
        )}

        {/* Strengths & Weaknesses */}
        {(hasContent(strengths) || hasContent(weaknesses)) && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Additional Information</h2>
            <div style={styles.sectionContent}>
              {hasContent(strengths) && <div style={styles.skillRow}><strong>Strengths:</strong> {strengths.join(', ')}</div>}
              {hasContent(weaknesses) && <div style={styles.skillRow}><strong>Weaknesses:</strong> {weaknesses.join(', ')}</div>}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

const styles = {
  previewContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#525659', // PDF viewer like background
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
    overflowY: 'auto',
  },
  page: {
    width: '100%',
    maxWidth: '800px', // A4 aspect ratio approximation
    minHeight: '1000px',
    backgroundColor: 'white',
    color: '#333',
    padding: '3rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    lineHeight: 1.5,
  },
  header: {
    textAlign: 'center',
    borderBottom: '2px solid #333',
    paddingBottom: '1rem',
    marginBottom: '1.5rem',
  },
  name: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#111',
    marginBottom: '0.25rem',
    textTransform: 'uppercase',
  },
  contactInfo: {
    fontSize: '0.9rem',
    color: '#555',
    marginBottom: '0.25rem',
  },
  links: {
    fontSize: '0.875rem',
  },
  link: {
    color: '#0066cc',
    textDecoration: 'none',
  },
  section: {
    marginBottom: '1.5rem',
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#111',
    textTransform: 'uppercase',
    borderBottom: '1px solid #ccc',
    paddingBottom: '0.25rem',
    marginBottom: '0.75rem',
  },
  sectionContent: {
    paddingLeft: '0.5rem',
  },
  item: {
    marginBottom: '1rem',
  },
  itemHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: '1.05rem',
    color: '#222',
  },
  itemDate: {
    fontSize: '0.9rem',
    color: '#555',
    fontStyle: 'italic',
  },
  itemSubtitle: {
    fontWeight: '500',
    color: '#444',
    marginBottom: '0.25rem',
  },
  itemDesc: {
    fontSize: '0.9rem',
    color: '#444',
    whiteSpace: 'pre-line',
  },
  skillRow: {
    fontSize: '0.95rem',
    marginBottom: '0.25rem',
    color: '#333',
  }
};

export default LivePreview;
