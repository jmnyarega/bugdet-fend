// react libraries
import React from "react";
import { connect } from "react-redux";

// actions here...
import { getUserExpenses } from "../../actions/expenses/get";
import { getCategory } from "../../actions/categories/get";

// components
import Filters  from "./Filters";
import ExpenseTable  from "./Table";
import PaginationLinks from "./PaginationLinks";
import AddExpenses from "../Expenses/Add"

// css
import "./index.css";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      expenses: [],
      categories: [],
    };
  }

  componentDidMount() {
    this.props.getUserExpenses( { params: { order: 'date', orderMethod: 'DESC' } });
    this.props.getCategory();
  }

  static getDerivedStateFromProps(props, state) {
    return {
      expenses: props.expenses.data,
      currentPage: props.expenses.page,
      categories: props.categories,
    }
  }

  goBack = () => {
    let cPage = this.state.currentPage;
    if (cPage > 1) {
      cPage--;
      this.props.getUserExpenses({
        params: { page: cPage, order: 'date', orderMethod: 'DESC' }
      })
    }
  }

  goForward = () => {
    let cPage = this.state.currentPage;
    if (this.state.expenses.length === 10) {
      cPage++;
      this.props.getUserExpenses({
        params: { page: cPage, order: 'date', orderMethod: 'DESC' }
      });
    }
  }

  render() {
    return (
      <div className="dashboard">
        <Filters
          categories={this.state.categories}
        />
        <div className="content">
          <ExpenseTable
            expenses={this.state.expenses}
          />
          <AddExpenses
            categories={this.state.categories}
          />
        </div>
        <PaginationLinks
          goForward={this.goForward}
          goBack={this.goBack}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    getUserExpenses: params => dispatch(getUserExpenses(params)),
    getCategory: () => dispatch(getCategory())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
