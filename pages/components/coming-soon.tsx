import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../public/animations/work-in-progress.json';

export default function ComingSoon() {
  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif'
    }}>
      <div style={{ width: 560 }}>
        <Lottie animationData={animationData} loop={true} />
        <h1 style={{ textAlign: 'center', marginTop: 2, fontSize: 24 }}>
          Pardon the pixels!<br />
          This site is under heavy imagination.<br />
          Stay Tuned!!<br /><br />
          <span style={{ fontSize: 18, fontWeight: 'normal' }}>
            /Heetae Bae
          </span>
        </h1>
      </div>
    </div>
  );
}
