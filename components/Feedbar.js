import React, { useState } from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import QuestionBox from './QuestionBox';
import Posts from './Posts';
import { fetchTweets } from '../utils/fetchTweets';
import toast from 'react-hot-toast'

function Feedbar({ tweets }) {
    // console.log(tweets);
    const [allTweets, setAllTweets] = useState(tweets)
    const refreshTweet = async () => {
        const refreshToast = toast.loading('Refreshing...');
        const tweet = await fetchTweets();
        setAllTweets(tweet)

        toast.success('Feed Updated!', {
            id: refreshToast
        })
    }


    return (
        <div className='col-span-7 lg:col-span-5 '>
            <div className='flex justify-between p-3 '>
                <p className='text-xl font-bold'>Home</p>
                <ArrowPathIcon
                    onClick={refreshTweet}
                    className=' h-8 cursor-pointer hover:text-twitter duration-200 hover:rotate-180' />
            </div>

            <div>
                <QuestionBox setTweets={allTweets} />
            </div>

            <div>

                {
                    tweets.map(tweet => (
                        <Posts key={tweet._id} content={tweet} />
                    ))
                }


            </div>


        </div>
    )
}

export default Feedbar