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
    }, [blogs])
    return (
        <main className='main'>
            <div className="blogs">
            {
                blogs.map(blog=> <Blog key={blog.id} blog={blog} />)
            }
            </div>
            <section>
                <Sidebar />
            </section>
        </main>
    );
};

export default Blogs;