// react libraries
import React from 'react';
import { connect } from "react-redux";

// actions
import { addUserExpenses } from "../../../actions/expenses/add";

// components
import AddExpenseForm from "./components/AddExpenseForm";

// css
import "./index.css";

class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      date:"",
      CategoryId: "",
      amount: 0.01,
      UserId: 1
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      console.log(this.state);
    });
  }

  addCategory = e => {
    e.preventDefault();
    this.props.addExpense(this.state);
  }

  render() {
    return (
      <AddExpenseForm
        onChange={this.onChange}
        formData={this.state}
      />
    )
  }
}

const mapStateToProps = state => {
  return { expenses: state }
}

const mapDispatchToProps = dispatch => {
  return { addUserExpenses: data => dispatch(addUserExpenses(data)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
