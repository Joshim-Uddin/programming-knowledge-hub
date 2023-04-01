import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';
import { toast } from 'react-hot-toast';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    //useEffect for data fetching
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    }, [])

    //using state for tracking bookmark's changes
    const [bookmarks, setBookmarks] = useState([]) 
    //function for handle bookmark
    const handleBookmark=(blog)=>{
        //checking wheather the blog is in the bookmarks or not
        const existBookmarks = bookmarks.find(bookmark=>bookmark.id ==blog.id);
        if(existBookmarks){
            toast.error("Already Bookmarked", {
                position: 'top-center'
            })
            const newBookmarks = [...bookmarks]
            setBookmarks(newBookmarks)
        }else{
            const newBookmarks = [...bookmarks, blog]
            setBookmarks(newBookmarks)
        } 
    }
    //using state for tracking spent time changes
    const [spentTime, setSpentTime] = useState(0);
    const handleSpentTime =(blog)=>{
        const newSpentTime = spentTime + Number(blog.requiredTime);
        setSpentTime(newSpentTime)
    }

    return (
        <div className='main'>
            <div className="blogs">
            {
                blogs.map(blog=> <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} handleSpentTime={handleSpentTime} />)
            }
            </div>
            <div className='sidebar'>
                <Sidebar bookmarkedBlogs={bookmarks} spentTime={spentTime}  />
            </div>
        </div>
    );
};

export default Blogs;