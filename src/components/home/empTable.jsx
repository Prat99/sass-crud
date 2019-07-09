import React from "react";

const EmpTable = props => {
  return (
    <>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Role</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {props.employees ? props.employees.map((emp, id) => {
            return (
              <tr key={id} onClick={() => props.selectedEmp(emp.email)}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.role}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => props.deleteEmp(emp.email)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          }) : null}
        </tbody>
      </table>
    </>
  );
};

export default EmpTable;
