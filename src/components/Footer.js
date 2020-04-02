import React from 'react';
import contacts from '../data/contacts';

const Footer = () => {
    return (
        <section className="contact__wrapper" id="footer">
            <h2 className="contact__wrapper--title">Contacto</h2>
            <nav>
                <ul className="contact__wrapper--link">
                    {
                        contacts.map((item) => {
                            return (
                                <li key={item.id}>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" >
                                        <i className={item.icon}></i>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <small className="contact__wrapper--copy">Laura Herrero © 2020</small>
        </section>
    )
}

export default Footer;