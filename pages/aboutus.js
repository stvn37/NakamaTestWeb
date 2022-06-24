import { motion } from "framer-motion"
import Image from 'next/image'
import chefImage from '../img/nakama-chef.png'

export default function aboutus() {
    return (
      

    
    <div>
        <section style={{backgroundColor:'#FFFFFF', minHeight:'700px', padding:'50px'}}>
            <h1 class="entry-title" itemProp="headline" 
            style={{
                textAlign:'center', 
                fontWeight:'bold', 
                fontSize:'34px', 
                padding:'25px'}}>About Nakama 仲間</h1>
            <div className='notoSansJP row' style={{backgroundColor:'#352E1D', minHeight:'550px', margin:'20px'  }}>
            
            <motion.div className='col-12 col-md-5'

                animate={{ y: 20 }}
                transition={{ duration: 2 }}
            >
                <Image src={chefImage}></Image>
            </motion.div>
            <div className='col-12 col-md-7'>
                

                <h2 class="entry-title" style={{color:'#B7A57B', height:'5px', padding:'50px', textAlign:'right', fontWeight:'bold'}}>Our Mission & Vision</h2>

                <ul className='list-unstyled' style={{color:'#B7A57B', margin:'50px', textAlign:'right', fontWeight:'lighter'}}>
                    <li>We aim to set the standards of excellence in Japanese cuisine & service,
                    <br></br>by offering an extensive menu selection at affordable prices & convenient locations.</li>
                    
                </ul>

                <h2 class="entry-title" style={{color:'#B7A57B', height:'5px', padding:'50px', textAlign:'right', fontWeight:'bold'}}>About Us</h2>

                <ul className='list-unstyled' style={{color:'#B7A57B', margin:'50px', textAlign:'right', fontWeight:'lighter'}}>
                <li>Nakama was established in June 2022, where we opened the doors of our first restaurant in Indonesia.
                    <br></br>We serve an extensive variety of Japanese food & beverages
                    <br></br>that includes fresh sashimi, sushi, donburi, noodles, bento boxes and so on.
                    <br></br>We prioritize affordability, quality and freshness with our ingredients,
                    <br></br>and only serve value-for-money products which are primarily air-flown from Japan.</li>
                </ul>
            </div>
            </div>
            
            
            
    
        </section>
    </div>
      
    )
  }