// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sanityClient } from "../../sanity"
import { groq } from "next-sanity"

const feedQuery = groq`
*[_type == "tweet"]{
  _id,
  "profileImage": mainImage.asset->url,
  "twitImage": tweetImage.asset->url,
    ...
}
`


export default async function handler(req, res) {
  const tweets = await sanityClient.fetch(feedQuery)
  res.status(200).json(tweets)
}
