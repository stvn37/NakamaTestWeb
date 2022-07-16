import { getSession } from "next-auth/react";
import { Button, Table, Modal } from "react-bootstrap";
import axios from "axios";
import prisma from "../../../prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function admin({ orders }) {
    const router = useRouter();

    useEffect(() => {
        if(router.query.uniqueid) {
            setShow(true)
        }
    }, [router])

    async function createOrder() {
        await axios
            .post("/api/order")
            .then((response) =>
                router.replace(
                    {
                        pathname: "/admin/order",
                        query: { uniqueid: response.data.uniqueid },
                    },
                    '/admin/order'
                )
            );
    }

    const [show, setShow] = useState(false)

    return (
        <section
            style={{
                backgroundColor: "white",
                padding: "50px",
            }}
        >
            <div className="notoSansJP text-center">

                <div className="text-center mb-3">
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
                        Admin Order
                    </h1>
                    <Button onClick={createOrder} variant="primary" size="lg">
                        Create New Order
                    </Button>{" "}
                </div>

                <Table bordered hover>
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>Order ID</th>
                            <th>Unique ID</th>
                            <th>Order Type</th>
                            <th>Table No</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr onClick={() => router.push(`/admin/order/${order.id}`)} style={{cursor: 'pointer'}}>
                                <td>{order.id}</td>
                                <td>{order.uniqueid}</td>
                                <td>{order.type}</td>
                                <td>{order.tableNo}</td>
                                <td>{order.finish ? "Finished" : "Active"}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            <Modal
                show={show}
                centered
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>New Order Created</Modal.Title>
                </Modal.Header>
                <Modal.Body>Order code is: {router.query.uniqueid}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Okay
                    </Button>
                </Modal.Footer>
            </Modal>
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

    const orders = await prisma.order.findMany({
        orderBy: {
            finish: "asc",
        },
    });

    return {
        props: { orders },
    };
}
