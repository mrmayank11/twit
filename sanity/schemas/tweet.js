import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'tweet',
  title: 'tweet',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'text in tweet',
      type: 'string',
    }),
    defineField({
      name: 'Blocktweet',
      title: 'Block Tweet',
      description: 'ADMIN decides as inapprpriate',
      type: 'boolean',
    }),
    defineField({
      name: 'username',
      title: 'username',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
    }),
    defineField({
      name: 'tweetImage',
      title: 'Tweet image',
      type: 'image',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
})
