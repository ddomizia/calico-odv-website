import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonianza',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Ruolo / descrizione breve',
      type: 'string',
      description: 'Esempio: Adottante, Volontaria, Famiglia di Mia',
    }),
    defineField({
      name: 'relatedAnimalName',
      title: 'Nome animale collegato',
      type: 'string',
      description: 'Facoltativo',
    }),
    defineField({
      name: 'quote',
      title: 'Messaggio',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isPublished',
      title: 'Pubblicata',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'orderRank',
      title: 'Ordine',
      type: 'number',
      description: 'Più basso = più in alto',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'quote',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Testimonianza',
        subtitle: subtitle,
      }
    },
  },
})