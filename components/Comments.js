import React from 'react'
import TimeAgo from 'react-timeago'

function Comments({ content }) {
    console.log(content);
    return (
        <div className='p-2 '>
            <div className="flex">
                {(content.profileImage) ? <img src={content?.profileImage} className='h-8 w-8 rounded-full object-cover'></img> : <img src='https://cdn.vectorstock.com/i/preview-1x/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg' className='h-8 w-8 rounded-full object-cover'></img>}
                <div className='mx-3'>
                    <div className="flex items-center space-x-2 ">
                        <p className=' text-medium font-medium'>@{content.username}</p>

                        <TimeAgo date={content._createdAt} className=' text-gray-400  text-sm' />
                    </div>
                    <p>{content.comment}</p>
                </div>
            </div>
        </div >
    )
}

export default Comments