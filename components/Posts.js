import React, { useState, useEffect } from 'react'
import TimeAgo from 'react-timeago'
import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, BookmarkIcon } from '@heroicons/react/24/outline'
import { fetchComments } from '../utils/fetchComments';
import Comments from './Comments';


function Posts({ content }) {
    const [comments, setComments] = useState([]);
    const refreshComments = async () => {
        const comments = await fetchComments();
        setComments(comments)
    }
    let noCom = comments.length
    useEffect(() => { refreshComments() }, [])

    return (
        <div className='p-2 border-y '>
            <div className="flex alig">
                <img src={content.profileImage} className=" h-12 rounded-full m-2"></img>

                <div>
                    <div className="flex items-center space-x-2">
                        <p className=' text-lg font-bold'>@{content.username}</p>
                        <TimeAgo date={content._createdAt} className=' text-gray-400' />
                    </div>
                    <p>{content.text}</p>
                    <div className="flex justify-center bg-slate-800 my-4 mr-5">
                        <img src={content.twitImage} ></img>
                    </div>

                </div>

            </div>
            <div className=" mx-9 flex justify-between">
                <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
                    <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" /> <p>{noCom}</p>
                </div>
                <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
                    <HeartIcon className="h-5 w-5" />
                    <p>5</p>
                </div>
                <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
                    < BookmarkIcon className="h-5 w-5" />
                    <p>Save</p>

                </div>
            </div >
            {comments.length > 0 && (
                <div className='mt-4 mx-12'>
                    {comments.map(comment => (
                        <Comments key={comment._id} content={comment} />
                    )
                    )}
                </div>

            )}

        </div >
    )
}

export default Posts