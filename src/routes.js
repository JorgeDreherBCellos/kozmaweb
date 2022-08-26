import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Home from './Pages/Home/home'
 import PainelAdmin from "./Pages/PainelAdmin/PainelAdmin";
 import LoginAdmin from './Pages/LoginAdmin/LoginAdmin'
 import UpdateDocPrivAcc from './Pages/SearchTable/UpdateDocPrivAcc'
 import UpdatePrivAccount from './Pages/SearchTable/UpdatePrivAccount'
 import SearchUpdate from './Pages/SearchTable/SearchUpdate'
 import RemoveLink from './Pages/SearchTable/RemoveLink'
 import DateUpdate from './Pages/SearchTable/DateUpdate'



 function RoutesApp(){
    return (
        <BrowserRouter>    
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/loginadmin" element={ <LoginAdmin/> } />
                <Route path="/paineladmin" element={ <PainelAdmin/> } />          
                <Route path="/index" element={ <SearchUpdate/> } />
                <Route path="/updatedoc" element={<UpdateDocPrivAcc />} />
                <Route path="/updateprivacc" element={<UpdatePrivAccount />} />
                <Route path="/removelink" element={<RemoveLink />} />
                <Route path="/dateupdate" element={<DateUpdate />} />
            </Routes>
        </BrowserRouter>
    )
 }
 export default RoutesApp;