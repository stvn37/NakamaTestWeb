import Image from "next/image";
import backgroundOne from "../img/japan-bg-1.jpg";
import { Accordion } from "react-bootstrap";
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function promotion() {
  return (
    <section style={{backgroundColor:'white', height:'800px', padding:'50px'}}>
    <div className="notoSansJP">

    <h1 class="entry-title" itemProp="headline" 
            style={{
                textAlign:'center', 
                fontWeight:'bold', 
                fontSize:'28px', 
                padding:'5px'}}>Available Promotions<br></br>利用可能なプロモーション</h1>






      
    </div>
    </section>
  );
}
