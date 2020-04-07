import React from 'react';
import { CardPost } from '../post/post.component';

import './posts-list.styles.css';

export const PostsList = props => {
    console.log(props)
    return(
        <div className='posts-lists'>
            {props.posts.map(post => {
                if(post.userId === 1)  {
                    return <CardPost key={post.id} post={post} />
                }
                return false;
            }
            )}
        </div>
    )
};