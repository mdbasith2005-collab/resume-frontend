import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content animate-fade-in">
        <Outlet />
      </main>
      <footer style={styles.footer}>
        <div className="container">
          <p>© {new Date().getFullYear()} AI Resume Generator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  footer: {
    padding: '2rem 0',
    textAlign: 'center',
    borderTop: '1px solid var(--border-color)',
    color: 'var(--text-muted)',
    fontSize: '0.875rem',
    marginTop: 'auto'
  }
};

export default Layout;
