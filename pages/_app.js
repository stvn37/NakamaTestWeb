import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "@fontsource/noto-sans-jp"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {
 
  
  return ( 
    
    <>
    <Navbar>

    </Navbar>
  
  <Component {...pageProps} />

  <Footer/>

  </>
  )
}

export default MyApp


