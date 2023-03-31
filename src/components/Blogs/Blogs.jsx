import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    }, [blogs])
    return (
        <>
            {
                blogs.map(blog=> <Blog key={blog.id} blog={blog} />)
            }
        </>
    );
};

export default Blogs;