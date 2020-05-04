// react
import React from "react";

const AddExpenseForm = props => {
  const { date, name, description, amount } = props.formData;
  return (
    <div className="expenses-page">
      <fieldset>
        <legend> Add Expense </legend>
        <form onSubmit={props.addExpense}>
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
                {
                  props.categories.map(category => {
                    return (
                      <option value={category.id}>{category.name}</option>
                  )})
                }
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
