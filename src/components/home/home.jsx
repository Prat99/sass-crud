import React, { Component } from "react";
import "./home.scss";
import EmpTable from "./empTable";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      role: "Developer",
      options: ["Developer", "Solution Architect", "QA", "BA"],
      employees: [{ name: "Foo", email: "foo@gmail.com", role: "Developer" }]
    };
  }

  changeInputHandler = e => {
      console.log('inputHandler', e.target.name);
      console.log('inputHandler', e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  saveInfoHandler = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log("save handler", this.state);
    const currentEmployees = [...this.state.employees];
    currentEmployees.push({
      name: this.state.name,
      email: this.state.email,
      role: this.state.role
    });
    this.setState((state, props) => {
      return {
        employees: currentEmployees,
        name: "",
        email: "",
        role: ""
      };
    });
  };

  deleteEmpHandler = email => {
    const employees = [...this.state.employees];
    const _employees = employees.filter(emp => emp.email !== email);
    this.setState((state, props) => {
      return {
        employees: _employees
      };
    });
  };

  selectedEmpHandler = email => {
    console.log("selectedEmpHandler", email);
    const employees = [...this.state.employees];
    const selectedEmployee = employees.find(emp => emp.email === email);
    this.setState((state, props) => {
      return {
        name: selectedEmployee.name || "",
        email: selectedEmployee.email || ""
      };
    });
  };

  render() {
    return (
      <>
        {/* <h4 className="main-heading">Playground of Sass Components</h4> */}
        <div className="container">
          <form className="">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.changeInputHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.changeInputHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Select Role</label>
              <select
                className="form-control"
                value={this.state.role}
                onChange={this.changeInputHandler}
                name="role"
              >
                {this.state.options.map((opt, id) => {
                  return (
                    <option value={opt} key={id}>
                      {opt}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <button
                className="btn btn-primary"
                onClick={this.saveInfoHandler}
              >
                Save
              </button>
            </div>
          </form>
          <hr />
          <EmpTable
            employees={this.state.employees}
            deleteEmp={email => this.deleteEmpHandler(email)}
            selectedEmp={email => this.selectedEmpHandler(email)}
          />
        </div>
      </>
    );
  }
}

export default Home;
