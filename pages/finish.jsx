import Image from "next/image";
import React from "react";
import {
    faCircleCheck
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import Link from "next/link";

export default function finish() {
    return (
        <section className="d-flex flex-column gap-4 align-items-center justify-content-center" style={{minHeight: '100vh'}}>
            <FontAwesomeIcon icon={faCircleCheck} size="4x" />
            <h1>Thank you for your visit!</h1>
            <h2>Have a nice day!</h2>

            <h3>We value your feedback.</h3>
            <p className="text-center">Would you like to fill out the feedback form as a a form of your satisfaction with our service?</p>

            <div className="d-flex gap-4">
                <Link href="/"><Button>No, thank you</Button></Link>
                <Link href="/feedback"><Button>Yes, please</Button></Link>
            </div>
        </section>
    )
}