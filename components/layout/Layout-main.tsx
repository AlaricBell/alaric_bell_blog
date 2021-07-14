import Navbar from '../Navbar'
import Head from 'next/head'
import Footer from '../Footer'

const Layout: React.FC = ({children}) => {
    return (
        <div className="layout">
            <Head>
                
            </Head>
            <Navbar />
            <div className="container-fluid p-0">{children}</div>
            <Footer/>
        </div>
    )
}

export default Layout;