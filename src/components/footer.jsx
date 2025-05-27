import entrust from "../assets/images/entrust.png";
import pci from "../assets/images/pci.png";

export default function Footer() {
  return (
    <>
      <hr />
      <div className="container bg-white ">
        <div className="row">
          <div className="col-12 footer mt-1 mb-1">
            <img src={entrust} alt="entrust" />
            <img src={pci} alt="pci" />
          </div>
          <div className="col-12 text-center text-secondary fw-bold">
            <p>
              You agree that your personal data will be processed when you
              choose a payment method and proceed with a transaction. We may
              share your personal data with entities involved in processeing
              your trasnaction. Depending on the payment mathod you choose, this
              can include banks, merchant, EFT providers, payment schemes, loan
              institutions or loyalty points providers. Providing personal data
              is a choice by you. If you choose not to provide your personal
              data, your transaction may be rejected. For information on how we
              process your personal data and your rights, see our{" "}
              <u className="text-secondary">
                <b>PayU privacy Statement.</b>
              </u>
              For information on our terms, compliance and security standards,
              see our{" "}
              <u className="text-secondary">
                <b>Legal Information.</b>
              </u>
            </p>
          </div>
          <div className="col-12 mt-5 text-center text-secondary">
            <p className="fw-bold">All Right Reserved 2024</p>
          </div>
        </div>
      </div>
    </>
  );
}
