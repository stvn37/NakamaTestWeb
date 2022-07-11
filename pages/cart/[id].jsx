import ItemComponent from "../../components/Page/Cart/Item";
import prisma from "../../prisma/client";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useRouter } from "next/router";
import { useLocalStorage } from "@mantine/hooks";
import { useState } from "react";
import { useEffect } from "react";
import { deleteCookie, getCookie } from "cookies-next";

export default function order({ order }) {
    const router = useRouter();

    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        setSubtotal(
            order.orderItems.reduce(
                (total, item) => total + item.menu.price * item.quantity,
                0
            )
        );
    }, [order]);

    const [show, setShow] = useState(false);

    async function checkout() {
        await axios
            .post("/api/checkout", { orderId: parseInt(getCookie('orderid')) })
            .then(() => {
                deleteCookie('orderid')
                router.push("/");
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
                    <h5>Subtotal: RM {subtotal}</h5>
                    <h5>Tax: RM {(subtotal * 10) / 100}</h5>
                    <h4 style={{ fontWeight: "bold" }}>
                        Grand Total: RM {(subtotal * 110) / 100}
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
                <Modal.Body>Are you sure you want to checkout</Modal.Body>
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
    const {req, res} = context
    const orderid = getCookie('orderid', {req, res})
    if(!orderid) {
        return {
            props: {},
            redirect: {
                destination: '/'
            }
        }
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
