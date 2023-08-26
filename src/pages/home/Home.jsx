import React, { useState, useEffect } from "react";
import logo  from "assets/logo_name.png";
import picture_home from "assets/picture_home.png"
import Spinner from "components/spinner/Spinner.js";
import groupe from "assets/groupe.png";
import { NavLink } from "react-router-dom";
/**
 * @Composant de la page d'accueil.
 * @returns {JSX.Element} Composant de la page d'accueil.
 */
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    
    }, 1000);
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
            <h1 className="homePage__title">HRNet the app that manage </h1>
              <span className="homePage__greenSpan"> 
                <p className="homePage__empl"> Your employees</p></span>  
                <img className="homePage__group" src={groupe} alt="logo HRnet" loading="lazy" width="200" height="100" />
            </div>
            <p className="homePage__subtitle">Join us in creating your employee list</p>
            <div className="button">
              <NavLink to="./add_employee" className="button__add">Create</NavLink>
              <NavLink to="./list_employees" className="button__view">View</NavLink>
            </div>
          </div>
        
          <div className="image-container">
            <img className="image_logo" src={logo} alt="logo HRnet" loading="lazy" width="350" height="140" />
            <img className="image" src={picture_home} alt=" managmnt" loading="lazy" width="400" height="200" />
          </div>
        </main>
  
      </section>
    </>
  );
  }
};

export default Home;
