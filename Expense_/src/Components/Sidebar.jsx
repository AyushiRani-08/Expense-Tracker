import React from 'react'
import { assests } from '../assets/assests'
import './Sidebar.css'
import woman from './woman.png'
import settings from './setting.png'
import about from './information-button.png'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <div className="menu-icon">
                    <img src={assests.menu} alt="" />
                </div>
                <div className="menu-comp">
                    <div className="expenses">
                        <img src={assests.expenses} alt="" />
                        <p>All expenses</p>
                    </div>
                    <div className="goal">
                        <img src={assests.goal} alt="" />
                        <p>Goals</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-icon">
                    <img src={settings} alt="" />
                    <p>Settings</p>
                </div>
                <div className="bottom-icon">
                    <img src={woman} alt="" />
                    <p>Profile</p>
                </div>
                <div className="bottom-icon">
                    <img src={about} alt="" />
                    <p>About</p>
                </div>


            </div>
        </div>
    )
}

export default Sidebar