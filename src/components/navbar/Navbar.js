import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="navBar">
      <div className="navBar__link">
        <NavLink to="/" activeClassName="active" end>
          Home
        </NavLink>

        <NavLink to="/add_employee" activeClassName="active">
          Create Employee
        </NavLink>

        <NavLink to="/list_employees" activeClassName="active">
          List Employees
        </NavLink>
        </div>
       

    </section>
  );
};

export default Navbar;


