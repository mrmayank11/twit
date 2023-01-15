import { sanityClient } from "../../sanity"
import { groq } from "next-sanity"

const feedQuery = groq`
*[_type == "comment"]{
    _id,
      "profileImage": mainImage.asset->url,
      ...
  }
`


export default async function handler(req, res) {
  const comments = await sanityClient.fetch(feedQuery)
  res.status(200).json(comments)
}