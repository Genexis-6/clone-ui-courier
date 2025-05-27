import "../assets/css/progressbar.css"

export default function ProgressBar(){
  return (
    <div className="progress-wrap">
      <div className="steps-progress" id="mainProg">
        <div className="steps-progress-bar">
          <div className="done-steps" style={{ width: "50%" }}></div>
          <div style={{ width: "20%" }}></div>
        </div>

        <a data-savepage-href="/Parcel#start" href="#" className="step done">
          <div className="step-no">01</div>
          <div className="step-title">Order</div>
        </a>

        <a data-savepage-href="/Parcel#dimensions" href="#" className="step done">
          <div className="step-no">02</div>
          <div className="step-title">Parcel Dimensions</div>
        </a>

        <a data-savepage-href="/Send/Select" href="#" className="step done">
          <div className="step-no">03</div>
          <div className="step-title">Service</div>
        </a>

        <a data-savepage-href="/Send/Address" href="#" className="step current">
          <div className="step-no">04</div>
          <div className="step-title">Shipping fees</div>
        </a>

        <div className="step">
          <div className="step-no">05</div>
          <div className="step-title">Complete</div>
        </div>
      </div>
    </div>
  );
};


