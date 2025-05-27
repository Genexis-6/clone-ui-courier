import theCourier from "../assets/images/the-courier-guy-logo.png"
import hmabugger from "../assets/images/hambugger.svg"

export default function NavBar(){
    return <nav>
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 col-lg-8">
                    <div className="row">
                        <div className="col-12 col-lg-2">
                            <img src={theCourier} alt="Logo here" />
                        </div>
                        <div className="d-none d-lg-flex col-lg-9 nav-links">
                            <div className="nav-link">
                                <a href="">Service</a>
                            </div>
                            <div className="nav-link">
                                <a href="">Solutions</a>
                            </div>
                            <div className="nav-link">
                                <a href="">Send a Panel</a>
                            </div>
                            <div className="nav-link">
                                <a href="">Track your Panel</a>
                            </div>

                            <div className="nav-link">
                                <a href="">Contact us</a>
                            </div>
                            <div className="nav-link">
                                <a href="">Takealot</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 text-end hambugger">
                    <img src={hmabugger} alt=""  />
                </div>
            </div>
        </div>
    </nav>
}