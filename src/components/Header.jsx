import payULogo from "../assets/images/pay-u-logo.png"

export default function Header(){

    return <>
            <div className="heading">
            <div>
                <img src={payULogo} alt="" className="payu-logo" />
            </div>
            
        </div>
        <hr />
    </>
}