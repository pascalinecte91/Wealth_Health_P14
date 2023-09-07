import React, { useState } from "react";
import { states } from "data/states.js";
import departments from "data/departments";
import { useDispatch } from "react-redux";
import { addEmployee } from "redux/actions.js";
// external components
import DatePicker from "components/datePicker/DatePicker";
import { Modal } from "banby-modal-customize-react";

/**
 * @Composant Form formulaire pour ajouter un employé.
 * @returns {JSX.Element}
 */
const Form = () => {
  const dispatch = useDispatch();

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
  // État du formulaire contenant les données saisies
  const [formData, setFormData] = useState(initialState);

  // Réinitialise le formulaire avec les valeurs par défaut.
  const resetForm = () => {
    setFormData(initialState);
  };
  //gérer la modale
  const [modalOpen, setModalOpen] = useState(false);
  const [actionLabel, setActionLabel] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [secondModalOpen, setSecondModalOpen] = useState(false);

  // fonction pour gerer la 1ere modale
  const handleOpenModal = (title) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  // Ferme la première modal.
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  /**
   * Gère le changement de valeur d'un champ du formulaire.
   * @param {Object} e - L'événement de changement.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFirstName(formData.firstName);
    setLastName(formData.lastName);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  /**
   * Gère le changement de valeur d'un champ de date dans le formulaire.
   * @param {string} name - Le nom du champ de date à mettre à jour dans formData.
   * @param {string} value - La nouvelle valeur du champ de date.
   */
  const handleDateChange = (name, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    //fn prend en param l'etat precedent et cree un nouvel obj
  };

  //pour sauvegarder, fermer et appeler la seconde modal
  const handleSave = () => {
    dispatch(addEmployee(formData));
    resetForm();
    handleCloseModal();

    setModalTitle("Employé enregistré");
    setSecondModalOpen(true);
  };
  // pour annuler le formulaire
  const handleCancel = () => {
    handleFormCancel();
  };

  // pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    handleOpenModal();
    setActionLabel(true);
    console.log(setActionLabel);
  };

  /**
   * Réinitialise le formulaire et ferme la première modal.
   */
  const handleFormCancel = () => {
    setFormData(initialState);
    setActionLabel(false);
    handleCloseModal();
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
              <label htmlFor="last_name">Last Name</label>
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
              <label htmlFor="Date_of_Birth">Date of Birth</label>
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

            {departments.map(({ id, name }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>

          <br />
          <button type="submit" className="form__save">
            Soumettre
          </button>
        </form>

        <Modal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          modalClassName="my-custom-modal-class"
          firstName={firstName}
          lastName={lastName}
          onCancel={handleCancel}
          onSave={handleSave}
          showButtons={true}
          actionLabel={actionLabel}
        />

        <Modal
          isOpen={secondModalOpen}
          onClose={() => setSecondModalOpen(false)}
          modalClassName="my-custom-modal-class"
          modalTitle={modalTitle}
        >
          <h2>{modalTitle}</h2>
        </Modal>
      </section>
    </>
  );
};

export default Form;
