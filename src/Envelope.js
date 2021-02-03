import React from "react";

const Envelope = ({ details, stamp }) => {
  const { from, to } = details;

  return (
    <div className="envelope">
      <div className="from">
        <span>{from.name}</span>
        <br />
        <span>{from.address}</span>
      </div>
      <div className="to">
        <span>{to.name}</span>
        <br />
        <span>{to.address}</span>
      </div>
      <div className="stamp">
        <img src={stamp} alt="stampPicture"/>
      </div>
    </div>
  );
};

export default Envelope;
