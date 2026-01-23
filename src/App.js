import React from 'react';

const App = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent:  'center',
      background:  'linear-gradient(135deg, #0f0f23 0%, #1a0a2e 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#ffffff',
      margin: 0,
      padding: '20px',
    },
    logo: {
      fontSize: '4rem',
      marginBottom: '10px',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '700',
      margin: '0 0 10px 0',
      background: 'linear-gradient(90deg, #ff6b6b, #feca57)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#a0a0a0',
      marginBottom: '30px',
    },
    status: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '15px 30px',
      background: 'rgba(255, 107, 107, 0.1)',
      borderRadius: '50px',
      border: '1px solid #ff6b6b',
    },
    dot: {
      width: '12px',
      height: '12px',
      background: '#ff6b6b',
      borderRadius: '50%',
      animation: 'pulse 2s infinite',
    },
    footer: {
      position: 'absolute',
      bottom: '20px',
      color: '#606060',
      fontSize: '0.9rem',
    },
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          * { margin:  0; padding: 0; box-sizing: border-box; }
        `}
      </style>
      <div style={styles.logo}>💎</div>
      <h1 style={styles.title}>Alphabit Technologies IND</h1>
      <p style={styles.subtitle}>Next-Gen Digital Solutions</p>
      <p style={styles.subtitle}>Version 2.0</p>
      <div style={styles.status}>
        <div style={styles.dot}></div>
        <span>System Online</span>
      </div>
      <p style={styles.footer}>© 2026 AlphaBit. All rights reserved.</p>
    </div>
  );
};

export default App;
