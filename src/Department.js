import React from 'react';
import { connect } from 'react-redux';
import { ALL_DEPT, DELETE_DEPT } from './actionCreators/actions';


class Department extends React.Component{
  constructor(props){
    super(props)
    this.state={
    dept:""
    }
  }

  valueChange=(e)=>{
    this.setState({
        dept:e.target.value
    })
  }



  render(){
      console.log(this.props,"props")
    return (
        <div>
        <div>
        <input type="text" value={this.state.dept} onChange={this.valueChange}/>
        <button onClick={()=>this.props.dispatch(ALL_DEPT(this.state.dept))}>add</button>    
        </div>
        <div>
        {
            this.props.state.department.map((value,index)=>{
                return(
                    <div key={index}>
                    <p>{value}</p> <button onClick={()=>this.props.dispatch(DELETE_DEPT(index))}>remove</button>    
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

export default connect(mapStateToProps)(Department);