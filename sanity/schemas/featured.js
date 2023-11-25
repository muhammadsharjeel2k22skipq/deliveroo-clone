import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Featured Category name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    }),
   defineField({
    name: 'restaurnants',
    type: 'array',
    title: 'Restaurnants',
    of: [{ type: 'reference', to: [{ type: 'restaurnant' }] }]
   })
    
  ]
})
