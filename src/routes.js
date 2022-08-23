import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Home from './Pages/Home/home'
 import ChangeDate from "./Pages/ChangeDate/changeDate";
 import LoginAdmin from './Pages/loginAdmin/LoginAdmin'
import ChangeDateTeste from "./Pages/ChangeDate/changeDateTeste";

 function RoutesApp(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/changedate" element={ <ChangeDate/> } />
                <Route path="/loginadmin" element={ <LoginAdmin/> } />
                <Route path="/testely" element={ <ChangeDateTeste/> } />
            </Routes>
        </BrowserRouter>
    )
 }
 export default RoutesApp;