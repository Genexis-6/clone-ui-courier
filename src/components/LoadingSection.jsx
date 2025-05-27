import "../assets/css/loading.css";
import loading from "../assets/images/spinner.svg";

export default function LoadingSection({ ref }) {
  return (
    <div className="loading-container" ref={ref}>
      <div className="container border mt-5 ">
        <div className="row">
          <div className="col-12 top">{/* to section here */}</div>
        </div>
        <div className="row">
          <div className="col-12 loader text-center">
            <div className="spinner">
              <img src={loading} alt="lading" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="fw-bold">
              Please wait while you are redirected to the paymeny server
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
