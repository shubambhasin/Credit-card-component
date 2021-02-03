import CreditCard from "./CreditCard";
import Envelope from "./Envelope";
import "./styles.css";

const ShippingDetails = {
  from: {
    name: "Shubam Bhasin",
    address: "Akhnoor, J&K"
  },
  to: {
    name: "Tech Scale",
    address: "Tech Park Banglore"
  }
};

const CardDetails = {
  bankName: "Big Bank, Inc.",
  cardInfo: {
    cardNumber: "1234 5678 9700 2657",
    expiry: "12/25"
  },
  customerName: "Shubam Bhasin"
};

const Stamp =
  "https://www.collectorbazar.com/images/products/india-stamp-2016-geeta-dutt-legendary-singers-of-india-mnh-stamps-122767-1.png";

export default function App() {
  return (
    <div className="App">
      {/* <Envelope details={ShippingDetails} stamp={Stamp} /> */}
      <CreditCard cardDetails={CardDetails}/>
    </div>
  );
}
