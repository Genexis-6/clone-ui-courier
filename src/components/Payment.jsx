import theCourier from "../assets/images/the-courier-guy-logo.png";
import visaCard from "../assets/images/mastacard-visa.png";

import "../assets/css/payment.css";
import { useState } from "react";
export default function Payment({
  displayNotification,
  setNotificationMessage,

}) {
  const [disableButton, setDisableButton] = useState(false);
  const [cardNumber, setCardNumber] = useState("");

  const [cardHolderName, setCardHolderName] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cvvNumber, setCvvNumber] = useState("");
  const [PhoneNumber, setPhoneNmuber] = useState("");

  const handleSubmittion = () => {
    if (cardNumber.trim() === "") {
      setNotificationMessage({
        msg_: "Card number is required.",
        type: "warning",
      });
      displayNotification();
    } else if (cardNumber.length !== 16) {
      setNotificationMessage({
        msg_: "Card number must be exactly 16 digits.",
        type: "warning",
      });
      displayNotification();
    } else if (!/^\d+$/.test(cardNumber)) {
      setNotificationMessage({
        msg_: "Card number must contain only numbers.",
        type: "warning",
      });
      displayNotification();
    } else if (cardHolderName.trim() === "") {
      setNotificationMessage({
        msg_: "Card holder name is required.",
        type: "warning",
      });
      displayNotification();
    } else if (cardMonth === "MM" || cardMonth.trim() === "") {
      setNotificationMessage({
        msg_: "Please select a valid expiry month.",
        type: "warning",
      });
      displayNotification();
    } else if (cardYear === "YY" || cardYear.trim() === "") {
      setNotificationMessage({
        msg_: "Please select a valid expiry year.",
        type: "warning",
      });
      displayNotification();
    } else if (cvvNumber.length !== 3) {
      setNotificationMessage({
        msg_: "CVV must be exactly 3 digits.",
        type: "warning",
      });
      displayNotification();
    } else if (!/^\d+$/.test(cvvNumber)) {
      setNotificationMessage({
        msg_: "CVV must contain only numbers.",
        type: "warning",
      });
      displayNotification();
    } else if (PhoneNumber.length !== 11) {
      setNotificationMessage({
        msg_: "Phone number must be exactly 11 digits.",
        type: "warning",
      });
      displayNotification();
    } else if (!/^\d+$/.test(PhoneNumber)) {
      setNotificationMessage({
        msg_: "Phone number must contain only numbers.",
        type: "warning",
      });
      displayNotification();
    } else {
      setNotificationMessage({
        msg_: "Proceed with the payment.",
        type: "success",
      });
      displayNotification();
    }
  };

  return (
    <div className="payment">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="card">
              <div className="row">
                <div className="col-md-4 col-lg-12  text-center mt-5">
                  <img src={theCourier} alt="" />
                </div>
                <div className="col-md-4 col-lg-12 mt-5 ">
                  <p>THE COURIER GUY</p>
                  <span>TCG894889044</span>
                </div>

                <div className=" col-md-4 col-lg-12 text-white fw-bold amount">
                  <div className="row">
                    <div className="col-12 col-lg-6 price ">
                      <p>Amount Due</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <h5>R21.33</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9">
            <div className="row">
              <div className="col-12 mt-3">
                <h5 className="fw-bold">Choose your payment method</h5>
              </div>
            </div>

            <div className="row complete-payment border">
              <div className="col-12">
                <div className="row">
                  <div className="col-12 card-head bg-light">
                    <div className="row">
                      <div className="col-5">
                        <input
                          type="radio"
                          name=""
                          checked
                          id=""
                          className="m-2 "
                        />
                        <span className="mx-4 fw-bold">Cards</span>
                      </div>
                      <div className="col-7">
                        <img src={visaCard} alt="" className="visa" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-2 text-secondary">
                    <p>
                      We accept major credit cards including VISA and
                      MasterCard. The accepted payment options are provided
                      above.
                    </p>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-12 form mt-3">
                    <div className="row ">
                      <div className="col-sm-12 col-md-2">
                        <p>Card number</p>
                      </div>
                      <div className="col-sm-12 col-md-10">
                        <input
                          type="text"
                          className="w-100"
                          maxLength={16}
                          onChange={(event) => {
                            setCardNumber(event.target.value);
                          }}
                          required={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 form mt-3">
                    <div className="row ">
                      <div className="col-sm-12 col-md-2">
                        <p>Card holder name</p>
                      </div>
                      <div className="col-sm-12 col-md-10">
                        <input
                          type="text"
                          className="w-100"
                          onChange={(event) => {
                            setCardHolderName(event.target.value);
                          }}
                          required={true}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12 form mt-3">
                    <div className="row ">
                      <div className="col-sm-12 col-md-2">Expirt date</div>
                      <div className="col-sm-12 col-md-10">
                        <div className="row">
                          <div className="col-6">
                            <select
                              id="mm"
                              name="mm"
                              className=" expMonth expiry-date w-100"
                              onChange={(event) => {
                                setCardMonth(event.target.value);
                              }}
                              required={true}
                            >
                              <option value="MM">MM</option>{" "}
                              <option value="01">01</option>
                              <option value="02">02</option>
                              <option value="03">03</option>
                              <option value="04">04</option>
                              <option value="05">05</option>
                              <option value="06">06</option>
                              <option value="07">07</option>
                              <option value="08">08</option>
                              <option value="09">09</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>{" "}
                            </select>
                          </div>
                          <div className="col-6">
                            <select
                              id="yy"
                              name="yy"
                              className=" expYear expiry-date w-100"
                              onChange={(event) => {
                                setCardYear(event.target.value);
                              }}
                              required={true}
                            >
                              <option value="YY">YY</option>{" "}
                              <option value="2023">2023</option>
                              <option value="2024">2024</option>
                              <option value="2025">2025</option>
                              <option value="2026">2026</option>
                              <option value="2027">2027</option>
                              <option value="2028">2028</option>
                              <option value="2029">2029</option>
                              <option value="2030">2030</option>
                              <option value="2031">2031</option>
                              <option value="2032">2032</option>
                              <option value="2033">2033</option>
                              <option value="2034">2034</option>
                              <option value="2035">2035</option>
                              <option value="2036">2036</option>
                              <option value="2037">2037</option>
                              <option value="2038">2038</option>
                              <option value="2039">2039</option>
                              <option value="2040">2040</option>
                              <option value="2041">2041</option>
                              <option value="2042">2042</option>
                              <option value="2043">2043</option>
                              <option value="2044">2044</option>
                              <option value="2045">2045</option>
                              <option value="2046">2046</option>
                              <option value="2047">2047</option>
                              <option value="2048">2048</option>
                              <option value="2049">2049</option>
                              <option value="2050">2050</option>
                              <option value="2051">2051</option>
                              <option value="2052">2052</option>
                              <option value="2053">2053</option>
                              <option value="2054">2054</option>
                              <option value="2055">2055</option>
                              <option value="2056">2056</option>
                              <option value="2057">2057</option>
                              <option value="2058">2058</option>
                              <option value="2059">2059</option>
                              <option value="2060">2060</option>
                              <option value="2061">2061</option>{" "}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 form mt-3">
                    <div className="row ">
                      <div className="col-sm-12 col-md-2">
                        <p>CVV number</p>
                      </div>
                      <div className="col-sm-12 col-md-10">
                        <input
                          type="text"
                          className="w-100"
                          maxLength={3}
                          onChange={(event) => {
                            setCvvNumber(event.target.value);
                          }}
                          required={true}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12 form mt-3">
                    <div className="row ">
                      <div className="col-sm-12 col-md-2">
                        <p>Phone number</p>
                      </div>
                      <div className="col-sm-12 col-md-10">
                        <input
                          type="text"
                          className="w-100"
                          maxLength={11}
                          onChange={(event) => {
                            setPhoneNmuber(event.target.value);
                          }}
                          required={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-5 mb-5">
                    <div className="row ">
                      <div className="col-12 text-center">
                        <button onClick={handleSubmittion} className="pay-button text-white">Pay R21.33</button>
                        <button className="mx-1 bg-white cancel">Cancel</button>
                      </div>
                      <div className="col-12  mt-3">
                        <small>
                          *You may be redirected to your bank's secure site to
                          authenticate yourself before making the payment.
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
