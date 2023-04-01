import React from 'react';
import './Sidebar.css'
import Singleblog from '../Singleblog/Singleblog';

const Sidebar = ({bookmarkedBlogs, spentTime}) => {
        
    return (
        <>
            <h4 className='time-log'>Spent time on read : {spentTime} min</h4>
            <div className='bookmark'>
                <h4>Bookmarked Blogs : {bookmarkedBlogs.length}</h4>
                {bookmarkedBlogs.map(bookmarkedBlog => <Singleblog key={bookmarkedBlog.id} bookmarkedBlog={bookmarkedBlog} />)}
            </div>
        </>
    );
};

export default Sidebar;