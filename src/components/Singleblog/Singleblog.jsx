import React from 'react';
import './Singleblog.css'

const Singleblog = ({bookmarkedBlog}) => {
    return (
        <>
            <p> {bookmarkedBlog.blogTitle}</p>
        </>
    );
};


export default Singleblog;