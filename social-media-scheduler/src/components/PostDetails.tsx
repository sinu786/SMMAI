import React from 'react';

interface PostDetailsProps {
    title: string;
    content: string;
    scheduledTime: string;
    mediaUrl?: string;
}

const PostDetails: React.FC<PostDetailsProps> = ({ title, content, scheduledTime, mediaUrl }) => {
    return (
        <div className="post-details">
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Scheduled Time: {scheduledTime}</p>
            {mediaUrl && <img src={mediaUrl} alt="Post media" />}
        </div>
    );
};

export default PostDetails;