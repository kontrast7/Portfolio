import React from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';

export const Sidebar = () => {

        return (
            <div className="sidebar">
                <h1><Link smooth to="/#start" className="h1_links">Maksim Mashko</Link></h1>
                <p style={{color:'black',fontWeight:'bold'}} className="gmail"> maks.mashko@gmail.com </p>
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">About</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#skills" className="links">My skills</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#works" className="links" >My project</Link></li>
                </ul>

                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"> <a href="https://github.com/kontrast7" rel="opener noreferrer" target="_blank" className="fa fas fa-github fa-lg"/></li>
                        <li className="sidebar-nav-icons"> <a href="mailto:maks.mashko@gmail.com" rel="opener noreferrer" target="_blank" className="fa fas fa-envelope fa-lg"/></li>
                    </ul>
                </div>

            </div>
        )
}

