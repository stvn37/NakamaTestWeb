import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import prisma from "../../../prisma/client";

export default function createMenu({ coupon }) {
    const router = useRouter();
    const [code, setCode] = useState(coupon.code);
    const [discount, setDiscount] = useState(coupon.discount);
    const [active, setActive] = useState(coupon.active);

    const [show, setShow] = useState(false);

    async function create(e) {
        e.preventDefault();
        await axios
            .post("/api/updatecoupon", {
                id: coupon.id,
                code,
                discount,
                active,
            })
            .then((response) =>
                router.push({
                    pathname: "/admin/coupon",
                    query: { success: "Coupon Updated Successfully" },
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
                    Update Coupon
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

                    <Form.Check
                        checked={active}
                        onChange={(e) => setActive(e.target.checked)}
                        type="checkbox"
                        label="Active"
                    />

                    <div className="text-center">
                        <Button
                            style={{ backgroundColor: "#352E1D" }}
                            type="submit"
                        >
                            Update
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
    const coupon = await prisma.coupon.findUnique({
        where: {
            id: parseInt(context.params.id)
        },
    })

    return {
        props: { coupon },
    };
}
