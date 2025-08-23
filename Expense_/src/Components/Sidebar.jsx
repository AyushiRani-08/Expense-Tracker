import React, { useState } from 'react'
import { assests } from '../assets/assests'
import './Sidebar.css'
import about from './information-button.png'
import About from './About'

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            <div className="sec">
                {/* Menu button */}
                <div
                    className="menu-icon"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <img src={assests.menu} alt="menu" />
                </div>

                {/* Sidebar */}
                <div className={`sidebar ${showSidebar ? "active" : ""}`}>
                    <div className="about-sec">
                        <div className="bottom-icon" onClick={() => setOpen(true)}>
                            <img src={about} alt="about" />
                            <p>About</p>
                        </div>
                    </div>
                </div>

                {/* About modal */}
                <About open={open} setClose={() => setOpen(false)} />
            </div>
        </>
    );
};

export default Sidebar;
