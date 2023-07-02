
import React from 'react';
import Form from "components/form/Form.js";
import logo from "assets/logo_no_name.gif";


const AddEmployee = () => {

  return (
    <>
   <section className="create">
     
        <img className="create__logo" src={logo} alt="" />
        <h1>HRNet</h1>
      
      <h2>Create Employee</h2>
     
      <Form />
      </section>
    </>
  )
}

export default AddEmployee;
