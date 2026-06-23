import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        <Link to="/" style={styles.logo}>
          <div style={styles.iconContainer}>
            <FileText size={24} color="white" />
          </div>
          <span className="text-gradient" style={styles.logoText}>AI Resume Generator</span>
        </Link>
        <nav>
          <Link to="/builder" className="btn btn-primary" style={styles.buildBtn}>
            Build Resume
          </Link>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    padding: '1rem 0',
    borderBottom: '1px solid var(--border-color)',
    backgroundColor: 'rgba(15, 17, 21, 0.8)',
    backdropFilter: 'blur(10px)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    textDecoration: 'none',
  },
  iconContainer: {
    background: 'var(--accent-gradient)',
    padding: '0.5rem',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: '1.25rem',
    fontWeight: '700',
    letterSpacing: '-0.5px',
  },
  buildBtn: {
    padding: '0.5rem 1.25rem',
  }
};

export default Header;
