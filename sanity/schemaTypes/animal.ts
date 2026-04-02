import { defineField, defineType } from 'sanity'

const catBreeds = [
  { title: 'Europeo', value: 'european' },
  { title: 'Soriano / Tabby', value: 'tabby' },
  { title: 'Persiano', value: 'persian' },
  { title: 'Maine Coon', value: 'maine_coon' },
  { title: 'Siamese', value: 'siamese' },
  { title: 'Ragdoll', value: 'ragdoll' },
  { title: 'British Shorthair', value: 'british_shorthair' },
  { title: 'British Longhair', value: 'british_longhair' },
  { title: 'Norvegese delle Foreste', value: 'norwegian_forest' },
  { title: 'Siberiano', value: 'siberian' },
  { title: 'Bengala', value: 'bengal' },
  { title: 'Sacro di Birmania', value: 'birman' },
  { title: 'Blu di Russia', value: 'russian_blue' },
  { title: 'Sphynx', value: 'sphynx' },
  { title: 'Abissino', value: 'abyssinian' },
  { title: 'Somalo', value: 'somali' },
  { title: 'Orientale', value: 'oriental' },
  { title: 'Devon Rex', value: 'devon_rex' },
  { title: 'Cornish Rex', value: 'cornish_rex' },
  { title: 'Exotic Shorthair', value: 'exotic_shorthair' },
  { title: 'Scottish Fold', value: 'scottish_fold' },
  { title: 'Scottish Straight', value: 'scottish_straight' },
  { title: 'American Shorthair', value: 'american_shorthair' },
  { title: 'American Curl', value: 'american_curl' },
  { title: 'Turco Van', value: 'turkish_van' },
  { title: 'Angora Turco', value: 'turkish_angora' },
  { title: 'Egyptian Mau', value: 'egyptian_mau' },
  { title: 'Ocicat', value: 'ocicat' },
  { title: 'Chartreux', value: 'chartreux' },
  { title: 'Burmese', value: 'burmese' },
  { title: 'Burmilla', value: 'burmilla' },
  { title: 'Tonkinese', value: 'tonkinese' },
  { title: 'Balinese', value: 'balinese' },
  { title: 'Himalayano', value: 'himalayan' },
  { title: 'Selkirk Rex', value: 'selkirk_rex' },
  { title: 'LaPerm', value: 'laperm' },
  { title: 'Snowshoe', value: 'snowshoe' },
  { title: 'Munchkin', value: 'munchkin' },
  { title: 'Savannah', value: 'savannah' },
  { title: 'Toyger', value: 'toyger' },
  { title: 'Singapura', value: 'singapura' },
  { title: 'Nebelung', value: 'nebelung' },
  { title: 'Korat', value: 'korat' },
  { title: 'Pixie-Bob', value: 'pixie_bob' },
  { title: 'Ragamuffin', value: 'ragamuffin' },
  { title: 'Misto / Non definita', value: 'mixed_unknown' },
]

const dogBreeds = [
  { title: 'Meticcio', value: 'mixed' },
  { title: 'Labrador Retriever', value: 'labrador' },
  { title: 'Golden Retriever', value: 'golden' },
  { title: 'Pastore Tedesco', value: 'german_shepherd' },
  { title: 'Border Collie', value: 'border_collie' },
  { title: 'Jack Russell Terrier', value: 'jack_russell' },
  { title: 'Bulldog', value: 'bulldog' },
  { title: 'Beagle', value: 'beagle' },
  { title: 'Barboncino', value: 'poodle' },
  { title: 'Chihuahua', value: 'chihuahua' },
  { title: 'Cocker Spaniel', value: 'cocker' },
  { title: 'Setter', value: 'setter' },
  { title: 'Dalmata', value: 'dalmatian' },
  { title: 'Rottweiler', value: 'rottweiler' },
  { title: 'Dobermann', value: 'dobermann' },
  { title: 'Husky Siberiano', value: 'husky' },
  { title: 'Shih Tzu', value: 'shih_tzu' },
  { title: 'Maltese', value: 'maltese' },
  { title: 'Volpino', value: 'volpino' },
  { title: 'Akita', value: 'akita' },
  { title: 'Cane Corso', value: 'cane_corso' },
  { title: 'Bassotto', value: 'dachshund' },
  { title: 'Carlino', value: 'pug' },
  { title: 'Weimaraner', value: 'weimaraner' },
  { title: 'Alano', value: 'great_dane' },
  { title: 'Pitbull', value: 'pitbull' },
  { title: 'American Staffordshire Terrier', value: 'amstaff' },
  { title: 'Segugio', value: 'segugio' },
  { title: 'Levriero', value: 'greyhound' },
  { title: 'Altro / Non definita', value: 'other' },
]

export const animal = defineType({
  name: 'animal',
  title: 'Animali',
  type: 'document',
  fields: [
    // CAMPI COMUNI
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
          { title: 'Gatto', value: 'cat' },
          { title: 'Cane', value: 'dog' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'empethyUrl',
      title: 'Link Empethy',
      type: 'url',
    }),

    defineField({
      name: 'sex',
      title: 'Sesso',
      type: 'string',
      options: {
        list: [
          { title: 'Maschio', value: 'male' },
          { title: 'Femmina', value: 'female' },
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
      options: { hotspot: true },
    }),

    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
    }),

    // CAMPI GATTO
    defineField({
      name: 'coatLength',
      title: 'Tipo di pelo',
      type: 'string',
      hidden: ({ document }) => document?.species !== 'cat',
      options: {
        list: [
          { title: 'Corto', value: 'short' },
          { title: 'Medio', value: 'medium' },
          { title: 'Lungo', value: 'long' },
        ],
        layout: 'radio',
      },
    }),

    defineField({
      name: 'breed',
      title: 'Razza',
      type: 'string',
      hidden: ({ document }) => document?.species !== 'cat',
      options: {
        list: catBreeds,
      },
    }),

    defineField({
      name: 'isCrossbreed',
      title: 'È un incrocio?',
      type: 'boolean',
      hidden: ({ document }) => document?.species !== 'cat',
      initialValue: false,
    }),

    defineField({
      name: 'crossbreedDetails',
      title: 'Dettaglio incrocio',
      type: 'string',
      hidden: ({ document }) =>
        document?.species !== 'cat' || !document?.isCrossbreed,
      description: 'Esempio: Incrocio Maine Coon / Europeo',
    }),

    defineField({
      name: 'dewormed',
      title: 'Sverminato',
      type: 'boolean',
      hidden: ({ document }) => document?.species !== 'cat',
      initialValue: false,
    }),

    defineField({
      name: 'microchipped',
      title: 'Microchip',
      type: 'boolean',
      hidden: ({ document }) => document?.species !== 'cat',
      initialValue: false,
    }),

    defineField({
      name: 'vaccinated',
      title: 'Vaccinato',
      type: 'boolean',
      hidden: ({ document }) => document?.species !== 'cat',
      initialValue: false,
    }),

    defineField({
      name: 'sterilized',
      title: 'Sterilizzato',
      type: 'boolean',
      hidden: ({ document }) => document?.species !== 'cat',
      initialValue: false,
    }),

    defineField({
      name: 'fivStatus',
      title: 'FIV',
      type: 'string',
      hidden: ({ document }) => document?.species !== 'cat',
      options: {
        list: [
          { title: 'Negativo', value: 'negative' },
          { title: 'Positivo', value: 'positive' },
          { title: 'Non testato', value: 'not_tested' },
        ],
        layout: 'radio',
      },
    }),

    defineField({
      name: 'felvStatus',
      title: 'FeLV',
      type: 'string',
      hidden: ({ document }) => document?.species !== 'cat',
      options: {
        list: [
          { title: 'Negativo', value: 'negative' },
          { title: 'Positivo', value: 'positive' },
          { title: 'Non testato', value: 'not_tested' },
        ],
        layout: 'radio',
      },
    }),

    defineField({
      name: 'specialConditions',
      title: 'Condizioni particolari',
      type: 'array',
      hidden: ({ document }) => document?.species !== 'cat',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Cieco', value: 'cieco' },
          { title: 'Ipovedente', value: 'ipovedente' },
          { title: 'Sordo', value: 'sordo' },
          { title: 'Tripode', value: 'tripode' },
          { title: 'Diabetico', value: 'diabetico' },
          { title: 'Insufficienza renale', value: 'insufficienza_renale' },
          { title: 'Terapia in corso', value: 'terapia_in_corso' },
          { title: 'Dieta specifica', value: 'dieta_specifica' },
          { title: 'Stomatite', value: 'stomatite' },
          { title: 'Atassico', value: 'atassico' },
          { title: 'Paralisi parziale', value: 'paralisi_parziale' },
        ],
      },
    }),

    defineField({
      name: 'healthNotes',
      title: 'Note sanitarie aggiuntive',
      type: 'text',
      rows: 4,
      hidden: ({ document }) => document?.species !== 'cat',
    }),

    // CAMPI CANE
    defineField({
      name: 'dogSize',
      title: 'Taglia',
      type: 'string',
      hidden: ({ document }) => document?.species !== 'dog',
      options: {
        list: [
          { title: 'Piccola', value: 'small' },
          { title: 'Media', value: 'medium' },
          { title: 'Grande', value: 'large' },
        ],
        layout: 'radio',
      },
    }),

    defineField({
      name: 'dogWeight',
      title: 'Peso (kg)',
      type: 'number',
      hidden: ({ document }) => document?.species !== 'dog',
    }),

    defineField({
      name: 'dogCoatLength',
      title: 'Tipo di pelo',
      type: 'string',
      hidden: ({ document }) => document?.species !== 'dog',
      options: {
        list: [
          { title: 'Corto', value: 'short' },
          { title: 'Medio', value: 'medium' },
          { title: 'Lungo', value: 'long' },
        ],
        layout: 'radio',
      },
    }),

    defineField({
      name: 'dogBreed',
      title: 'Razza',
      type: 'string',
      hidden: ({ document }) => document?.species !== 'dog',
      options: {
        list: dogBreeds,
      },
    }),

    defineField({
      name: 'isCrossbreedDog',
      title: 'È un incrocio?',
      type: 'boolean',
      hidden: ({ document }) => document?.species !== 'dog',
      initialValue: false,
    }),

    defineField({
      name: 'crossbreedDogDetails',
      title: 'Dettaglio incrocio',
      type: 'string',
      hidden: ({ document }) =>
        document?.species !== 'dog' || !document?.isCrossbreedDog,
      description: 'Esempio: Incrocio Labrador / Meticcio',
    }),

    defineField({
      name: 'dogDewormed',
      title: 'Sverminato',
      type: 'boolean',
      hidden: ({ document }) => document?.species !== 'dog',
      initialValue: false,
    }),

    defineField({
      name: 'dogMicrochipped',
      title: 'Microchip',
      type: 'boolean',
      hidden: ({ document }) => document?.species !== 'dog',
      initialValue: false,
    }),

    defineField({
      name: 'dogVaccinated',
      title: 'Vaccinato',
      type: 'boolean',
      hidden: ({ document }) => document?.species !== 'dog',
      initialValue: false,
    }),

    defineField({
      name: 'dogSterilized',
      title: 'Sterilizzato',
      type: 'boolean',
      hidden: ({ document }) => document?.species !== 'dog',
      initialValue: false,
    }),
    defineField({
  name: 'adoptionStatus',
  title: 'Stato adozione',
  type: 'string',
  initialValue: 'available',
  options: {
    list: [
      { title: 'Disponibile', value: 'available' },
      { title: 'Adottato', value: 'adopted' },
    ],
    layout: 'radio',
  },
}),
  ],
})