// react libraries
import React from "react";
import { connect } from "react-redux";

// actions here...
import { getUserExpenses } from "../../actions/expenses/get"

// components
import Filters  from "./Filters";
import ExpenseTable  from "./Table";

// css
import "./index.css";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      expenses: [],
    };
  }

  componentDidMount() {
    this.props.getUserExpenses();
  }

  static getDerivedStateFromProps(props, state) {
    return {
      expenses: props.expenses.data,
      currentPage: props.expenses.page,
    }
  }

  goBack = () => {
    let cPage = this.state.currentPage;
    if (cPage > 1) {
      cPage--;
      this.props.getUserExpenses({
        params: { page: cPage }
      })
    }
  }

  goForward = () => {
    let cPage = this.state.currentPage;
    if (this.state.expenses.length === 10) {
      cPage++;
      this.props.getUserExpenses({
        params: { page: cPage }
      });
    }
  }

  render() {
    return (
      <div className="dashboard">
        <Filters />
        <ExpenseTable
          expenses={this.state.expenses}
        />
        <div className="links">
          <button onClick={this.goBack}> Prev </button>
          <button onClick={this.goForward}> Next </button>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return { getUserExpenses: params => dispatch(getUserExpenses(params)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
