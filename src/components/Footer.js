import React from 'react';
import contacts from '../data/contacts';
import menu from '../data/menu';

const Footer = () => {
    return (
        <section className="contact__wrapper">
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
            <nav>
                <ul>
                    {
                        menu.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.href}>{item.itemName}</a>
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