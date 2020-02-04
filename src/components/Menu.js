import React from 'react';

const data = [
    {
        itemName: "Sobre mí",
        href: "#aboutMe",
    },
    {
        itemName: "Proyectos",
        href: "#projects",
    },
    {
        itemName: "Contacto",
        href: "#contact",
    },
];

const Menu = props => {
    return (
        <section>
            <button className={props.isClose ? "Menu" : "Menu__close"}
                onClick={props.handleToggle}
                title="menu"
                type="button"
            />
            <nav>
                <ul>
                    {
                        data.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.href}>{item.itemName}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>       
        </section>
    )
}


export default Menu;