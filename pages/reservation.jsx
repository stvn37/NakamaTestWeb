import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import axios from "axios";

export default function reservation() {
  const [show, setShow] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [persons, setPersons] = useState("");

  async function submitReservation(e) {
    e.preventDefault();
    const response = await axios.post("/api/reservation", {
      firstName,
      lastName,
      email,
      phoneNum,
      dateTime,
      persons,
    });
    if (response.status == 201) {
      setShow(true)
    }
  }

  return (
    <section
      style={{ backgroundColor: "white", minHeight: "100vh", padding: "50px" }}
    >
      <div className="notoSansJP">
        <h1
          class="entry-title"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "36px",
            padding: "5px",
          }}
        >
          Table Reservation<br></br>テーブル予約
        </h1>

        <Form onSubmit={submitReservation}>
          <div className="row">
            <div className="col-6">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </div>
          </div>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date & Time</Form.Label>
            <Form.Control
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>How many person(s)?</Form.Label>
            <Form.Control
              type="number"
              value={persons}
              onChange={(e) => setPersons(e.target.value)}
            />
          </Form.Group>

          <div className="text-center">
            <Button style={{ backgroundColor: "#352E1D" }} type="submit">
              Submit
            </Button>
          </div>
        </Form>

        <Modal show={show} centered>
          <Modal.Header closeButton>
            <Modal.Title>Test</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Reservation Successful</p>
          </Modal.Body>

          <Modal.Footer >
            <Button onClick={() => setShow(false)}  variant="primary">Ok</Button>
            
          </Modal.Footer>
        </Modal>

      </div>
    </section>
  );
}
