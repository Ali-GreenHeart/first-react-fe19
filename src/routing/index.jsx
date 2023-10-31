import { Route, Routes } from "react-router"
import { SingleContact } from "../components/Contacts"
import { Suspense, lazy } from "react"
import Loading from "../components/Loading"

// lazy-loading
const Contacts = lazy(() => import("../components/Contacts"))
const ToDo = lazy(() => import("../components/ToDo"))
const SocialNetwork = lazy(() => import("../components/SocialNetwork"))
const Home = lazy(() => import("../pages/Home"))
const About = lazy(() => import("../pages/About"))
const NotFound = lazy(() => import("../pages/NotFound"))
const UsersWithReducer = lazy(() => import("../pages/UsersWithReducer"))

const WebRouting = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} >
                    <Route path='test' element={<div>outlet inside contacts</div>} />
                </Route>
                <Route path="/contacts/:id" element={<SingleContact />} />
                <Route path='/todo' element={<ToDo />} />
                <Route path='/social' element={<SocialNetwork />} />
                <Route path='/users-with-reducer' element={<UsersWithReducer />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}
export default WebRouting
