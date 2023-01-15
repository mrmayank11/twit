import { React, useState } from 'react'
import { PhotoIcon } from '@heroicons/react/24/outline'
import { fetchTweets } from '../utils/fetchTweets';
import { toast } from 'react-hot-toast';

function QuestionBox({ setTweets }) {
    const [input, setInput] = useState("");
    const [imgBox, setImgBox] = useState(false);
    const [img, setImg] = useState("");
    console.log(img);

    const postTweet = async () => {
        const tweetBody = {
            text: input,
            username: 'Unknown User',
            profileImg: 'https://links.papareact.com/gll',
            twitImage: img,
        }

        const result = await fetch('/api/addTweet', {
            body: JSON.stringify(tweetBody), method: 'POST'
        })
        const json = await result.json();
        const newTweets = await fetchTweets()
        setTweets(newTweets)
        toast('Tweet Posted')
        return json
    }
    const handleSubmit = () => {
        postTweet()
        setInput("")
        setImgBox(false)
        setImg("")
    }


    return (
        <div className='m-4' >
            <div className='mx-10'>
                <form >
                    <input type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Type your question here' className='block m-2 w-96 h-20 outline-none '></input>

                    <PhotoIcon
                        onClick={e => {
                            setImgBox(!imgBox)
                        }}
                        className='h-7 text-twitter m-2 cursor-pointer hover:scale-150 transition-transform duration-100 ease-out' />
                    <button
                        disabled={!input}
                        onClick={handleSubmit}
                        className=' bg-twitter text-white p-2 w-20 rounded-full text-xl disabled:opacity-40'>Ask </button>
                </form>

                {imgBox && (<div>
                    <form className='flex'>
                        <input type="text"
                            value={img}
                            onChange={
                                e => {
                                    setImg(e.target.value)
                                }
                            }

                            placeholder='Enter URL here ' className='block m-2 w-96 outline-none '>

                        </input>
                        <button
                            className=' bg-twitter text-white w-30 rounded-full text-sm disabled:opacity-40 p-3'
                            onClick={e => { setImgBox(false) }}

                        >Add Image </button>
                    </form>
                </div>)}
            </div>
        </div >
    )
}

export default QuestionBox