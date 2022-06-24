import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Button from 'react-bootstrap/Button'
import Slider from '../components/Slider'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    
  <div>


    <Slider />

    <section style={{backgroundColor:'burlywood', height:'700px', padding:'50px'}}>
    <div className="notoSansJP">

    <h1 class="entry-title" itemProp="headline" 
            style={{
                textAlign:'center', 
                fontWeight:'bold', 
                fontSize:'38px', 
                padding:'10px'}}>Our Menu | メニュー</h1>
        
        <div style={{padding:'20px', margin:'25px'}} >



        </div>
        </div>
    </section>

    <section style={{backgroundColor:'black', height:'500px', padding:'50px'}}>
    


    </section>

    <section style={{backgroundColor:'white', height:'800px', padding:'50px'}}>
    

    </section>

  </div>

    

  

  )
}
