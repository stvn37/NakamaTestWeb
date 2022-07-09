import React, {useState} from 'react'
import { Carousel } from 'react-bootstrap'
import slideOne from '../img/foods-1.jpg'
import slideTwo from '../img/sushi-1.jpg'
import slideThree from '../img/sushi-2.jpg'
import slideFour from '../img/sashimi-1.jpg'
import Image  from 'next/image'

export default function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

    return (
    
        <>
    
    
    <Carousel activeIndex={index} onSelect={handleSelect} style={{height:300}}>
      <Carousel.Item style={{width:'100%', height:300}}>
      
        <Image
          layout='fill'
          objectFit='cover'
          src= {slideOne}
          alt="First slide"
        />
        
        <Carousel.Caption style={{
                textAlign:'center', 
                fontWeight:'bold', 
                fontSize:'32px', 
                padding:'25px'}}>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{width:'100%', height:300}}>
      
        <Image
          layout='fill'
          objectFit='cover'
          src={slideTwo}
          alt="Second slide"
        />

        <Carousel.Caption style={{
                textAlign:'center', 
                fontWeight:'bold', 
                fontSize:'32px', 
                padding:'25px'}}>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{width:'100%', height:300}}>
      
        <Image
          layout='fill'
          objectFit='cover'
          src={slideThree}
          alt="Third slide"
        />

        <Carousel.Caption
        style={{
                textAlign:'center', 
                fontWeight:'bold', 
                fontSize:'32px', 
                padding:'25px'}}>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{width:'100%', height:300}}>
      
        <Image
          layout='fill'
          objectFit='cover'
          src={slideFour}
          alt="Fourth slide"
        />

        <Carousel.Caption style={{
                textAlign:'center', 
                fontWeight:'bold', 
                fontSize:'32px', 
                padding:'25px'}}>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  

        </>
  
    
  
    )
  }