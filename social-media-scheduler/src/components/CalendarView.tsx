import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = () => {
    const [date, setDate] = useState<Date | null>(new Date());
    const [posts, setPosts] = useState<{ date: Date; content: string }[]>([]);

    const handleDateChange = (newDate: Date | Date[] | null) => {
        if (newDate instanceof Date) {
            setDate(newDate);
        }
    };

    const handleAddPost = (content: string) => {
        if (date) {
            setPosts([...posts, { date, content }]);
        }
    };

    const scheduledPosts = posts.filter(post => post.date.toDateString() === date?.toDateString());

    return (
        <div>
            <h2>Schedule Your Social Media Posts</h2>
            <Calendar onChange={handleDateChange} value={date} />
            <div>
                <h3>Scheduled Posts for {date?.toDateString()}</h3>
                <ul>
                    {scheduledPosts.map((post, index) => (
                        <li key={index}>{post.content}</li>
                    ))}
                </ul>
            </div>
            <button onClick={() => handleAddPost('New Post Content')}>Add Post</button>
        </div>
    );
};

export default CalendarView;