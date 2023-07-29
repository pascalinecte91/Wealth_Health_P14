import React, { useState } from "react";
import Form from "components/form/Form.js";
import logo from "assets/logo_sans_fond.png";
import mockEmployed from "data/mockEmployed.js";


const AddEmployee = () => {

  const [employed, setEmployed] = useState(mockEmployed);

  React.useEffect(() => {
    console.log("all employees list:", employed);
  }, [employed]);


  const handleNewEmployee = (employeeData) => {
    console.log("handleNewEmployee called with", employeeData);
    setEmployed([...employed, employeeData]);
  };

  return (
    <>
      <section className="create">
        <div className="create__wrapperForm">
          <h1 className="create__name">HRNet</h1>
          <img className="create__logo" src={logo} alt="" />
          <h2 className="create__title">Create Employee</h2>
        </div>
        <Form handleNewEmployee={handleNewEmployee}
        />
      </section>
    </>
  );
};

export default AddEmployee;
