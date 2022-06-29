import { useRouter } from "next/router";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";



export default function order() {
  const router = useRouter();
  const [uniqueid, setUniqueId] = useState("");
  const [userName, setUserName] = useState("");
  async function newOrder(e) {
    e.preventDefault()
    await axios.post('/api/getorderid', {uniqueid}).then(response => {
      if (response.data.found) {
        localStorage.setItem('orderid', response.data.id)
        router.push('/menu')
      }

      else {
        alert('Order not found!')
      }
    })
  }
  return (
    <section
      style={{ backgroundColor: "white", height: "800px", padding: "50px" }}
    >
      <div className="notoSansJP">
        <h1
          class="entry-title"
          itemProp="headline"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "28px",
            padding: "5px",
          }}
        >
          Order Here<br></br>Please enter your unique ID
        </h1>

        <Form
          onSubmit={newOrder}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Unique ID</Form.Label>
            <Form.Control
              value={uniqueid}
              onChange={(e) => setUniqueId(e.target.value)}
              type="text"
              placeholder="Enter ID"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Order Now
          </Button>
        </Form>
      </div>
    </section>
  );
}
