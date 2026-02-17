import { useNavigate } from 'react-router-dom';
import Snowfall from 'react-snowfall';
import r9 from './img/r9.jpg';
import './Page3.css';

function Page3() {
  const navigate = useNavigate();

  return (
    <div 
      className="page3-container"
      style={{
        backgroundImage: `url(${r9})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <Snowfall 
        color="#fff" 
        volume={80}
        speed={[0.5, 2]}
        wind={[-0.5, 1.5]}
      />
      <div className="wishes-content">
        <h2 className="wishes-title">🎂 Birthday Wishes 🎂</h2>
        
        <div className="wishes-text">
          <p>
            On this special day, I wish you all the happiness and joy that the world has to offer. 
            May every moment be filled with laughter, love, and unforgettable memories.
          </p>
          
          <p>
            You are an incredible person with a heart full of kindness. Thank you for being exactly who you are.
            Your presence makes the world a brighter place.
          </p>
          
          <p>
            As you celebrate another year of life, know that you are deeply loved and cherished.
            May this year bring you success, good health, and endless possibilities.
          </p>
          
          <p className="wish-again">
            Once again, Happy Birthday! 🎉
          </p>
          
          <p className="wish-again">
            Wishing you a day as special as you are!
          </p>
        </div>

        <div className="signature">
          <p>With love and warmth,</p>
          <p className="signature-name">by your Tube Light</p>
        </div>

        <button 
          className="restart-btn"
          onClick={() => navigate('/page1')}
        >
          Back to Start
        </button>
      </div>
    </div>
  );
}

export default Page3;
