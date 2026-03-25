import React, { useState, useEffect } from 'react';
import "./css/Nav.css";

function Nav() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const handleScroll = (id) => {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000}}>
            <ul className="nav justify-content-end" style={{ margin: 0, padding: '2px' }}>
                <li className="nav-item">
                    <a
                        className={activeSection === "home" ? "active" : ""}
                        onClick={() => handleScroll("home")}
                    >
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={activeSection === "about" ? "active" : ""}
                        onClick={() => handleScroll("about")}
                    >
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={activeSection === "work" ? "active" : ""}
                        onClick={() => handleScroll("work")}
                    >
                        Work
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={activeSection === "contact" ? "active" : ""}
                        onClick={() => handleScroll("contact")}
                    >
                        ContactMe
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
