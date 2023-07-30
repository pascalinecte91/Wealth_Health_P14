import React, { useState } from "react";
import DatePicker from "components/calendar/DatePicker";
import { states } from "data/states.js";
import departments from "data/departments";
import { Modal } from "banby-modal-customize-react";
import { useDispatch } from "react-redux";
import { addEmployee } from "redux/actions.js";
import SecondModal from "components/modal/SecondModal.js";

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

  const [formData, setFormData] = useState(initialState);
  const resetForm = () => {
    setFormData(initialState);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [employeeCreated, setEmployeeCreated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //const [showSuccessMessage, setShowSuccessMessage] = useState(false);
 

  const handleOpenModal = () => {
    console.log("handleOpenModal called with formData:", formData);
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    console.log("handleCloseModal called with formData:", formData);
    setModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(handleChange);
    setFirstName(formData.firstName);
    setLastName(formData.lastName);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = (name, value) => {
    console.log("handleDateChange called with", name, value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSave = () => {
    dispatch(addEmployee(formData));
    resetForm();
    handleCloseModal(); 
    handleOpenSecondModal()
  };

  const handleCancel = () => {
    handleFormCancel();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOpenModal();
    setEmployeeCreated(true);
  };

  const handleFormCancel = () => {
    setFormData(initialState); 
    setEmployeeCreated(false);
    handleCloseModal(); 
  };

  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const handleOpenSecondModal = () => 
  setSecondModalOpen(true);  

  const handleCloseSecondModal = () => 
  setSecondModalOpen(false);
  

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
          <button className="form__save">Soumettre</button>
          {secondModalOpen && <SecondModal handleCloseSecondModal={handleCloseSecondModal} />}
  {/* {showSuccessMessage && (
    <div className="success-message">Employé enregistré avec succès !</div>
  )} */}
        </form>

        <Modal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          modalClassName="my-custom-modal-class"
          firstName={firstName}
          lastName={lastName}
          onCancel={handleCancel}
          onSave={handleSave}
          employeeCreated={employeeCreated}
        />
  
      </section>
    </>
  );
};

export default Form;
