import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const { getCartAmount } = useContext(ShopContext);

  const generateTxRef = () => {
    return `tx_${Math.random().toString(36).substring(2, 9)}`;
  };

  const handlePayment = () => {
    // Form validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !street ||
      !city ||
      !state ||
      !zipcode ||
      !country ||
      !phone
    ) {
      alert("Please fill in all the fields.");
      return;
    }
    // Payment method validation
    if (!method) {
      alert("Please select a payment method.");
      return;
    }

    const txRef = generateTxRef();
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer CHASECK_TEST-KzqTmzYnjSL5UDnlA7YuiAZY3OoeujYo"
    );
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      amount: getCartAmount(),
      currency: "ETB",
      email: email,
      first_name: firstName,
      last_name: lastName,
      phone_number: phone,
      tx_ref: txRef,
      callback_url: "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
      return_url: "http://localhost:5173",
      customization: {
        title: "Payment for m",
        description: "I love online payments",
      },
      meta: {
        hide_receipt: "true",
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/v1/transaction/initialize", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        window.location.href = result.data.checkout_url; // Redirect to Chapa checkout
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t ">
      {/* ----------------- Left Side -------------------- */}
      <div className="flex flex-col gap4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3 ">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3 ">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <input
          className="border border-gray-300 rounded my-2 py-1.5 px-3.5 w-full "
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
          type="text"
          placeholder="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <div className="flex gap-3 my-2">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="flex gap-3 my-2">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
            type="number"
            placeholder="Zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
          type="number"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      {/* ------------ Right Side ---------------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-8">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* ------------- Payment Method Selection ----------- */}
          <div className="flex gap-3 flex-col lg:flex-row ">
            <div
              onClick={() => setMethod("chapa")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`w-4 h-4 border rounded-full ${
                  method === "chapa" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.chapa_logo} alt="" />
            </div>

            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`w-4 h-4 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>

            {/* <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`w-4 h-4 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div> */}
          </div>

          <div className="w-full text-end mt-8 ">
            <button
              onClick={handlePayment}
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
