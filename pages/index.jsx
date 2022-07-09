import { useRouter } from "next/router";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import Slider from "../components/Slider";
import axios from "axios";
import {Container} from "react-bootstrap";
import { useEffect } from "react";
import {useLocalStorage} from '@mantine/hooks'

export default function order() {
    const router = useRouter();
    const [orderId, setOrderId] = useLocalStorage({key: 'orderid', defaultValue: 0})

    useEffect(() => {
      if(orderId !== 0) {
        router.replace('/menu')
      } 
    }, [orderId])

    const [uniqueid, setUniqueId] = useState("");
    async function newOrder(e) {
        e.preventDefault();
        await axios.post("/api/getorderid", { uniqueid }).then((response) => {
            if (response.data.found) {
                setOrderId(response.data.id)
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
        <section style={{ backgroundColor: "white", height: "800px" }}>
            <div className="notoSansJP">
                <Slider />
                <h1
                    class="entry-title"
                    itemProp="headline"
                    style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "28px",
                        margin: "15px",
                    }}
                >
                    Welcome to Nakama Japanese Restaurant
                </h1>
                <div className="text-center">
                    Please Enter Order ID to Continue
                </div>

                <Container>
                    <Form onSubmit={newOrder}>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                            required
                        >
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
                </Container>
            </div>
        </section>
    );
}
