import React from 'react';

import './post.styles.css';

export const CardPost = props => {
    console.log(props)
    return(
        <div className='post-container'>
            <img alt="articles" src={`https://picsum.photos/id/${props.post.id}/400/200`}/>
            <h3> {props.post.title} </h3>
            <p>{props.post.body}</p>
        </div>
    )
}