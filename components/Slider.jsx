import React, {useState} from 'react'
import { Carousel } from 'react-bootstrap'
import slideOne from '../img/slide-image-one.jpg'
import slideTwo from '../img/slide-image-two.jpg'
import slideThree from '../img/slide-image-three.jpg'
import Image  from 'next/image'

export default function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

    return (
    
        <>
    
    
    <Carousel activeIndex={index} onSelect={handleSelect} style={{height:500}}>
      <Carousel.Item style={{width:'100%', height:500}}>
      
        <Image
          layout='fill'
          objectFit='cover'
          src= {slideOne}
          alt="First slide"
        />
        
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{width:'100%', height:500}}>
      
        <Image
          layout='fill'
          objectFit='cover'
          src={slideTwo}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{width:'100%', height:500}}>
      
        <Image
          layout='fill'
          objectFit='cover'
          src={slideThree}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  

        </>
  
    
  
    )
  }