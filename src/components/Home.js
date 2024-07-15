import React from 'react';
import { ReactTyped } from "react-typed";
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <h1>
            Edwin Gomez
        </h1>
        <h2>
          <ReactTyped
            strings={['Software Engineer', '5 years of experience', 'Bachelors in Science Computer Engineering']}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h2>
      </div>
    </section>
  );
};

export default Home;
