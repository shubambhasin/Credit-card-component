import React from "react";
import "./styles.css";
const CreditCard = ({ cardDetails }) => {
  const { bankName, cardInfo, customerName } = cardDetails;
  return (
    <div className="card-container">
      <div className="card-body">
        <h2 className="bank-name">{cardDetails.bankName}</h2>
        <div className="card-info">
          <p className="card-number">{cardDetails.cardInfo.cardNumber}</p>
          <p className="card-expiry">
            Valid Upto<strong> {cardDetails.cardInfo.expiry}</strong>
          </p>
          <p className="customer-name">{cardDetails.customerName} </p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
