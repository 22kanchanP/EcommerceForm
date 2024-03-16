import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "./Contact"
import About from "./About"
import Home from "./Home"
import Header from "./Header"
import Service from "./Service"
// import GetApi from "./GetApi"



function Routing()
{
    return(
        <div>
            <BrowserRouter>
            <Header></Header>
            
           

            <Routes>
                <Route path = "/" element = {<Home></Home>}></Route>
                <Route path = "about" element = {<About></About>}></Route>
                <Route path = "contact" element = {<Contact></Contact>}></Route>
                <Route path = "service" element = {<Service></Service>}></Route>
                {/* <Route path="getApi" element={<GetApi></GetApi>}></Route> */}


            </Routes>

            </BrowserRouter>

            
            
        </div>
    )
}

export default Routing