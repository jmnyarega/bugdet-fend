import React from "react";

const PaginationLinks = props => {
  return (
    <div className="links">
      <button onClick={props.goBack}> Prev </button>
      <button onClick={props.goForward}> Next </button>
    </div>
  )
}

export default PaginationLinks;
