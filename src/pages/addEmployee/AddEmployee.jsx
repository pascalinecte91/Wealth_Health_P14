import React, { useState } from "react";
import Form from "components/form/Form.js";
import logo from "assets/logo_sans_fond.png";
import mockEmployed from "data/mockEmployed.js";

/**
 * @Composant AddEmployee Ajouter un nouvel employé à la liste.
 * @returns {JSX.Element} 
 */
const AddEmployee = () => {
  const [employed, setEmployed] = useState(mockEmployed);

  React.useEffect(() => {
    console.log("employees list:", employed);
  }, [employed]);

  const handleNewEmployee = (employeeData) => {
    setEmployed([...employed, employeeData]);
  };

  return (
    <>
      <section className="create">
        <div className="create__wrapperForm">
          <h1 className="create__name">HRNet</h1>
          <img className="create__logo" src={logo} alt="logo Hr-net" width={150} height={88} />
          <h2 className="create__title">Create Employee</h2>
        </div>
        <Form handleNewEmployee={handleNewEmployee}
        />
      </section>
    </>
  );
};

export default AddEmployee;
