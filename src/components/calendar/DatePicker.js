import React from 'react';
import Calendar from "react-calendar";

const DatePicker = ({id, content, name, date, handleChange, handleDateChange, placeholder}) => {
    const [value, setValue] = React.useState(new Date())
    const [visible, setVisible] = React.useState(false)
    
 
    const showCalendar =() =>{
        setVisible(prevState => !prevState)
    }
    
 
    const closeCalendar = (value) => {
        console.log("closeCalendar called with value:", value);
        setValue(value);
        setVisible(false);
        handleDateChange(name, value.toLocaleDateString());
      };
      


    return (
        <div>
            <label htmlFor={id}>{content}</label>
            <input required pattern='[0-9]{2}/[0-9]{2}/[0-9]{4}' 
            id={id} 
            type="text" 
            name={name}  
            value={date} 
            onChange={handleChange} 
            onClick={showCalendar} 
            placeholder={placeholder}
            className="input" />{visible && <Calendar onChange={closeCalendar} value={value}  />}
        </div>
    );
}

export default DatePicker;