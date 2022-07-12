import { Card, Button } from "react-bootstrap";
import Image from "next/image";
import axios from "axios";
import MenuNoteComponent from "../../MenuNote";
import { faCircleCheck, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import {getCookie} from 'cookies-next'

export default function MenuComponent({ item }) {
    const [status, setStatus] = useState("default");

    async function addItem() {
        console.log(getCookie('orderid'))
        setStatus("loading");
        await axios
            .post("/api/addtocart", { orderId: parseInt(getCookie('orderid')), menuId: item.id })
            .then((response) => setStatus("success"))
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        if (status === "success") {
            setTimeout(() => setStatus("default"), 2000);
        }
    }, [status]);

    return (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 p-3" key={item.id}>
            <Card>
                <Image
                    width={500}
                    height={500}
                    className="my-3 p-3 card-img-top"
                    src={item.image}
                    objectFit="contain"
                />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text style={{ fontStyle: "italic" }}>
                        {item.caption}
                    </Card.Text>
                    <MenuNoteComponent item={item} />
                    <p style={{ fontWeight: "bold" }}>RM {item.price}</p>
                    <Button
                        className="w-100"
                        onClick={addItem}
                        variant={item.available ? "primary" : "danger"}
                        disabled={!item.available}
                    >
                        {status === "success" ? (
                            <FontAwesomeIcon icon={faCircleCheck} />
                        ) : status === "loading" ? (
                            <FontAwesomeIcon icon={faEllipsis} />
                        ) : item.available ? (
                            "Add"
                        ) : (
                            "Sold Out"
                        )}
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}
