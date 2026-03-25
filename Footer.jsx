import React, { useState, useEffect } from 'react';

function Footer() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            color: 'red',
            backgroundColor: '#1c1d20',
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 10px',
            fontSize: '15px',
            borderRadius:'10px'
        }}> 
            <div className='Time' aria-live="polite">
                Current Time: {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </div>
            <nav className='SOCIALS'>
                <ul style={{
                    display: 'flex',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,fontSize:15
                }}>
                    <li style={{ margin: '0 10px' }}>
                        <a href="https://github.com/Sandip-0" target="_blank" rel="noopener noreferrer" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                            GitHub
                        </a>
                    </li>
                    <li style={{ margin: '0 10px' }}>
                        <a href="https://www.geeksforgeeks.org/profile/sandip_adak?tab=activity" target="_blank" rel="noopener noreferrer" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                            GFG
                        </a>
                    </li>
                    <li style={{ margin: '0 10px' }}>
                        <a href="https://www.linkedin.com/in/sandip-adak-70586a2b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                            Linkedin
                        </a>
                    </li>
                    <li style={{ margin: '0 10px' }}>
                        <a href="https://www.facebook.com/sandip.adak.1401?mibextid=kFxxJD" target="_blank" rel="noopener noreferrer" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                            Facebook
                        </a>
                    </li>
                    <li style={{ margin: '0 10px' }}>
                        <a href="https://www.instagram.com/sandip_adak_?utm_source=qr&igsh=N2NjcjA0OXBzdDBv" target="_blank" rel="noopener noreferrer" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                            Instagram
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Footer;
