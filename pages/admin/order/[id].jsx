import prisma from "../../../prisma/client";
import MenuNoteComponent from "../../../components/MenuNote";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function AdminDetails({ order }) {
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [grandtotal, setGrandtotal] = useState(0);

    useEffect(() => {
        const subtotalRaw = order.orderItems.reduce(
            (total, item) => total + item.menu.price * item.quantity,
            0
        );
        const discount = order.coupon ? order.coupon.discount : 0;
        setSubtotal(subtotalRaw);
        const beforeTax = Math.max(subtotalRaw - discount, 0);
        setTax((beforeTax * 10) / 100);
        setGrandtotal((beforeTax * 110) / 100);
        console.log(order)
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
                    {order.coupon && <h5>Applied Coupon: {order.coupon.code}</h5>}

                    <h5>Subtotal: RM {subtotal}</h5>
                    {order.coupon && (
                        <h5 className="text-success">
                            Discount: RM {order.coupon.discount}
                        </h5>
                    )}
                    <h5>Tax: RM {tax}</h5>
                    <h4 style={{ fontWeight: "bold" }}>
                        Grand Total: RM {grandtotal}
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
            coupon: true,
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
