import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css";
import { faLinkedin, faSquareWhatsapp, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import greyCircleContact from "../../../Images/grey-circle-contact.png"
import blueCircleContact from "../../../Images/blue-circle-contact.png"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export function Contact(): JSX.Element {

    const form = useRef<HTMLFormElement | null>(null);
    const [messageSent, setMessageSent] = useState(false);

    const openWhatsApp = () => {
        const phoneNumber = "972555577521"
        window.open(`https://wa.me/${phoneNumber}`, '_blank')
    };

    const openEmail = () => {
        window.location.href = "mailto:tsuri.he@gmail.com";
    };

    const openLinkedIn = () => {
        window.open("https://www.linkedin.com/in/your-profile", '_blank');
    };


    const sendEmail = (e: any) => {

        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_uahain2', 'template_fgel099', form.current, {
                publicKey: 'dYvdSl7feRghjrcZz',
            })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        setMessageSent(true);
                        setTimeout(() => setMessageSent(false), 3000);
                        form.current?.reset()
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }

    }


    return (
        <div className="Contact">

            <h2 className="contact_title">contact</h2>

            <div className="communication-hub">

                <form ref={form} action="" onSubmit={sendEmail}>
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="number" placeholder="Phone Number" name="phone_number" />
                    <textarea placeholder="Message" name="message"></textarea>
                    <input className="send-btn" type="submit" value="send" />
                </form>

                <p className="or-word">or</p>

                <div className="social-icons-container">

                    <div className="whatsapp-container" onClick={openWhatsApp} style={{ cursor: 'pointer' }}>
                        <p> 055 557 7521</p>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </div>

                    <div className="email-container" onClick={openEmail} style={{ cursor: 'pointer' }}>
                        <p>tsuri.he@gmail.com</p>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>

                    <div className="linkedin-container">
                        <FontAwesomeIcon icon={faLinkedin} onClick={openLinkedIn} style={{ cursor: 'pointer' }} />
                        <img src={blueCircleContact} alt="" className="desktop-blue-circle" />
                    </div>

                </div>

            </div>

            <img src={greyCircleContact} alt="" className="desktop-grey-circle" />
                

        </div>
    );
}
