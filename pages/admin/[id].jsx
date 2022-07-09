import prisma from "../../prisma/client";
import MenuNoteComponent from "../../components/MenuNote";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function AdminDetails({ order }) {
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        setSubtotal(
            order.orderItems.reduce(
                (total, item) => total + item.menu.price * item.quantity,
                0
            )
        );
    }, [order]);

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
                    Order Items
                </h1>

                {order.orderItems.map((orderItem) => (
                    <div className="d-flex flex-wrap gap-4 mb-5">
                        <Image src={orderItem.image} width={250} height={200} />
                        <div>
                            <h4>{orderItem.title}</h4>
                            <p>{orderItem.caption}</p>
                            <MenuNoteComponent item={orderItem} />
                            <p style={{ fontWeight: "bold" }}>
                                RM {orderItem.price}
                            </p>
                            <p className="mb-0">
                                quantity: {orderItem.quantity}
                            </p>
                        </div>
                    </div>
                ))}

                <div className="bg-light p-4 d-flex flex-column gap-4">
                    <h5>Subtotal: RM {subtotal}</h5>
                    <h5>Tax: RM {(subtotal * 10) / 100}</h5>
                    <h4 style={{ fontWeight: "bold" }}>
                        Grand Total: RM {(subtotal * 110) / 100}
                    </h4>
                </div>
            </div>
        </section>
    );
}

export async function getServerSideProps(context) {
    const order = await prisma.order.findFirst({
        where: {
            id: parseInt(context.params.id),
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
                destination: "/admin",
            },
        };
    }

    return {
        props: { order },
    };
}
