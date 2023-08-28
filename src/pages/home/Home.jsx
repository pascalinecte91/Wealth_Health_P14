import React, { useState, useEffect } from "react";
import Spinner from "components/spinner/Spinner.js";
import { NavLink } from "react-router-dom";
// IMG

import logo_name_smartp from "assets/logo_name_smartp.png";
import logo_name from "assets/logo_name.png";
import logo_name_desktop from "assets/logo_name_desktop.png"

import picture_home_smartph from "assets/picture_home_smartph.png";
import picture_home from "assets/picture_home.png";
import picture_home_desktop from "assets/picture_home_desktop.png";
import groupe_tablet from "assets/groupe_tablet.png";
import groupe_smartp from "assets/groupe_smartp.png";
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
                  <p className="homePage__empl"> Your employees</p>
                </span>

                {/* image groupe */}
                <picture>
                  <source media="(min-width: 768px)" srcSet={groupe_tablet} />
                  <img className="homePage__group" src={groupe_smartp} alt="logo HRnet" loading="lazy" />
                </picture>
              </div>
              <p className="homePage__subtitle">
                Join us in creating your employee list
              </p>
              <div className="button">
                <NavLink to="./add_employee" className="button__add">
                  Create
                </NavLink>
                <NavLink to="./list_employees" className="button__view">
                  View
                </NavLink>
              </div>
            </div>

            <div className="image-container">
                 {/* image LOGO */}
                 <picture>
  <source media="(min-width: #{$smartphone})" srcSet={logo_name_smartp} />
  <source media="(min-width: #{$desktop})" srcSet={logo_name_desktop} />
  <img className="image_logo" src={logo_name_smartp} alt="logo HRnet" loading="lazy" />
</picture>
<picture>
  <source media="(min-width: #{$smartphone})" srcSet={picture_home_smartph} />
  <source media="(min-width: #{$desktop})" srcSet={picture_home_desktop} />
  <img className="image" src={picture_home} alt="managmnt" loading="lazy" />
</picture>
            </div>
          </main>
        </section>
      </>
    );
  }
};

export default Home;
