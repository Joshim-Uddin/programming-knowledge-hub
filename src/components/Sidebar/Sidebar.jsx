import React from 'react';
import './Sidebar.css'

const Sidebar = ({bookmarkedBlogs, spentTime}) => {
    console.log(bookmarkedBlogs)
    
    return (
        <>
            <h4 className='time-log'>Spent time on read : {spentTime} min</h4>
            <div className='bookmark'>
                <h4>Bookmarked Blogs : {bookmarkedBlogs.length}</h4>
                {bookmarkedBlogs.map(bookmarkedBlog => <><p> {bookmarkedBlog.blogTitle}</p></>)}
            </div>
        </>
    );
};

export default Sidebar;