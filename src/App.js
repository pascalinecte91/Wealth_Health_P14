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

const App = () => {
  return (
      <>
  
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
       
      </>
  
  );
};

export default App;
