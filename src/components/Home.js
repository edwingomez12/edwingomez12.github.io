import React, { useEffect, useState } from 'react';
import {ReactTyped} from 'react-typed';
import './Home.css';

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = `${process.env.PUBLIC_URL}/Me.jpeg`; // Ensure correct path
  }, []);

  return (
    <section className="home">
      <div className="left-side">
        <div
          className={`image ${imageLoaded ? 'loaded' : ''}`}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Me.jpeg)` }}
        ></div>
      </div>
      <div className="right-side">
        <div className="content">
          <h1>Edwin Gomez</h1>
          <h2>
            <ReactTyped
              strings={['Software Engineer', '5 years of experience', 'Bachelors in Science Computer Engineering']}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
