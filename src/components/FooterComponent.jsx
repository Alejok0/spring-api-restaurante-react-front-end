import React from 'react';

function FooterComponent() {
  return (
    <footer className="footer mt-auto py-3" style={{ backgroundColor: '#fbc02d', color: '#333' }}>
      <div className="container text-center">
        <span className="text-muted" style={{ fontWeight: 'bold' }}>
          Desarrollado por @Alejok0 &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}

export default FooterComponent;
