import payULogo from "../assets/images/pay-u-logo.png";

export default function Header({ref = null}) {
  return (
    <>
      <div className="heading" ref={ref}>
        <div>
          <img src={payULogo} alt="" className="payu-logo" />
        </div>
      </div>
      <hr />
    </>
  );
}
