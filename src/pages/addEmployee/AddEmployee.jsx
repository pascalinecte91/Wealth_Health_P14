import React from "react";
import Form from "components/form/Form.js";
import logo from "assets/logo_sans_fond.png";
import mockEmployed from "data/mockEmployed.js";
import { useState } from "react";

/**
 * @Composant  pour ajouter un employé à une liste.
 */

const AddEmployee = () => {
  // Déclaration de l'état isVisible pour gérer la visibilité d'un message
  const [isVisible, setIsVisible] = useState(false);
  // Déclaration de l'état employed pour gérer la liste des employés
  const [employed, setEmployed] = useState(mockEmployed);

  //afficher la liste des employés dans l'inspecteur chaque fois que l'état employed change
  React.useEffect(() => {
    //console.log("employed state updated:", employed);
  }, [employed]);
  

  /**
   * @Fonction pour gérer l'ajout d'un nouvel employé à la liste.
   * @param {Object} employeeData - Les données du nouvel employé.
   */
  const handleNewEmployee = (employeeData) => {
    //console.log("handleNewEmployee called with", employeeData);
    setEmployed([...employed, employeeData]);
    // Met à jour l'état isVisible pour afficher le message de succes!
    setIsVisible(true);
  };

  return (
    <>
      <section className="create">
        <div className="create__wrapperForm">
        <img className="create__logo" src={logo} alt="" />
        <h1 className="create__name">HRNet</h1>
        <h2 className="create__title">Create Employee</h2>
        </div>
        <Form handleNewEmployee={handleNewEmployee} setIsVisible={setIsVisible}
        />
        {isVisible && <p>Employé ajouté avec succès !</p>}
       
      </section>
    </>
  );
};

export default AddEmployee;
