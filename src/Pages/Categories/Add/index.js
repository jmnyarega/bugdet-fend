// react libraries
import React from "react";
import { connect } from "react-redux"

// actions
import { addCategory } from "../../../actions/categories/add";

// components
import AddCategoryForm from "./AddCategoryForm";

// css
import "./index.css";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      UserId: "",
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addCategory = e => {
    e.preventDefault();
    this.props.addCategory(this.state);
  }

  render() {
    const { description, name } = this.state;
    return (
      <div className="category-page">
        <AddCategoryForm
          description={description}
          name={name}
          onChange={this.onChange}
          addCategory={this.addCategory}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return { addCategory: data => dispatch(addCategory(data)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
