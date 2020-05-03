import React from "react";

const AddCategoryForm = props => {
  const {
    name,
    description,
    onChange,
    addCategory
  } = props;
  return (
    <fieldset>
      <legend> Add Category </legend>
      <form onSubmit={addCategory}>
        <div className="name">
          <label> Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="description">
          <label> Desccription:
            <input
              type="text"
              name="description"
              value={description}
              onChange={onChange}
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
  )
}

export default AddCategoryForm;
