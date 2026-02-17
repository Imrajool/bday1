import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import Snowfall from 'react-snowfall';
import { useState, useEffect } from 'react';
import './Page2.css';
import r1 from './img/r1.jpg';
import r2 from './img/r2.jpg';
import r5 from './img/r5.jpg';
import r6 from './img/r6.jpg';
import r7 from './img/r7.jpg';
import r8 from './img/r8.jpg';
import r9 from './img/r9.jpg';
import rv from './img/rv.MP4';

function Page2() {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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

  const handleButtonClick = () => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 2000);
    setTimeout(() => navigate('/page3'), 500);
    return () => clearTimeout(timer);
  };

  const items = [
    {
      id: 1,
      type: 'photo',
      src: r1,
      quote: 'You\'re the cousin I never had to introduce, the one my heart always knew.'
    },
    {
      id: 2,
      type: 'photo',
      src: r2,
      quote: 'In a world full of cousins, you\'re the one my soul recognizes without words.'
    },
    {
      id: 3,
      type: 'photo',
      src: r8,
      quote: 'Some bonds are too deep for words, yet spoken in every glance and smile.'
    },
    {
      id: 4,
      type: 'photo',
      src: r6,
      quote: 'You\'re the unspoken thought that fills my heart with silent admiration.'
    },
    {
      id: 5,
      type: 'photo',
      src: r5,
      quote: 'The greatest love stories are sometimes the ones left untold, yet deeply felt.'
    },
    {
      id: 6,
      type: 'photo',
      src: r7,
      quote: 'You\'re the beautiful secret my heart keeps, the truth my soul celebrates.'
    },
    {
      id: 7,
      type: 'video',
      src: rv,
      quote: 'Some connections transcend explanation - they simply are, pure and true.'
    }
  ];

  return (
    <div 
      className="page2-container"
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
          numberOfPieces={150}
        />
      )}
      <Snowfall 
        color="#fff" 
        volume={80}
        speed={[0.5, 2]}
        wind={[-0.5, 1.5]}
      />
      <h2 className="page2-title">Cherished Moments</h2>
      <div className="gallery-grid">
        {items.map(item => (
          <div key={item.id} className="gallery-item">
            {item.type === 'photo' ? (
              <img 
                src={item.src} 
                alt={`Memory ${item.id}`}
                className="gallery-image"
              />
            ) : (
              <video 
                src={item.src}
                className="gallery-video"
                controls
                controlsList="nodownload"
              />
            )}
            <p className="gallery-quote">{item.quote}</p>
          </div>
        ))}
      </div>
      <button 
        className="continue-btn"
        onClick={handleButtonClick}
      >
        Avlodha mudinji
      </button>
    </div>
  );
}

export default Page2;
