// react
import React from "react";

const AddExpenseForm = props => {
  const { date, name, description, amount } = props.formData;
  return (
    <div className="expenses-page">
      <fieldset>
        <legend> Add Expense </legend>
        <form onSubmit={props.addCategory}>
          <div className="name">
            <label> Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={props.onChange}
              />
            </label>
          </div>
          <div className="amount">
            <label> Amount:
              <input
                type="number"
                name="amount"
                min={0.01}
                step={0.01}
                value={amount}
                onChange={props.onChange}
              />
            </label>
          </div>
          <div className="category-id">
            <label> Category:
              <select name="CategoryId" onChange={props.onChange}>
                <option value="">Select Category</option>
                <option value="1">Food</option>
                <option value="2">Hospital Bills</option>
                <option value="3">Electricity Bills</option>
                <option value="4">Transport</option>
                <option value="5">water Bills</option>
                <option value="6">Trash Bills</option>
                <option value="7">Bank withdrawal charges</option>
                <option value="8">Electronics(work tools)</option>
                <option value="9">Phone Bills</option>
                <option value="10">Toiletries</option>
                <option value="11">House Rent</option>
                <option value="11">House Equipments</option>
              </select>
            </label>
          </div>
          <div className="description">
            <label> Description:
              <input
                type="text"
                name="description"
                value={description}
                onChange={props.onChange}
              />
            </label>
          </div>
          <div className="date">
            <label> Date of expenditure:
              <input
                type="date"
                name="date"
                value={date}
                onChange={props.onChange}
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

export default AddExpenseForm;
