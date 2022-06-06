import Image from "next/image";
import backgroundOne from "../img/japan-bg-1.jpg";
import { Accordion } from "react-bootstrap";

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
          <h1 class="entry-title" itemProp="headline">
            Frequently Answered Question
          </h1>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusm proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem 
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
