import Footer from "../Footer"
import Header from "../Header"

const PageContainer = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
export default PageContainer
