import React from 'react';
import CalendarView from '../components/CalendarView';
import Header from '../components/Header';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <h1>Schedule Your Social Media Posts</h1>
            <CalendarView />
        </div>
    );
};

export default HomePage;