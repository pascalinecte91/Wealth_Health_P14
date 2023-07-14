import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { FaCalendarAlt as CalendarIcon } from 'react-icons/fa';


/**
 * @component fonctionnel React qui affiche un champ de saisie de date avec un calendrier.
 * @param {Object} props - Les propriétés passées au composant DatePicker.
 * @param {string} props.id - L'identifiant du champ de saisie.
 * @param {string} props.content - Le contenu du label.
 * @param {string} props.name - Le nom du champ de saisie.
 * @param {string} props.date - La date sélectionnée.
 * @param {Function} props.handleChange - La fonction à exécuter lors du changement de la date.
 * @param {Function} props.handleDateChange - La fonction à exécuter lors de la sélection d'une date dans le calendrier.
 * @param {string} props.placeholder - Le texte d'espace réservé pour le champ de saisie.
 * @returns {JSX.Element} Le composant DatePicker.
 * @example
 * @return (
 *  DatePicker < id="date" content="Date" name="date" date="01/01/2021" handleChange={handleChange} handleDateChange={handleDateChange} placeholder="JJ/MM/AAAA" />
 * )
 */
const DatePicker = ({
  id, content, name, date, handleChange, handleDateChange, placeholder}) => {
     /**
   * La date sélectionnée.
   * @type {Date}
   */
  const [value, setValue] = React.useState(new Date());

  /**
   * @Indique si le calendrier est visible ou non.
   * @type {boolean}
   */
  const [visible, setVisible] = React.useState(false);

  /**
   * @Affiche le calendrier.
   */
  const showCalendar = () => {
    setVisible(true);
  };


  /**
   * @Ferme le calendrier et met à jour la date sélectionnée.
   * @param {Date} value La - date sélectionnée.
   */
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
