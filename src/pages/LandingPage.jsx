import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, FileText, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div style={styles.page}>
      <div className="container" style={styles.hero}>
        <div style={styles.badge} className="animate-fade-in">
          <Sparkles size={16} color="var(--accent-primary)" />
          <span>AI-Powered Resume Builder</span>
        </div>
        
        <h1 style={styles.title} className="animate-fade-in">
          Create a <span className="text-gradient">Professional Resume</span> <br /> in Minutes
        </h1>
        
        <p style={styles.subtitle} className="animate-fade-in">
          Stand out from the crowd with our beautiful, recruiter-approved templates. 
          Enter your details and let our platform build the perfect resume for your next career move.
        </p>
        
        <div style={styles.ctaGroup} className="animate-fade-in">
          <Link to="/builder" className="btn btn-primary" style={styles.mainBtn}>
            <FileText size={20} />
            Build Your Resume Now
            <ArrowRight size={20} />
          </Link>
        </div>
        
        {/* Decorative elements */}
        <div style={styles.glow1}></div>
        <div style={styles.glow2}></div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: 'calc(100vh - 140px)', // Minus header and footer
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    zIndex: 10,
    padding: '4rem 1rem',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    borderRadius: 'full',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    color: 'var(--accent-primary)',
    fontWeight: '500',
    fontSize: '0.875rem',
    marginBottom: '2rem',
    animationDelay: '0.1s',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
    fontWeight: '800',
    lineHeight: '1.1',
    marginBottom: '1.5rem',
    maxWidth: '800px',
    animationDelay: '0.2s',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    marginBottom: '3rem',
    animationDelay: '0.3s',
  },
  ctaGroup: {
    animationDelay: '0.4s',
  },
  mainBtn: {
    padding: '1rem 2rem',
    fontSize: '1.125rem',
    borderRadius: '100px',
  },
  glow1: {
    position: 'absolute',
    top: '20%',
    left: '20%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(15, 17, 21, 0) 70%)',
    borderRadius: '50%',
    zIndex: -1,
    filter: 'blur(40px)',
  },
  glow2: {
    position: 'absolute',
    bottom: '10%',
    right: '20%',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(15, 17, 21, 0) 70%)',
    borderRadius: '50%',
    zIndex: -1,
    filter: 'blur(40px)',
  }
};

export default LandingPage;
