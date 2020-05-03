// react libraries
import React from "react";
import { connect } from "react-redux"

// actions
import { addCategory } from "../../../actions/categories/add";

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
        <fieldset>
          <legend> Add Category </legend>
          <form onSubmit={this.addCategory}>
            <div className="name">
              <label> Name:
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.onChange}
                />
              </label>
            </div>
            <div className="description">
              <label> Desccription:
                <input
                  type="text"
                  name="description"
                  value={description}
                  onChange={this.onChange}
                />
              </label>
            </div>
            <div className="button">
              <input
                type="submit"
                value="submit"
              />
            </div>
          </form>
        </fieldset>
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
