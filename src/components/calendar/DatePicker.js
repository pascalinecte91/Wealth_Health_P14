import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { FaCalendarAlt as CalendarIcon } from 'react-icons/fa';

const DatePicker = ({
  id,
  content,
  name,
  date,
  handleChange,
  handleDateChange,
  placeholder,
}) => {
  const [value, setValue] = React.useState(new Date());
  const [visible, setVisible] = React.useState(false);

  const showCalendar = () => {
    setVisible(true);
  };

  const closeCalendar = (value) => {
    setValue(value);
    setVisible(false);
    handleDateChange(name, value.toLocaleDateString());
  };

  return (
    <div>
      <label htmlFor={id}>{content}</label>
      <div className="input-container">
        <input
          className="input_datepicker"
          required
          pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
          id={id}
          type="text"
          name={name}
          value={date}
          onChange={handleChange}
          onClick={showCalendar}
          placeholder={placeholder}
        />
        {visible && (
          <div className="calendar-container">
            <Calendar
              onChange={closeCalendar}
              value={value}
              className="customCalendar"
              tileClassName="customTile"
            />
          </div>
        )}
        <div className="icon-container">
          <CalendarIcon className="calendar-icon" onClick={showCalendar} />
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
