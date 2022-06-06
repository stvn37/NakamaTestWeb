import { motion } from "framer-motion"
import Image from 'next/image'
import chefImage from '../img/nakama-chef.png'

export default function aboutus() {
    return (
      

    
    <div>
        <section style={{backgroundColor:'#FFFFFF', minHeight:'700px', padding:'50px'}}>
            <h1 class="entry-title" itemProp="headline" style={{textAlign:'left', fontWeight:'bold'}}>About Nakama 仲間</h1>
            <div className='notoSansJP row' style={{backgroundColor:'#352E1D', minHeight:'550px', margin:'20px'  }}>
            
            <motion.div className='col-12 col-md-5'

                animate={{ rotate: 360 }}
                transition={{ duration: 2 }}
            >
                <Image src={chefImage}></Image>
            </motion.div>
            <div className='col-12 col-md-7'>
                

                <h2 class="entry-title" style={{color:'#B7A57B', height:'5px', padding:'50px', textAlign:'right'}}>Our Mission</h2>

                <ul className='list-unstyled' style={{color:'#B7A57B', margin:'50px', textAlign:'right', fontWeight:'lighter'}}>
                    <li>We aim to set the standards of excellence in Japanese cuisine & service, by offering an</li>
                    <li>extensive menu selection at affordable prices & convenient locations.</li>
                    
                    
                </ul>
            </div>
            </div>
            
            
            
    
        </section>
    </div>
      
    )
  }