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