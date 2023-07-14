import React, { useState } from "react";
import DatePicker from "components/calendar/DatePicker";
import { states } from "data/states.js";
import departments from "data/departments";
import { Modal } from "banby-modal-customize-react";

/**
 * Formulaire pour ajouter un nouvel employé.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Function} props.handleNewEmployee -utilisé comme callback pour gerer l'ajout d'un new employed lorsque form soumis
 * @param {Function} props.setIsVisible -Utilisé comme callback pour définir la visibilité du formulaire
 * @returns {JSX.Element} Composant de formulaire.
 */

const Form = ({ handleNewEmployee, setIsVisible }) => {
  const initialState = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  };

  /**
   * @initialise l état dans le composant form
   * @function renvoi un [2 elements, la valeur actuelle = formData, et setFormData pour la màj]
   */
  const [formData, setFormData] = useState(initialState);
  //console.log(formData);
  const resetForm = () => {
    setFormData(initialState);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    //console.log("firstName:", formData.firstName);
    //console.log("lastName:", formData.lastName);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  /**
   * Gère les modifications de date pour les composants DatePicker.
   *
   * @param {string} name - Nom du champ de saisie de date.
   * @param {string} value - Valeur de la date sélectionnée.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Met à jour le formulaire avec les nouvelles valeurs saisies
    // prevFormData garantie  mises à jour d'état correcte
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  /**
   * Gère les modifications de date pour les composants DatePicker".
   *
   * @param {string} name - Nom du champ de saisie de date.
   * @param {string} value - Valeur de la date sélectionnée.
   */
  const handleDateChange = (name, value) => {
    //console.log("handleDateChange called with", name, value);
    //console.log("formData.dateOfBirth:", formData.dateOfBirth);
    //console.log("formData.startDate:", formData.startDate);

    // Met à jour le formulaire avec la new value de @date sélectionnée
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSave = () => {
    // code pour gérer l'action du bouton "Enregistrer"
    handleCloseModal();
  };

  const handleCancel = () => {
    // code pour annuler les modifications du formulaire
    console.log("Modifications du formulaire annulées");
    handleCloseModal();
  };
  /**
   * Gère la soumission du formulaire pour ajouter un nouvel employé.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - Événement de soumission du formulaire.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewEmployee(formData);
    setIsVisible(true);
    resetForm();
    handleOpenModal();
  };

  return (
    <>
      <section className="form">
        <form onSubmit={handleSubmit} id="create_employee">
          <aside>
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input
                required
                type="text"
                id="first_name"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
                placeholder="Firstname"
                className="input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input
                required
                type="text"
                id="last_name"
                name="lastName"
                value={formData.lastName}
                placeholder="Lastname"
                onChange={handleChange}
                className="input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Date of Birth">Date of Birth</label>
              <DatePicker
                id={"date_of_birth"}
                name={"dateOfBirth"}
                date={formData.dateOfBirth}
                placeholder="Select date of birth"
                handleChange={handleChange}
                handleDateChange={handleDateChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="start_date">Start Date</label>
              <DatePicker
                id={"start_date"}
                name={"startDate"}
                date={formData.startDate}
                placeholder="Select start date"
                handleChange={handleChange}
                handleDateChange={handleDateChange}
              />
            </div>
          </aside>
          <div className="form__card">
            <fieldset className="form__address">
              <legend className="form__addressCenter">Address</legend>
              <div className="form-group">
                <label htmlFor="street">Street</label>
                <input
                  required
                  id="street"
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  required
                  id="city"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="input_address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <select
                  required
                  name="state"
                  id="state"
                  onChange={handleChange}
                  value={formData.state}
                >
                  <option value="">-- Select --</option>
                  {states.map((state) => (
                    <option key={state.abbreviation} value={state.abbreviation}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="zip-code">Zip Code</label>
                <input
                  required
                  id="zip-code"
                  type="number"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="input_address"
                />
              </div>
            </fieldset>
          </div>

          <label htmlFor="department">Department</label>
          <select
            required
            name="department"
            id="department"
            onChange={handleChange}
            value={formData.department}
            className="input"
          >
            <option value="" className="dpt__select">
              -- Select --
            </option>
            {departments.map((departement) => (
              <option key={departement.id} value={departement.name}>
                {departement.name}
              </option>
            ))}
          </select>

          <br />
          <button className="form__save">Save</button>
        </form>

        <Modal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          modalClassName="my-custom-modal-class"
          modalTitle="My Modal Title"
          firstName={formData.firstName}
          lastName={formData.lastName}
          onCancel={handleCancel}
          onSave={handleSave}
        >
          {modalOpen && (
            <div className="modal-content">
              <h2 className="modal-title">
                {formData.firstName} {formData.lastName}
              </h2>
              {/* Autres éléments du contenu de la modal */}
            </div>
          )}
        </Modal>
      </section>
    </>
  );
};

export default Form;
