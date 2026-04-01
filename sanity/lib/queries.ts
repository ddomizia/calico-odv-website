export const featuredAnimalsQuery = `
  *[_type == "animal" && featured == true] | order(_createdAt desc)[0...6] {
    _id,
    name,
    slug,
    species,
    sex,
   ageValue,
ageUnit,
    description,
    image,
    fivStatus,
    felvStatus,
    specialConditions,
    healthNotes
  }
`

export const allAnimalsQuery = `
  *[_type == "animal" && species == "cat"] | order(name asc) {
    _id,
    name,
    slug,
    species,
    sex,
    ageValue,
ageUnit,
    description,
    image,
    fivStatus,
    felvStatus
  }
`

export const animalBySlugQuery = `
  *[_type == "animal" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    species,
    sex,
   ageValue,
ageUnit,
    hostLocation,
    description,
    image,
    fivStatus,
    felvStatus,
    specialConditions,
    healthNotes
  }
`