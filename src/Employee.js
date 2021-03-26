import React from 'react';
import { connect } from 'react-redux';
import { ALL_EMPLOYEE, DELETE_EMPLOYEE } from './actionCreators/actions';


class Employee extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      employee: { name: "", dept: "" }
    }
  }

  valueChange=(e)=>{
   let employeetemp= {...this.state.employee}
   employeetemp.name=e.target.value
    this.setState({
      employee:{...employeetemp}
    })
  }

  handleChange=(e)=>{
    let employeetemp= {...this.state.employee}
    employeetemp.dept=e.target.value
     this.setState({
       employee:{...employeetemp}
     })
   }

  render() {
    console.log(this.props, "propsemp")
    return (
      <div>
        <div>
          <input type="text" value={this.state.employee.name} onChange={this.valueChange} />
          <select onChange={this.handleChange} value={this.state.employee.dept}>
            {
            this.props.state.department.map((value, index) => (
            <option value={value} key={index}>{value}</option>
            ))}
          </select>
          <button onClick={() => this.props.dispatch(ALL_EMPLOYEE(this.state.employee))}>add</button>
        </div>
        <div>
          {
            this.props.state.employee.map((value, index) => {
              return (
                <div>
                  <p>name: {value.name}</p> <p>department: {value.dept}</p> <button onClick={() => this.props.dispatch(DELETE_EMPLOYEE(index))}>remove</button>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state: state }
}

export default connect(mapStateToProps)(Employee)
