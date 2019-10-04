import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  // To loop card components use map
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            // NB always add KEY prop to a loop when using React
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
