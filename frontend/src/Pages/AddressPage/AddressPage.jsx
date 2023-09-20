import React, { useContext } from "react";
import CheckoutTotal from "../../Components/CheckoutTotal/CheckoutTotal";
import Address from "../../Components/Address/Address";
import "./AddressPage.styles.scss";
import axios from "axios";
import { CartContext } from "../../Context/cartContext";

const AddressPage = () => {
  const { totalPrice } = useContext(CartContext);

  const handlePaymentSuccess = async (payment) => {
    console.log("Payment in handle payment success", payment);
    const response = await axios.post(
      "http://localhost:8000/api/paymentVerification",
      {
        razorpay_order_id: payment.razorpay_order_id,
        razorpay_payment_id: payment.razorpay_payment_id,
        razorpay_signature: payment.razorpay_signature,
      }
    );
    console.log("Response in handle payment", response);
    if (response) {
      window.location.href = "/";
    }
  };
  const makePayment = async (amount, currency) => {
    const { data } = await axios.post("http://localhost:8000/api/createOrder", {
      amount: amount,
      currency,
    });
    console.log("this is the data", data);
    const options = {
      key: "rzp_test_0nnCRojDM6Id9H",
      amount: data.amount,
      currency: "INR",
      name: "Crown clothing",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: data.id,
      prefill: {
        name: "Fathima",
        email: "fatsdesai2018@gmail.com",
        contact: "8105209115",
      },
      handler: function (response) {
        console.log("this is the response in the handler", response);
        handlePaymentSuccess(response);
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    var razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div className="address">
      <Address />
      <CheckoutTotal
        btnName={"place order"}
        clickfunction={() => makePayment(totalPrice + 20, "INR")}
      />
    </div>
  );
};

export default AddressPage;
