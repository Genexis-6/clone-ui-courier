import "../assets/css/content-body.css"



import HomeSection from "../components/HomeSection"

import Header from "../components/Header"
import Footer from "../components/footer"
import { useNavigate } from "react-router-dom"



export default function ContentBody(){
    const navigate = useNavigate()
    return <div className="content-body">
        <Header/>
        <HomeSection navigate ={navigate}/>
        <Footer/>
    </div>
}