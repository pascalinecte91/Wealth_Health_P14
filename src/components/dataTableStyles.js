export const customSortIcon = ({ isSorted, isSortedDesc }) => (
  <div>
    <span style={{ color: isSorted ? "black" : "gray" }}>▲</span>
    <span style={{ color: isSortedDesc ? "black" : "gray" }}>▼</span>
  </div>
);

export const customStyles = {
  table: {
    style: {
      width: "80%",
      margin: "auto",
    },
  },
  headRow: {
    style: {
      backgroundColor: "green" ,// change the background color
      color: "white", // change the text color
      fontSize: "18px", // change the font size
      fontStyle: "italic", // change the font style
    },
  },
};
