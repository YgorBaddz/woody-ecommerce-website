import React from "react";

const Heading = ({ title, desc }) => {
  return (
    <div>
      <h1 className="font-bold text-4xl m-2 p-2 uppercase">{title}</h1>
      <p className="mb-8 uppercase">{desc}</p>
    </div>
  );
};

export default Heading;
