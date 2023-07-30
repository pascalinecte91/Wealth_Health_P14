import React from 'react';

const SecondModal = ({ handleCloseSecondModal }) => {
  return (
    <div className="succes">
      <div className="succes__content">
        <span className="close" onClick={handleCloseSecondModal}> 🚫 </span>
        <p>L'employé a été enregistré avec succès !</p>
      </div>
    </div>
  );
};

export default SecondModal;

