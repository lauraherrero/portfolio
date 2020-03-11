import React from 'react';

const data = [
    {
        itemName: "Sobre mí",
        href: "#aboutMe",
    },
    {
        itemName: "Skills",
        href: "#technicalSkills",
    },
    {
        itemName: "Proyectos",
        href: "#projectList",
    },
    {
        itemName: "Contacto",
        href: "#footer",
    },
];

const Menu = props => {
    return (
        <section>
            <button className={props.isClose ? "Menu btn" : "Menu__close btn"}
                onClick={props.handleToggle}
                title="menu"
                type="button"
            />
            <nav className={props.isClose ? "hide" : "show"}>
                <ul>
                    {
                        data.map((item, index) => {
                            return (
                                <li className="Menu__item" key={index}>
                                    <a className="Menu__item--link" href={item.href}>{item.itemName}</a>
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