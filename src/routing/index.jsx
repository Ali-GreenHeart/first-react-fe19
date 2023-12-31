import { Route, Routes } from "react-router"
import { SingleContact } from "../components/Contacts"
import { Suspense, lazy } from "react"
import Loading from "../components/Loading"
import UsersWithRedux from "../pages/UsersWithRedux"
import CounterRTK from "../pages/CounterRTK"
import ToDos from "../pages/ToDos"

// lazy-loading
const Contacts = lazy(() => import("../pages/Contacts"))
const ToDo = lazy(() => import("../components/ToDo"))
const SocialNetwork = lazy(() => import("../components/SocialNetwork"))
const Home = lazy(() => import("../pages/Home"))
const About = lazy(() => import("../pages/About"))
const NotFound = lazy(() => import("../pages/NotFound"))
const UsersWithReducer = lazy(() => import("../pages/UsersWithReducer"))
const AlionFollowers = lazy(() => import("../pages/AlionFollowers"))
const CounterR = lazy(() => import('../pages/CounterR'))
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
                <Route path='/todos' element={<ToDos />} />
                <Route path='/counter-redux' element={<CounterR />} />
                <Route path='/counter-rtk' element={<CounterRTK />} />
                <Route path='/social' element={<SocialNetwork />} />
                <Route path='/users-with-redux' element={<UsersWithRedux />} />
                <Route path='/alion-followers' element={<AlionFollowers />} />
                <Route path='/users-with-reducer' element={<UsersWithReducer />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}
export default WebRouting
