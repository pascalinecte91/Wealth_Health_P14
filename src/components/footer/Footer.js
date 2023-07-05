import React from 'react';

/**
 * @component fonctionnel React qui affiche le copyright et l'année actuelle.
 * @example
 * return (
 *   <Footer />
 * )
 */
const Footer = () => {
   /**
   * Obtient l'année actuelle
   * @type {number}
   */
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer" >
      <p className="footer__content">Copyright {currentYear} WEALTH  HEALTH</p>
    </section>
  );
};

export default Footer;