import { useRouter } from "next/router";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import Slider from '../components/Slider'
import axios from "axios";

export default function order() {
  const router = useRouter();
  const [uniqueid, setUniqueId] = useState("");
  async function newOrder(e) {
    e.preventDefault();
    await axios.post("/api/getorderid", { uniqueid }).then((response) => {
      if (response.data.found) {
        localStorage.setItem("orderid", response.data.id);
        router.push("/menu");
      } else {
        alert("ID Invalid! Please ask Admin!");
      }
    });
    const newOrder = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);
    };
  }

  return (

    
    <section
      style={{ backgroundColor: "white", height: "800px"}}
    >
      <div className="notoSansJP">
      <Slider />
        <h1
          class="entry-title"
          itemProp="headline"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "28px",
            margin:"15px"
          }}
        >
          Welcome to Nakama Japanese Restaurant
        </h1>
        <div
          className="text-center"
          
        >
          Please Enter Order ID to Continue
        </div>

        <Form onSubmit={newOrder}>
          <Form.Group className="mb-3" controlId="formBasicEmail" required>
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
            <Form.Label></Form.Label>
            <Form.Control
              value={uniqueid}
              onChange={(e) => setUniqueId(e.target.value)}
              type="text"
              placeholder="Enter ID"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">
              Start Order
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
}
