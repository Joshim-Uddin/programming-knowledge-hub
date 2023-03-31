import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    }, [])

    const [bookmarks, setBookmarks] = useState([]) 
    const handleBookmark=(blog)=>{
        const newBookmarks = [...bookmarks, blog]
        setBookmarks(newBookmarks)

    }
    return (
        <main className='main'>
            <div className="blogs">
            {
                blogs.map(blog=> <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} />)
            }
            </div>
            <section>
                <Sidebar bookmarkedBlogs={bookmarks} />
            </section>
        </main>
    );
};

export default Blogs;