import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react'
import NotFound from "pages/notFound/NotFound.jsx";
import Footer from "components/footer/Footer.js";
import "./App.css";
import "style/index.scss";
import Navbar from 'components/navbar/Navbar.js';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';
import Spinner from 'components/spinner/Spinner.js';

const Home = lazy(() => import('pages/home/Home.jsx'))
const AddEmployee = lazy(() => import('pages/addEmployee/AddEmployee.jsx'))
const ListEmployees = lazy(() => import('pages/listEmployees/ListEmployees.jsx'))
/**
 * Composant principal de l'application.
 * @returns {JSX.Element} 
 */

const App = () => {
  return (
    <Suspense fallback={<Spinner  />}>
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
        </Suspense>
  );
};
export default App;
