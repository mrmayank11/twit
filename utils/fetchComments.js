import React from 'react'


export const fetchComments = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getComments`)

    const data = await res.json();

    return data
}
