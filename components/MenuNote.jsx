import { ListGroup, ListGroupItem } from "react-bootstrap";
import {
    faThumbsUp,
    faPepperHot,
    faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuNoteComponent({ item }) {
    return (
        <ListGroup className="list-group-flush">
            <ListGroupItem>
                {item.recommend && (
                    <FontAwesomeIcon
                        style={{
                            color: "#352E1D",
                        }}
                        className="me-2"
                        size="2x"
                        icon={faThumbsUp}
                    />
                )}
                {item.spicy && (
                    <FontAwesomeIcon
                        style={{ color: "red" }}
                        className="me-2"
                        size="2x"
                        icon={faPepperHot}
                    />
                )}
                {item.vege && (
                    <FontAwesomeIcon
                        style={{
                            color: "green",
                        }}
                        className="me-2"
                        size="2x"
                        icon={faLeaf}
                    />
                )}
            </ListGroupItem>
        </ListGroup>
    );
}
