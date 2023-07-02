import React from "react";
import DatePicker from "components/calendar/DatePicker";
import { states } from "data/states.js";

import departments from "data/departments";

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

 
  const [formData, setFormData] = React.useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = (name, value) => {
    console.log("handleDateChange called with", name, value);
  console.log("formData.dateOfBirth:", formData.dateOfBirth);
  console.log("formData.startDate:", formData.startDate);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewEmployee(formData);
    setIsVisible(true);
    setFormData(initialState);
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="create_employee">
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

        <fieldset className="address">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input
            required
            id="street"
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="input"
          />

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              required
              id="city"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="input"
            />
          </div>
          <label htmlFor="state">State</label>
          <select
            required
            name="state"
            id="state"
            onChange={handleChange}
            value={formData.state}
            className="input"
          >
            <option value="">-- Select --</option>
            {states.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
          <div className="form-group">
            <label htmlFor="zip-code">Zip Code</label>
            <input
              required
              id="zip-code"
              type="number"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="input"
            />
          </div>
        </fieldset>

        <label htmlFor="department">Department</label>
        <select
          required
          name="department"
          id="department"
          onChange={handleChange}
          value={formData.department}
          className="input"
        >
          <option value="">-- Select --</option>
          {departments.map((departement) => (
            <option key={departement.id} value={departement.name}>
              {departement.name}
            </option>
          ))}
        </select>
        <br />
        <button className="save">Save</button>
      </form>
    </>
  );
};

export default Form;
