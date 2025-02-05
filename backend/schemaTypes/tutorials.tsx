import { defineField, defineType } from 'sanity'

export const tutorials = defineType({
  name: 'tutorials',
  title: 'Tutorials',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'views',
      type: 'string',
      title: 'views'
    }),
    defineField({
      name: 'comments',
      type: 'number',
      title: 'comments',
    }),
    defineField({
        name: 'image',
        type: 'image',
        title: 'image',
        options:{
            hotspot:true,
        }
      }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
