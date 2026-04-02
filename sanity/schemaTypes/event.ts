import { defineField, defineType } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Eventi',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'date',
      title: 'Data',
      type: 'date',
      options: {
        dateFormat: 'DD/MM/YYYY',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'time',
      title: 'Orario',
      type: 'string',
      description: 'Esempio: 10:00 - 18:00',
    }),

    defineField({
      name: 'location',
      title: 'Luogo',
      type: 'string',
      description: 'Esempio: Piazza Matteotti, Nepi',
    }),

    defineField({
      name: 'street',
      title: 'Via / indirizzo',
      type: 'string',
    }),

    defineField({
      name: 'contacts',
      title: 'Contatti per informazioni',
      type: 'string',
      description: 'Telefono, email o entrambi',
    }),

    defineField({
      name: 'poster',
      title: 'Foto locandina',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})