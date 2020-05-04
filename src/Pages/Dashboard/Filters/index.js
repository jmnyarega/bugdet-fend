import React from "react";

const Filters = props => {
  return (
    <div className="main">
      <form>
        <label> Category:
          <select>
            <option value="">Select Category</option>
            {
              props.categories.map(category => {
                return (
                  <option value={category.id}>{category.name}</option>
                )})
            }
          </select>
        </label>
        <label> Search(name):
          <input type="text" name="name" placeholder="search by expense name"/>
        </label>
        <label> From:
          <input type="date" name="from" />
        </label>
        <label> to:
          <input type="date" name="to" />
        </label>
        <input type="submit" />
      </form>
      <hr />
    </div>
  )
};

export default Filters;
