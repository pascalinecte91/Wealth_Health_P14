import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "pages/home/Home.jsx";
import AddEmployee from "pages/addEmployee/AddEmployee.jsx";
import ListEmployees from "pages/listEmployees/ListEmployees.jsx";
import NotFound from "pages/notFound/NotFound.jsx";
import Footer from "components/footer/Footer.js";
import "./App.css";
import "style/index.scss";
import React from "react";
import Navbar from 'components/navbar/Navbar.js';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';

/**
 * Composant principal de l'application.
 * @returns {JSX.Element} 
 */
const App = () => {
  return (
      <>
  {/* StyleSheetManager pour personnaliser le comportement des composants stylisés 
  et éviter les avertissements dans la console */}
  <StyleSheetManager shouldForwardProp={isPropValid}>
        <Router>
        <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add_employee" element={<AddEmployee />} />
          <Route path="/list_employees" element={<ListEmployees />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
        </StyleSheetManager>
      </>
  );
};
export default App;
