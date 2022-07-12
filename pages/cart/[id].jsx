import ItemComponent from "../../components/Page/Cart/Item";
import prisma from "../../prisma/client";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { deleteCookie, getCookie } from "cookies-next";

export default function order({ order }) {
    const router = useRouter();

    const [tableNo, setTableNo] = useState(0);
    const [orderType, setOrderType] = useState("DineIn");
    const [couponCode, setCouponCode] = useState("");
    const [couponInvalid, setCouponInvalid] = useState(false);
    const [coupon, setCoupon] = useState(undefined);

    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [grandtotal, setGrandtotal] = useState(0)

    useEffect(() => {
        const subtotalRaw = order.orderItems.reduce(
            (total, item) => total + item.menu.price * item.quantity,
            0
        );
        const discount = coupon ? coupon.discount : 0
        setSubtotal(subtotalRaw);
        const beforeTax = Math.max(subtotalRaw - discount, 0);
        setTax(beforeTax * 10 / 100)
        setGrandtotal(beforeTax * 110 / 100)
    }, [order, coupon]);

    const [show, setShow] = useState(false);

    async function applyCoupon() {
        setCouponInvalid(false);
        await axios
            .post("/api/checkcoupon", {
                couponCode,
            })
            .then((response) => {
                if (response.data.exist) {
                    setCoupon(response.data.coupon);

                } else {
                    setCouponInvalid(true);
                }
            });
    }

    async function checkout() {
        await axios
            .post("/api/checkout", {
                orderId: parseInt(getCookie("orderid")),
                tableNo,
                orderType,
                couponId: coupon ? coupon.id : undefined
            })
            .then(() => {
                deleteCookie("orderid");
                router.push("/finish");
            })
            .catch((error) => console.log(error));
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
                    itemProp="headline"
                    style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "28px",
                        padding: "5px",
                    }}
                >
                    Cart
                </h1>

                {order.orderItems.map((orderItem) => (
                    <ItemComponent orderId={order.id} orderItem={orderItem} />
                ))}

                <div className="bg-light p-4 d-flex flex-column gap-4">
                    <div className="d-flex flex-wrap gap-4">
                        <Button
                            variant={
                                orderType === "DineIn" ? "info" : "outline-info"
                            }
                            onClick={() => setOrderType("DineIn")}
                            className="flex-grow-1"
                        >
                            Dine In
                        </Button>
                        <Button
                            variant={
                                orderType === "TakeAway"
                                    ? "info"
                                    : "outline-info"
                            }
                            onClick={() => setOrderType("TakeAway")}
                            className="flex-grow-1"
                        >
                            Take Away
                        </Button>
                    </div>

                    {orderType === "DineIn" && (
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Table No</Form.Label>
                            <Form.Control
                                value={tableNo}
                                onChange={(e) => setTableNo(e.target.value)}
                                type="number"
                            />
                        </Form.Group>
                    )}

                    {!coupon ? (
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Coupon Code</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    value={couponCode}
                                    onChange={(e) =>
                                        setCouponCode(e.target.value)
                                    }
                                    type="text"
                                    placeholder="XXXXXX"
                                />
                                <Button
                                    onClick={applyCoupon}
                                    variant="outline-secondary"
                                >
                                    Apply
                                </Button>
                            </InputGroup>
                            <Form.Text style={{ color: "red" }}>
                                {couponInvalid && "Invalid Coupon"}
                            </Form.Text>
                        </Form.Group>
                    ) : (
                        <div>
                            <h5>Applied Coupon: {coupon.code}</h5>
                            <Button
                                variant="danger"
                                onClick={() => setCoupon(null)}
                            >
                                Remove
                            </Button>
                        </div>
                    )}

                    <h5>Subtotal: RM {subtotal}</h5>
                    {coupon && (
                        <h5 className="text-success">
                            Discount: RM {coupon.discount}
                        </h5>
                    )}
                    <h5>
                        Tax: RM{" "}
                        {tax}
                    </h5>
                    <h4 style={{ fontWeight: "bold" }}>
                        Grand Total: RM{" "}
                        {grandtotal}
                    </h4>

                    <Button
                        onClick={() => setShow(true)}
                        variant="success"
                        size="lg"
                    >
                        Checkout
                    </Button>
                </div>
            </div>

            <Modal
                show={show}
                centered
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Checkout Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to checkout?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Cancel
                    </Button>
                    <Button onClick={checkout} variant="success">
                        Checkout
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}

export async function getServerSideProps(context) {
    const { req, res } = context;
    const orderid = getCookie("orderid", { req, res });
    if (!orderid) {
        return {
            props: {},
            redirect: {
                destination: "/",
            },
        };
    }

    const order = await prisma.order.findFirst({
        where: {
            id: parseInt(context.params.id),
            finish: false,
        },
        include: {
            orderItems: {
                include: {
                    menu: true,
                },
            },
        },
    });

    if (!order) {
        return {
            redirect: {
                destination: "/",
            },
        };
    }

    return {
        props: { order },
    };
}
