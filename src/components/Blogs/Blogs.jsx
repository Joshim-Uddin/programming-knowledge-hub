import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';
import { toast } from 'react-hot-toast';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    }, [])

    const [bookmarks, setBookmarks] = useState([]) 
    const handleBookmark=(blog)=>{
        const existBookmarks = bookmarks.find(bookmark=>bookmark.id ==blog.id);
        console.log(existBookmarks)
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