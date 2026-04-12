import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <Link to="/" style={styles.logo}>
          🌾 AgroPredict Pro
        </Link>
        
        <div style={styles.navLinks}>
          <Link to="/" style={styles.navLink}>🏠 Home</Link>
          <Link to="/prices" style={styles.navLink}>📊 Prices</Link>
          <Link to="/weather" style={styles.navLink}>🌦️ Weather</Link>
          <Link to="/tips" style={styles.navLink}>🎓 Tips</Link>
          <Link to="/contact" style={styles.navLink}>📞 Contact</Link>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#2d5016',
    color: 'white',
    padding: '15px 0',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white',
    transition: 'opacity 0.3s'
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s',
    padding: '5px 10px',
    borderRadius: '3px'
  }
};

export default Navbar;
