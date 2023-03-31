import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = ({blog, handleBookmark}) => {
    // console.log(blog)
    const {id, imageUrl, author,authorImage, requiredTime, publishDate, blogTitle} = blog
    return (
        <div className='blog'>
            <img className='blog-image' src={imageUrl} alt="" />
            <div className='blog-body'>
            <div className='blog-author'>
            <img className='author-image' src={authorImage} alt="" />
            <div>
            <h4>{author}</h4>
            <p>{publishDate}</p>
            </div>
            </div>
            <p className='color-grey'>{requiredTime} min read <span onClick={()=>handleBookmark(blog)}><FontAwesomeIcon icon={faBookmark} /></span></p>
            </div>
            <h2 className='blog-title'>{blogTitle}</h2>
            <p className='color-grey'>#Beginners #Programming</p>
            <a href="#">Mark as read</a>

        </div>
    );
};

export default Blog;