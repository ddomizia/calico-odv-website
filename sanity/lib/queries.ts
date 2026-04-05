// 🔥 ANIMALI IN EVIDENZA (HOME)
export const featuredAnimalsQuery = `
  *[_type == "animal" && featured == true] | order(_createdAt desc)[0...6] {
    _id,
    name,
    slug,
    species,
    sex,
    birthMonth,
    birthYear,
    description,
    image,

    // GATTI
    coatLength,
    breed,
    isCrossbreed,
    crossbreedDetails,
    dewormed,
    microchipped,
    vaccinated,
    sterilized,
    fivStatus,
    felvStatus,
    specialConditions,
    healthNotes,

    // CANI
    dogSize,
    dogWeight,
    dogCoatLength,
    dogBreed,
    isCrossbreedDog,
    crossbreedDogDetails,
    dogDewormed,
    dogMicrochipped,
    dogVaccinated,
    dogSterilized
  }
`

// 🐱 TUTTI I GATTI
export const allAnimalsQuery = `
  *[_type == "animal" && species == "cat"] | order(name asc) {
    _id,
    name,
    slug,
    species,
    sex,
    birthMonth,
    birthYear,
    description,
    image,

    coatLength,
    breed,
    isCrossbreed,
    crossbreedDetails,
    dewormed,
    microchipped,
    vaccinated,
    sterilized,
    fivStatus,
    felvStatus
  }
`

// 🐶 TUTTI I CANI
export const allDogsQuery = `
  *[_type == "animal" && species == "dog"] | order(name asc) {
    _id,
    name,
    slug,
    species,
    sex,
    birthMonth,
    birthYear,
    description,
    image,

    dogSize,
    dogWeight,
    dogCoatLength,
    dogBreed,
    isCrossbreedDog,
    crossbreedDogDetails,
    dogDewormed,
    dogMicrochipped,
    dogVaccinated,
    dogSterilized
  }
`

// 🔎 SINGOLO ANIMALE (SLUG)
export const animalBySlugQuery = `
  *[_type == "animal" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    species,
    sex,
    birthMonth,
    birthYear,
    hostLocation,
    description,
    image,
    empethyUrl,

    // GATTI
    coatLength,
    breed,
    isCrossbreed,
    crossbreedDetails,
    dewormed,
    microchipped,
    vaccinated,
    sterilized,
    fivStatus,
    felvStatus,
    specialConditions,
    healthNotes,

    // CANI
    dogSize,
    dogWeight,
    dogCoatLength,
    dogBreed,
    isCrossbreedDog,
    crossbreedDogDetails,
    dogDewormed,
    dogMicrochipped,
    dogVaccinated,
    dogSterilized
  }
`

export const adoptedAnimalsQuery = `
  *[_type == "animal" && adoptionStatus == "adopted"] | order(name asc) {
    _id,
    name,
    slug,
    species,
    sex,
    birthMonth,
    birthYear,
    image,
    fivStatus,
    felvStatus,
    specialConditions
  }
`

export const allEventsQuery = `
  *[_type == "event"] | order(date asc) {
    _id,
    title,
    date,
    time,
    location,
    street,
    contacts,
    poster
  }
`

export const availableCatsQuery = `
  *[
    _type == "animal" &&
    species == "cat" &&
    adoptionStatus == "available"
  ] | order(name asc) {
    _id,
    name,
    slug,
    species,
    sex,
    birthMonth,
    birthYear,
    hostLocation,
    description,
    image,
    empethyUrl,

    coatLength,
    breed,
    isCrossbreed,
    crossbreedDetails,
    dewormed,
    microchipped,
    vaccinated,
    sterilized,
    fivStatus,
    felvStatus,
    specialConditions,
    healthNotes
  }
`
export const testimonialsQuery = `
  *[_type == "testimonial" && isPublished == true] | order(orderRank asc, _createdAt desc) {
    _id,
    name,
    role,
    quote,
    relatedAnimalName
  }
`