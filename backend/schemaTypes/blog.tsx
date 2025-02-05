import { defineField, defineType } from 'sanity';

export const blog = defineType({
  name: 'blogs',
  title: 'Blogs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      name: 'blogDescription',
      type: 'array',
      title: 'Blog Description',
      of: [{ type: 'block' }],
    }),
  ],
});
