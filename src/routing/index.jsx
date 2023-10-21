import { Route, Routes } from "react-router"
import Contacts, { SingleContact } from "../components/Contacts"
import ToDo from "../components/ToDo"
import SocialNetwork from "../components/SocialNetwork"
import Home from "../pages/Home"
import About from "../pages/About"
import NotFound from "../pages/NotFound"

const WebRouting = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} >
                    <Route path='test' element={<div>outlet inside contacts</div>} />
                </Route>
                <Route path="/contacts/:id" element={<SingleContact />} />
                <Route path='/todo' element={<ToDo />} />
                <Route path='/social' element={<SocialNetwork />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}
export default WebRouting
