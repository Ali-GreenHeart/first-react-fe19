import { Route, Routes } from "react-router"
import Contacts from "../components/Contacts"
import ToDo from "../components/ToDo"
import SocialNetwork from "../components/SocialNetwork"

const WebRouting = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<div>
                    <h1>Home page</h1>
                </div>} />
                <Route path='/contacts' element={<Contacts />} >
                    <Route path='test' element={<div>outlet inside contacts</div>} />
                </Route>
                <Route path='/todo' element={<ToDo />} />
                <Route path='/social' element={<SocialNetwork />} />
            </Routes>
        </>
    )
}
export default WebRouting
