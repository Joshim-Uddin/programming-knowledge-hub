import React from 'react';
import './Sidebar.css'

const Sidebar = ({bookmarkedBlogs}) => {
    // console.log(props)

    return (
        <>
            <h4 className='time-log'>Spent time on read : 22 min</h4>
            <div className='bookmark'>
                <h4>Bookmarked Blogs : {bookmarkedBlogs.length}</h4>
                <p>Master Microsoft powers platform and become an in-Demand!</p>
            </div>
        </>
    );
};

export default Sidebar;