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
    
    
    <Carousel activeIndex={index} onSelect={handleSelect} style={{height:800}}>
      <Carousel.Item style={{width:'100%', height:800}}>
      
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
          <p>Nakamaの<br></br>組み合わせ料理フルバージョン.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{width:'100%', height:800}}>
      
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
          <p>寿司パック</p>
          <p>寿司が大好き！</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{width:'100%', height:800}}>
      
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
          <p>日本料理屋</p>
          <p>おいしい！うまい!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{width:'100%', height:800}}>
      
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
          <p>素晴らしい</p>
          <p>多くの種類の刺身！</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  

        </>
  
    
  
    )
  }