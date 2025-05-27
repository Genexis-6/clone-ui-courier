import visa from "../assets/images/visa.png";
import masterCard from "../assets/images/master-card.png";
import eft from "../assets/images/eft.png";
import { ChevronRight } from "lucide-react";
import ProgressBar from "./ProgressBar";
import { useState } from "react";

export default function HomeSection({
  navigate,
  displayNotification,
  setNotificationMessage,
}) {
  const [procceedWithPayment, setProceedWithPayment] = useState(false);

  console.log(procceedWithPayment);
  const handleCheck = () => {
    setProceedWithPayment((prev) => !prev);
  };

  const handleNavigation = () => {
    if (!procceedWithPayment) {
      setNotificationMessage({
        msg_: "Kindly confirm that you agree to the terms and conditions before continuing.",
        type: "warning",
      });

      displayNotification();
    } else {
      navigate("/pay");
      sessionStorage.setItem("proceed", "true");
    }
  };
  return (
    <>
      <div className="container homeSection">
        <div className="row">
          <div className="col-12">
            <div className="row p-2 ">
              <div className="col-12 bg-white border">
                <div className="row mt-2">
                  <div className="col-12 mb-4">
                    <ProgressBar />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row ">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="first-content ">
                  <div className="row">
                    <div className="col-12 mt-5 ">
                      <h5 className="fw-bold mt-3 mx-4">Shipping Fees</h5>
                    </div>
                    <div className="col-11 mx-3 ">
                      <p>
                        Your shipment is ready for delivery, thank you for
                        choosing THE COURIER GUY service. please pay the
                        shipping fee to complete the delivery within the nex 24
                        hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 ">
                <div className="row first-content">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12">
                        <h3 className="fw-bold m-3 mt-4">Payment Details</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mx-1">
                        <span>
                          <b>Economy Service</b>{" "}
                          <span className="text-primary">delivery</span> of 1
                          parcel with a charge weight of 0.856kg
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mt-3 bg-light">
                        <div className="row">
                          <div className="col-6">
                            <p className="m-2">Base Charge</p>
                          </div>
                          <div className="col-6 text-end">
                            <p className="m-2">R 5.25</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 mt-3 bg-light">
                        <div className="row">
                          <div className="col-6">
                            <p className="m-2">Waybill Surcharge</p>
                          </div>
                          <div className="col-6 text-end">
                            <p className="m-2">R 6.80</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 mt-3 bg-light">
                        <div className="row">
                          <div className="col-6">
                            <p className="m-2">Fuel Surcharge 34.82%</p>
                          </div>
                          <div className="col-6 text-end">
                            <p className="m-2">R 2.68</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 mt-3 bg-light">
                        <div className="row">
                          <div className="col-6">
                            <p className="m-2">Sub Total</p>
                          </div>
                          <div className="col-6 text-end">
                            <p className="m-2">R 3.72</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 mt-3 bg-light">
                        <div className="row">
                          <div className="col-6">
                            <p className="m-2">Vat 15%</p>
                          </div>
                          <div className="col-6 text-end">
                            <p className="m-2">R 2.78</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 mt-3">
                        <div className="row">
                          <div className="col-6">
                            <p className="m-2">Grand Total</p>
                          </div>
                          <div className="col-6 text-end">
                            <p className="m-2 text-success fw-bold">R 21.33</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-12">
                        <div className="check-bar">
                          <div className="row">
                            <div className="col-12">
                              <div className="row">
                                <div className="col-1">
                                  <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    checked={true}
                                  />
                                </div>
                                <div className="col-11">Pay by Card</div>
                              </div>
                            </div>
                            <div className="col-12 mt-2">
                              <p>
                                We accept South African MasterCard and Visa
                                credit, and debit card
                              </p>
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

          <div className="col-12">
            <div className="row p-2 confirm-section">
              <div className="col-12 bg-white">
                <div className="row mt-5">
                  <div className="col-12 mx-2">
                    <p>
                      <input
                        type="checkbox"
                        onChange={handleCheck}
                        className="mx-2"
                      />
                      I have read and understand all of{" "}
                      <span className="text-success">
                        THE COURIER GUY Standard Terms and Conditions
                      </span>{" "}
                      and{" "}
                      <span className="text-success">Legal Documentation</span>{" "}
                      associated with the specific service i have requested from
                      THE COURIER GUY.
                    </p>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-12">
                    <button
                      className="w-100 btn btn-success fw-bold"
                      onClick={handleNavigation}
                    >
                      CONFIRM AND PROCEED TO PAYMENT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5 info">
            <div className="row">
              <div className="col-12 mt-5 info-section-2">
                <div className="row">
                  <div className="col-sm-12 col-lg-3 col-md-6">
                    <div className="row">
                      <div className="col-12 mt-4 text-white">
                        <h3>Company Infomation</h3>
                      </div>
                      <div className="col-12 mt-3">
                        <div className="row px-2">
                          <div className="col-12">
                            <a href="#">
                              <p>
                                <ChevronRight /> <span>About us</span>
                              </p>
                            </a>
                          </div>

                          <div className="col-12">
                            <a href="#">
                              <p>
                                <ChevronRight /> <span>No Sub-contacting</span>
                              </p>
                            </a>
                          </div>

                          <div className="col-12">
                            <a href="#">
                              <p>
                                <ChevronRight /> <span>History</span>
                              </p>
                            </a>
                          </div>

                          <div className="col-12">
                            <a href="#">
                              <p>
                                <ChevronRight /> <span>Career</span>
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-lg-3 col-md-6">
                    <div className="row">
                      <div className="col-12 mt-4 text-white">
                        <h3>Services</h3>
                      </div>
                      <div className="col-12 mt-3">
                        <div className="row px-2">
                          <div className="col-12">
                            <a href="#">
                              <p>
                                <ChevronRight />{" "}
                                <span>Local Courier Service</span>
                              </p>
                            </a>
                          </div>

                          <div className="col-12">
                            <a href="#">
                              <p>
                                <ChevronRight />{" "}
                                <span>Special Courier Service</span>
                              </p>
                            </a>
                          </div>

                          <div className="col-12">
                            <a href="#">
                              <p>
                                <ChevronRight />{" "}
                                <span>Distrubution Service</span>
                              </p>
                            </a>
                          </div>

                          <div className="col-12">
                            <a href="#">
                              <p>
                                <ChevronRight />{" "}
                                <span>International Service</span>
                              </p>
                            </a>
                          </div>

                          <div className="col-12">
                            <a href="#">
                              <p>
                                <ChevronRight />{" "}
                                <span>Warehousing Service</span>
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-lg-3 col-md-6">
                    <div className="row">
                      <div className="col-12 mt-4 text-white">
                        <h3>Legal</h3>
                      </div>
                      <div className="col-12 mt-3">
                        <div className="row px-2">
                          <div className="col-12">
                            <a href="#">
                              <p>
                                <ChevronRight /> <span>Legal Document</span>
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-lg-3 col-md-6">
                    <div className="row">
                      <div className="col-12 mt-4 text-white">
                        <h3>Info</h3>
                      </div>
                      <div className="col-12 mt-3">
                        <div className="row px-2">
                          <div className="col-12">
                            <a href="#">
                              <p>
                                <ChevronRight /> <span>Contact us</span>
                              </p>
                            </a>
                          </div>

                          <div className="col-12">
                            <a href="#">
                              <p>
                                <ChevronRight /> <span>Sales</span>
                              </p>
                            </a>
                          </div>

                          <div className="col-12">
                            <a href="#">
                              <p>
                                <ChevronRight /> <span>Payment Options</span>
                              </p>
                            </a>
                          </div>

                          <div className="col-12">
                            <a href="#">
                              <p>
                                <ChevronRight /> <span>Fuel Surcharge</span>
                              </p>
                            </a>
                          </div>

                          <div className="col-12">
                            <a href="#">
                              <p>
                                <ChevronRight /> <span>FAQS</span>
                              </p>
                            </a>
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

        <div className="row bg-white">
          <div className="col-12 mt-5">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <p className="">2024 THE COURIER GUY All Rights Reserved</p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 allowed-method text-end method">
                <img src={masterCard} alt="" />
                <img src={visa} alt="" />
                <img src={eft} alt="" />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 method">
                <p>Covid-19 Corona Virus South Resource Portal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
