
// pour update eventuel

// export const setEmployee = (employeeData) => ({
//   type: "SET_EMPLOYEE",
//   employee: employeeData,
// });

export const addEmployee = (employeeData) => ({
  type: "ADD_EMPLOYEE",
  payload: employeeData,
});

export const clearEmployees = () => ({
  type: "CLEAR_EMPLOYEES",
});
