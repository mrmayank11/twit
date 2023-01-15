// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    const data = JSON.parse(req.body);

    const mutations = {
        mutations: [{
            create: {
                _type: 'tweet', text: data.text, username: data.username, Blocktweet: false, profileImage: data.profileImage, twitImage: data.twitImage,
            }
        }
        ]
    }
    const apiEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.ganity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`

    const result = await fetch(apiEndpoint, {
        headers: {
            'content-type': 'application/json',
        },

        body: JSON.stringify(mutations),
        method: "POST"
    })
    const json = await result.json();
    res.status(200).json({ message: 'Added' })
}