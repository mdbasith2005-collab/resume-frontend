import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Simulating a successful login redirect
    navigate('/home');
  };

  return (
    <div style={styles.page}>
      <div className="container" style={styles.container}>
        <div style={styles.formWrapper} className="glass-panel animate-fade-in">
          <div style={styles.header}>
            <h2 style={styles.title}>Welcome Back</h2>
            <p style={styles.subtitle}>Sign in to your account to continue</p>
          </div>
          
          <form onSubmit={handleSubmit} style={styles.form}>
            <div className="form-group" style={styles.inputGroup}>
              <label className="form-label">Email Address</label>
              <div style={styles.inputWrapper}>
                <Mail size={20} style={styles.inputIcon} />
                <input 
                  type="email" 
                  name="email"
                  className="form-control" 
                  placeholder="you@example.com"
                  style={styles.inputWithIcon}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group" style={styles.inputGroup}>
              <div style={styles.labelWrapper}>
                <label className="form-label">Password</label>
                <Link to="#" style={styles.forgotPassword}>Forgot Password?</Link>
              </div>
              <div style={styles.inputWrapper}>
                <Lock size={20} style={styles.inputIcon} />
                <input 
                  type="password" 
                  name="password"
                  className="form-control" 
                  placeholder="••••••••"
                  style={styles.inputWithIcon}
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary" style={styles.submitBtn}>
              Sign In <ArrowRight size={18} />
            </button>
          </form>
          
          <div style={styles.divider}>
            <span style={styles.dividerText}>or continue with</span>
          </div>
          
          <div style={styles.socialAuth}>
            <button type="button" className="btn btn-secondary" style={styles.socialBtn}>
              GitHub
            </button>
            {/* Can add Google etc later */}
          </div>
          
          <p style={styles.footer}>
            Don't have an account? <Link to="#" style={styles.link}>Sign up</Link>
          </p>
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
    minHeight: 'calc(100vh - 140px)', // Account for header/footer
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '2rem 1rem'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 10,
  },
  formWrapper: {
    width: '100%',
    maxWidth: '450px',
    padding: '2.5rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
    background: 'var(--accent-gradient)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    color: 'var(--text-secondary)',
    fontSize: '0.95rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  inputGroup: {
    marginBottom: '1.25rem'
  },
  labelWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem'
  },
  forgotPassword: {
    color: 'var(--accent-primary)',
    fontSize: '0.8rem',
    textDecoration: 'none',
    transition: 'color var(--transition-fast)'
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  inputIcon: {
    position: 'absolute',
    left: '1rem',
    color: 'var(--text-muted)'
  },
  inputWithIcon: {
    paddingLeft: '3rem'
  },
  submitBtn: {
    width: '100%',
    marginTop: '0.5rem',
    padding: '0.875rem',
    fontSize: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem'
  },
  divider: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2rem 0',
  },
  dividerText: {
    backgroundColor: 'var(--bg-primary)',
    padding: '0 1rem',
    color: 'var(--text-muted)',
    fontSize: '0.875rem',
    position: 'relative',
    zIndex: 1
  },
  socialAuth: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem'
  },
  socialBtn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '0.75rem',
    padding: '0.75rem'
  },
  footer: {
    textAlign: 'center',
    color: 'var(--text-secondary)',
    fontSize: '0.9rem'
  },
  link: {
    color: 'var(--accent-primary)',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'opacity var(--transition-fast)'
  },
  glow1: {
    position: 'absolute',
    top: '-20%',
    left: '-10%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(15, 17, 21, 0) 70%)',
    borderRadius: '50%',
    zIndex: -1,
    filter: 'blur(40px)',
  },
  glow2: {
    position: 'absolute',
    bottom: '-20%',
    right: '-10%',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(15, 17, 21, 0) 70%)',
    borderRadius: '50%',
    zIndex: -1,
    filter: 'blur(40px)',
  }
};

export default LoginPage;
