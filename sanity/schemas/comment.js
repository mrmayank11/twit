import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'string',
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
      name: 'tweet',
      title: 'Tweet',
      type: 'reference',
      description: 'Reference the tweet , the post is associated with',
      to: {
        type: 'tweet'
      }
    }),

  ],

})
