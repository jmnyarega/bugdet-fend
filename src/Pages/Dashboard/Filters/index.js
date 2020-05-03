import React from "react";

const Filters = () => {
  return (
    <div className="main">
      <form>
        <label> Category:
          <select>
            <option value=""> Selection Category </option>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
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
