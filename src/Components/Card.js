import React from "react";

// Card accepts parameters (props)
const Card = props => {
  return (
    // Only return 1 element i.e. div which contains other elements
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      {/* NOTE THE BACKTICKS `` rather than QUOTATION MARKS "" around src */}
      <img alt="robots" src={`https://robohash.org/${props.id}?size=200x200`} />
      <div>
        {/* Wrap in curly {} to execute JS expression */}
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
