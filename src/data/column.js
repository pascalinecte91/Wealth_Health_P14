/**
 * @Définition de la colonne "First Name".
 * Cette colonne affiche le prénom de l'employé avec la première lettre en majuscule.
 * La colonne est triable par défaut.
 *
 * @type {import("react-data-table-component").Column<object>}
 */
export const columns = [
  // props definie sur true pour definir le tri sur la colonne en question
  {
    name: "First Name",
    selector: (row) => row.firstName,
    sortable: true,
    sortFunction: (a, b) => a.firstName.localeCompare(b.firstName),
    cell: (row) => <span>{row.firstName.charAt(0).toUpperCase() + row.firstName.slice(1)}</span>,

  },
  {
    name: "Last Name",
    selector: (row) => row.lastName,
    sortable: true,
    sortFunction: (a, b) => a.lastName.localeCompare(b.lastName),
  },
  {
    /**
     *
     * @param {*} a  objet à comparer
     * @param {*} b  objet à comparer
     * @props { starDate } string format
     * @method reverse  pour avoir le meme format des dates js
     * @method join pour refaire la chaine en inserant - aaa-mm-jj
     * @objet Date  cree  l objet avec date de depart
     * @returns si false: a date te plus ancienne, si true:  inverse si null = identique
     */
    name: "Start Date",
    selector: (row) => row.startDate,
    sortable: true,
    sortFunction: (a, b) => {
      //La méthode join est  utilisée pour transformer le tableau en une chaîne de caractères
      //au format compatible Date de JavaScript, qui permet de créer un objet Date
      const dateA = a.startDate.split("/").reverse().join("-");
      const dateB = b.startDate.split("/").reverse().join("-");
      return new Date(dateA) - new Date(dateB);
    },
  },
  {
    name: "Department",
    selector: (row) => row.department,
    sortable: true,
    sortFunction: (a, b) => a.department.localeCompare(b.department),
  },
  {
    name: "Date of Birth",
    selector: (row) => row.dateOfBirth,
    sortable: true,
    sortFunction: (a, b) => {
      const dateA = a.dateOfBirth.split("/").reverse().join("-");
      const dateB = b.dateOfBirth.split("/").reverse().join("-");
      return new Date(dateA) - new Date(dateB);
    },
  },
  {
    name: "Street",
    selector: (row) => row.street,
    sortable: true,
    sortFunction: (a, b) => a.street.localeCompare(b.street),
  },
  {
    name: "City",
    selector: (row) => row.city,
    sortable: true,

    sortFunction: (a, b) => a.city.localeCompare(b.city),
  },
  {
    name: "State",
    selector: (row) => row.state,
    sortable: true,
    sortFunction: (a, b) => a.state.localeCompare(b.state),
  },
  {
    name: "Zip Code",
    selector: (row) => row.zipCode,
    sortable: true,
    sortFunction: (a, b) => a.zipCode.localeCompare(b.zipCode),
  },
];
  

