import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar'>
            <h2>Programming Knowledge Hub</h2>
            <div className='nav-link'>
                
                <a href="/Home">Home</a>
                <a href="/React">React</a>
                <a href="/JavaScript">JavaScript</a>
                <img className='profile-img' src="https://us.123rf.com/450wm/lacheev/lacheev2109/lacheev210900016/173818773-portrait-of-happy-clever-intelligent-young-man-in-glasses-looking-at-camera-and-smiling-headshot-of.jpg?ver=6" alt="" />          

            </div>
        </div>
    );
};

export default Header;
