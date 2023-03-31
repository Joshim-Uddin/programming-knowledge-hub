import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    console.log(props.blog)
    const {imageUrl, author,authorImage, requiredTime, publishDate, blogTitle} = props.blog
    return (
        <div>
            <img src={imageUrl} alt="" />
            <img src={authorImage} alt="" />
            <h4>{author}</h4>
            <p>{publishDate}</p>
            <p>{requiredTime} min read  <FontAwesomeIcon icon={faBookmark} /></p>
            <h2>{blogTitle}</h2>
            <p>#Beginners #Programming</p>
            <a href="#">Mark as read</a>

        </div>
    );
};

export default Blog;