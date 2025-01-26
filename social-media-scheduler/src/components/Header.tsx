import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Social Media Scheduler</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/posts">Posts</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;