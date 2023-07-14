import React, { useState, useEffect } from 'react';
import logo  from "assets/logo_name.png";
import picture_home from "assets/picture_home.png"
import Spinner from 'components/spinner/Spinner.js';

/**
 * @Composant de la page d'accueil.
 * @returns {JSX.Element} Composant de la page d'accueil.
 */
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    
    }, 2000);
  }, []);
  if (isLoading) {
    return <Spinner />;
  } else {

  return (
    <>
      <section className="homePage">
 
        <main className="homePage__current">
          <div className="homePage__content">
            <div className="homePage__infos">
            <h1 className="homePage__title">
              HRNet the app that manage
              <span className="homePage__greenSpan"> <br />👩‍🦰 Your employees 👩‍🦱</span> <br />
            </h1>
            </div>
            <p className="homePage__subtitle">Join us in creating your employee list</p>
            <div className="button">
              <a href="/add_employee" className="button__add">Create</a>
              <a href="/list_employees" className="button__view">View</a>
            </div>
          </div>
        
          <div className="image-container">
            <img className="image_logo" src={logo} alt="logo HRnet" />
            <img className="image" src={picture_home} alt=" managmnt" />
          </div>
        </main>
  
      </section>
    </>
  );
  }
};

export default Home;
