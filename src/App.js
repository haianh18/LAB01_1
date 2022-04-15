import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from "./components/StaffComponents";
import { STAFFS } from "./shared/staffs";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS
    };
  }
  render() {
    return (
      <div className="App">
        <div className='container'>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <div className='navbar-brand'>Ứng dụng quản lý nhân sự v1.0</div>
        </nav>
        </div>
        <StaffList staffs ={this.state.staffs} />
      </div>
    );
  }
}

export default App;