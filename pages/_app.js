import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "@fontsource/noto-sans-jp"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
 
  
  return ( 
    
    <>
    <NextNProgress 
      color="#352e1d"
      options={{showSpinner:false}}
    />
    <Navbar>

    </Navbar>
    
  <Component {...pageProps} />

  <Footer/>

  </>
  )
}

export default MyApp


