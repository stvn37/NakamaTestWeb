import Image from "next/image";
import MenuNoteComponent from "../../MenuNote";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useRouter } from "next/router";

export default function ItemComponent({ orderItem }) {
    const router = useRouter();
    async function incrementOrderItem() {
        await axios
            .post("/api/incrementorderitem", { orderItemId: orderItem.id })
            .then(() => router.replace(`/cart/${router.query.id}`, undefined, {scroll: false}))
            .catch((error) => console.log(error));
    }

    async function decrementOrderItem() {
        await axios
            .post("/api/decrementorderitem", { orderItemId: orderItem.id })
            .then(() => router.replace(`/cart/${router.query.id}`, undefined, {scroll: false}))
            .catch((error) => console.log(error));
    }

    return (
        <div className="d-flex flex-wrap gap-4 mb-5">
            <Image src={orderItem.menu.image} width={250} height={200} />
            <div>
                <h4>{orderItem.menu.title}</h4>
                <p>{orderItem.menu.caption}</p>
                <MenuNoteComponent item={orderItem.menu} />
                <p style={{ fontWeight: "bold" }}>RM {orderItem.menu.price}</p>
                <div className="d-flex gap-4 align-items-center">
                    <Button onClick={decrementOrderItem}>-</Button>
                    <p className="mb-0">{orderItem.quantity}</p>
                    <Button onClick={incrementOrderItem}>+</Button>
                </div>
            </div>
        </div>
    );
}
