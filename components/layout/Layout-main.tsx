import Navbar from '../Navbar'
import Head from 'next/head'
import Footer from '../Footer'

const Layout: React.FC = ({children}) => {
    return (
        <div className="layout">
            <Head>
                
            </Head>
            <Navbar />
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;