import Image from "next/image";
import backgroundOne from "../img/japan-bg-1.jpg";
import { Accordion } from "react-bootstrap";
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function faq() {
  return (
    
    <div>
      <section
        style={{
          backgroundColor: "white",
          height: "700px",
          padding: "50px",
          position: "relative",
        }}
      >
        <div className="notoSansJP">
        
        <h1 class="entry-title" itemProp="headline" 
            
            style={{
                textAlign:'center', 
                fontWeight:'bold', 
                fontSize:'24px', 
                padding:'10px'}}><p> <FontAwesomeIcon style={{color:'#352E1D'}} className='me-2' icon={faCircleInfo} />Frequently Asked Question</p></h1>
                
          <Accordion style={{padding:'15px', margin:'30px'}}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What are the opening hours of this restaurant?</Accordion.Header>
              <Accordion.Body>
              We are open daily from 11am onwards, and on public holidays. 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>What is the minimum order & charges for delivery, and how to make order?</Accordion.Header>
              <Accordion.Body>
              The minimum order & delivery charges would depend on your location from our nearest available branch by distance (km).
              To order for delivery and further inquiries, please call / text / whatsapp our contact at +011234567890.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>How to make reservations and advance orders?</Accordion.Header>
              <Accordion.Body>
              For reservations and advance orders, you may call / text / whatsapp our contact at +011234567890
              as they will be able to assist you further.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>How does the ordering system work on this website as a customer?</Accordion.Header>
              <Accordion.Body>
              Our waiter will give a unique code to the customers at each table
              to be ready to place orders via our website by logging in using the unique code as your account.
              <br></br>When the account is logged in, you can place an order!
              <br></br>Easy isn't it?
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
