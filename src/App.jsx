import NavBar from "./components/NavBar"
import ContentBody from "./Page/ContentBody"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import PayUpage from "./Page/PayUpage"


function App() {
  const [disableNav, setDisableNav] = useState(sessionStorage.getItem("disableNav") === "true")

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route element={<ContentBody/>} index />
      </Route>
      <Route element={<PayUpage/>} path="/pay"/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
