import React, { Component } from "react";
import "./css/dashboardpage.css";
import { Button } from "reactstrap";
export class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [
        {
          id: 1,
          name: "test1",
          age: "11",
          gender: "male",
          email: "test1@gmail.com",
          phoneNo: "9415346313"
        },
        {
          id: 2,
          name: "test2",
          age: "12",
          gender: "male",
          email: "test2@gmail.com",
          phoneNo: "9415346314"
        },
        {
          id: 3,
          name: "test3",
          age: "13",
          gender: "male",
          email: "test3@gmail.com",
          phoneNo: "9415346315"
        },
        {
          id: 4,
          name: "test4",
          age: "14",
          gender: "male",
          email: "test4@gmail.com",
          phoneNo: "9415346316"
        },
        {
          id: 5,
          name: "test5",
          age: "15",
          gender: "male",
          email: "test5@gmail.com",
          phoneNo: "9415346317"
        },
        {
          id: 6,
          name: "test6",
          age: "16",
          gender: "male",
          email: "test6@gmail.com",
          phoneNo: "9415346318"
        }
      ]
    };
  }
  renderTableHeader() {
    let header = Object.keys(this.state.user[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }
  render() {
    return (
      <div>
        <center>
          <h2>EmployeeList</h2>
          <br />
          <table id="user">
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>PhoneNo</th>
            <tbody>
              {this.state.user.map((data, i) => {
                // const { id, name, age, gender, email, phoneNo } = user;
                return (
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.gender}</td>
                    <td>{data.email}</td>
                    <td>{data.phoneNo}</td>
                  </tr>
                );
                {
                  this.renderTableHeader();
                }
              })}
            </tbody>
          </table>
          <a href="/">
            <Button className="button1">Back</Button>
          </a>
        </center>
      </div>
    );
  }
}

export default Dashboard;
