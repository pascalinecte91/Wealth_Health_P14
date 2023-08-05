import React from 'react';
import { RxCrossCircled } from 'react-icons/rx';

const SecondModal = ({ handleCloseSecondModal }) => {
  return (
    <section className="success" onClick={handleCloseSecondModal}>
      <div className="success__content">
        <span className="success__close" onClick={handleCloseSecondModal}>
          <RxCrossCircled />
        </span>
        <p>L'employé a été enregistré avec succès !</p>
      </div>
    </section>
  );
};

export default SecondModal;
