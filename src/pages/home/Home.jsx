import React, { useState, useEffect } from "react";
import Spinner from "components/spinner/Spinner.js";
import { NavLink } from "react-router-dom";
// IMG
import logoDesktop from "assets/logo_name_desktop.png";
import logoSmartp from "assets/logo_name_smartp.png";
import logoTablet from "assets/logo_name_tablet.png";
import pictureHomeDesktop from "assets/picture_home_desktop.png";
import pictureHome from "assets/picture_home.png";
import pictureHomeSmartp from "assets/picture_home_smartp.png";
import groupe from "assets/groupe.png";
import groupTablet from "assets/groupe_tablet.png";
import groupSmartp from "assets/groupe_smartp.png";
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
                <picture>
                <source media="(min-width: $tablet)" srcSet={groupTablet} />
                <source media="(min-width: $smartLarge)" srcSet={groupSmartp} />
                <img className="homePage__group" src={groupe} alt="logo HRnet" loading="lazy"/>
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
              <picture>
                <source media="(min-width: $tablet)" srcSet={logoTablet} />
                <source media="(min-width: $smartLarge)" srcSet={logoSmartp} />
                <img className="image_logo" src={logoDesktop} alt="logo HRnet"loading="lazy"/>
              </picture>
              <picture>
                <source media="(min-width: $tablet)" srcSet={pictureHome} />
                <source media="(min-width: $smartLarge)" srcSet={pictureHomeSmartp} />
                <img className="image" src={pictureHomeDesktop} alt="managmnt" loading="lazy" />
              </picture>
            </div>
          </main>
        </section>
      </>
    );
  }
};

export default Home;
