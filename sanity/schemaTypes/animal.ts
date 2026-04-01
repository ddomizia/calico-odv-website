import {defineField, defineType} from 'sanity'

export const animal = defineType({
  name: 'animal',
  title: 'Animali',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'species',
      title: 'Specie',
      type: 'string',
      options: {
        list: [
          {title: 'Gatto', value: 'cat'},
          {title: 'Cane', value: 'dog'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
  name: 'sex',
  title: 'Sesso',
  type: 'string',
  options: {
    list: [
      {title: 'Maschio', value: 'male'},
      {title: 'Femmina', value: 'female'},
    ],
    layout: 'radio',
  },
}),
    defineField({
  name: 'ageValue',
  title: 'Età (numero)',
  type: 'number',
  validation: (Rule) => Rule.min(0),
}),

defineField({
  name: 'ageUnit',
  title: 'Unità età',
  type: 'string',
  options: {
    list: [
      { title: 'Mesi', value: 'months' },
      { title: 'Anni', value: 'years' },
    ],
    layout: 'radio',
  },
}),
    defineField({
  name: 'hostLocation',
  title: 'Ospitato presso',
  type: 'string',
}),
    defineField({
      name: 'featured',
      title: 'In evidenza',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'image',
      title: 'Immagine',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'description',
      title: 'Descrizione breve',
      type: 'text',
    }),

    defineField({
      name: 'fivStatus',
      title: 'FIV',
      type: 'string',
      hidden: ({document}) => document?.species !== 'cat',
      options: {
        list: [
          {title: 'Negativo', value: 'negative'},
          {title: 'Positivo', value: 'positive'},
          {title: 'Non testato', value: 'not_tested'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'felvStatus',
      title: 'FeLV',
      type: 'string',
      hidden: ({document}) => document?.species !== 'cat',
      options: {
        list: [
          {title: 'Negativo', value: 'negative'},
          {title: 'Positivo', value: 'positive'},
          {title: 'Non testato', value: 'not_tested'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'specialConditions',
      title: 'Condizioni particolari',
      type: 'array',
      hidden: ({document}) => document?.species !== 'cat',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Cieco', value: 'cieco'},
          {title: 'Ipovedente', value: 'ipovedente'},
          {title: 'Sordo', value: 'sordo'},
          {title: 'Tripode', value: 'tripode'},
          {title: 'Diabetico', value: 'diabetico'},
          {title: 'Insufficienza renale', value: 'insufficienza_renale'},
          {title: 'Terapia in corso', value: 'terapia_in_corso'},
          {title: 'Dieta specifica', value: 'dieta_specifica'},
          {title: 'Stomatite', value: 'stomatite'},
          {title: 'Atassico', value: 'atassico'},
          {title: 'Parzialmente paralizzato', value: 'paralisi_parziale'},
        ],
      },
    }),
    defineField({
      name: 'healthNotes',
      title: 'Note sanitarie aggiuntive',
      type: 'text',
      rows: 4,
      hidden: ({document}) => document?.species !== 'cat',
    }),
  ],
})