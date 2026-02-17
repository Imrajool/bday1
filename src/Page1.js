import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import Snowfall from 'react-snowfall';
import { useState, useEffect, useRef } from 'react';
import r9 from './img/r9.jpg';
import './Page1.css';

function Page1() {
  const navigate = useNavigate();
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showConfetti, setShowConfetti] = useState(true);
  const [showClickConfetti, setShowClickConfetti] = useState(false);
  const hasShownConfetti = useRef(false);

  useEffect(() => {
    function handleResize() {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Show confetti only once on first site load
    if (!hasShownConfetti.current) {
      hasShownConfetti.current = true;
      const timer = setTimeout(() => setShowConfetti(false), 3000); // Confetti lasts 3 seconds
      return () => clearTimeout(timer);
    } else {
      setShowConfetti(false);
    }
  }, []);

  const handleButtonClick = () => {
    setShowClickConfetti(true);
    const timer = setTimeout(() => setShowClickConfetti(false), 2000);
    setTimeout(() => navigate('/page2'), 500);
    return () => clearTimeout(timer);
  };

  return (
    <div 
      className="page1-container"
      style={{
        backgroundImage: `url(${r9})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {showConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      {showClickConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={150}
        />
      )}
      <Snowfall 
        color="#fff" 
        volume={100}
        speed={[0.5, 3]}
        wind={[-0.5, 2]}
      />
      <div className="page1-content">
        <h1 className="birthday-text"> Happy Birthday Rose🎉</h1>
        <p className="sub-text">Wishing you the most wonderful day filled with love and happiness!</p>
        <button 
          className="navigate-btn"
          onClick={handleButtonClick}
        >
          Ulla Poi Paaru
        </button>
      </div>
    </div>
  );
}

export default Page1;
