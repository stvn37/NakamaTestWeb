import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import {getSession} from 'next-auth/react'

export default function createMenu() {
    const router = useRouter();
    const [code, setCode] = useState("");
    const [discount, setDiscount] = useState("");

    const [show, setShow] = useState(false);

    async function create(e) {
        e.preventDefault();
        await axios
            .post("/api/createcoupon", {
                code,
                discount,
            })
            .then((response) =>
                router.push({
                    pathname: "/admin/coupon",
                    query: { success: "Coupon Created Successfully" },
                }, '/admin/coupon')
            )
            .catch((error) => {
                setShow(true);
            });
    }

    return (
        <section
            style={{
                backgroundColor: "white",
                minHeight: "100vh",
                padding: "50px",
            }}
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
                    Create Coupon
                </h1>

                <Form onSubmit={create}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Coupon Code</Form.Label>
                        <Form.Control
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Discount</Form.Label>
                        <Form.Control
                            step={0.01}
                            type="number"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <div className="text-center">
                        <Button
                            style={{ backgroundColor: "#352E1D" }}
                            type="submit"
                        >
                            Create
                        </Button>
                    </div>
                </Form>

                <Modal show={show} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Error</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>An unknown error has occured</Modal.Body>

                    <Modal.Footer>
                        <Button
                            onClick={() => setShow(false)}
                            variant="primary"
                        >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </section>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    console.log(session);
    if (!session) {
        return {
            redirect: {
                destination: "/api/auth/signin",
            },
        };
    }
    return {
        props: {}
    }
}
